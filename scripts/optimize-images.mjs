import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';

const PUBLIC = 'public';

// Per-folder rules: [maxWidth, jpegQuality]
const RULES = {
  'images/large':          [1920, 80],
  'images/medium':         [1024, 82],
  'images/thumb':          [480,  82],
  'images/cocktail-hour':  [1200, 80],
  'images/dinner-plates':  [1200, 80],
  'images/enhancements':   [1200, 80],
  '':                      [1920, 85], // root-level PNGs/JPGs
};

let totalBefore = 0;
let totalAfter  = 0;
let fileCount   = 0;

async function getSize(file) {
  const s = await stat(file);
  return s.size;
}

async function optimizeDir(dir, maxWidth, quality) {
  let files;
  try { files = await readdir(dir); } catch { return; }

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const src  = join(dir, file);
    const tmp  = src + '.tmp';

    const before = await getSize(src);
    totalBefore += before;

    try {
      const img = sharp(src);
      const meta = await img.metadata();

      let pipeline = img;

      // Only downscale, never upscale
      if (meta.width && meta.width > maxWidth) {
        pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
      }

      if (ext === '.png') {
        await pipeline.png({ compressionLevel: 9, effort: 10 }).toFile(tmp);
      } else {
        await pipeline.jpeg({ quality, mozjpeg: true }).toFile(tmp);
      }

      const after = await getSize(tmp);

      // Only replace if we actually saved space (mozjpeg occasionally inflates tiny images)
      if (after < before) {
        await unlink(src);
        await rename(tmp, src);
        totalAfter += after;
        fileCount++;
        const saved = ((before - after) / before * 100).toFixed(1);
        console.log(`✓ ${file.padEnd(55)} ${(before/1024).toFixed(0).padStart(6)}KB → ${(after/1024).toFixed(0).padStart(6)}KB  (${saved}% saved)`);
      } else {
        await unlink(tmp);
        totalAfter += before;
        console.log(`– ${file.padEnd(55)} ${(before/1024).toFixed(0).padStart(6)}KB  (already optimal)`);
      }
    } catch (err) {
      try { await unlink(tmp).catch(() => {}); } catch {}
      totalAfter += before;
      console.warn(`⚠ skipped ${file}: ${err.message}`);
    }
  }
}

async function main() {
  console.log('Optimizing images…\n');

  for (const [folder, [maxWidth, quality]] of Object.entries(RULES)) {
    const dir = join(PUBLIC, folder);
    console.log(`\n── ${dir || 'public/'} (max ${maxWidth}px, q${quality}) ──`);
    await optimizeDir(dir, maxWidth, quality);
  }

  const savedMB  = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(1);
  const savedPct = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);

  console.log(`\n${'─'.repeat(70)}`);
  console.log(`Before : ${(totalBefore / 1024 / 1024).toFixed(1)} MB`);
  console.log(`After  : ${(totalAfter  / 1024 / 1024).toFixed(1)} MB`);
  console.log(`Saved  : ${savedMB} MB  (${savedPct}%)  across ${fileCount} files optimized`);
}

main().catch(console.error);
