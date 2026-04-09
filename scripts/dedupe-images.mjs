/**
 * dedupe-images.mjs
 * 
 * Finds duplicate images (by MD5 hash) in public/images.
 * For each duplicate group:
 *   - Keeps the copy that is already referenced in imageConfig.ts
 *     (or the first alphabetically if multiple are referenced)
 *   - Updates imageConfig.ts so all other paths are rewritten to the canonical path
 *   - Deletes the extra files
 * 
 * Run: node scripts/dedupe-images.mjs [--dry-run]
 */

import { createHash } from 'crypto';
import { readFileSync, writeFileSync, unlinkSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PUBLIC_IMAGES = join(ROOT, 'public/images');
const IMAGE_CONFIG_PATH = join(ROOT, 'app/lib/imageConfig.ts');
const DRY_RUN = process.argv.includes('--dry-run');

if (DRY_RUN) console.log('🔍 DRY RUN — no files will be changed\n');

// ── 1. Collect all image files ────────────────────────────────────────────────

function walkImages(dir, results = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walkImages(full, results);
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(entry)) {
      results.push(full);
    }
  }
  return results;
}

const allFiles = walkImages(PUBLIC_IMAGES);
console.log(`Found ${allFiles.length} total image files`);

// ── 2. Group by MD5 hash ──────────────────────────────────────────────────────

const hashMap = new Map(); // hash → [absolutePath, ...]

for (const file of allFiles) {
  const buf = readFileSync(file);
  const hash = createHash('md5').update(buf).digest('hex');
  if (!hashMap.has(hash)) hashMap.set(hash, []);
  hashMap.get(hash).push(file);
}

const duplicateGroups = [...hashMap.values()].filter(g => g.length > 1);
console.log(`Found ${duplicateGroups.length} duplicate groups\n`);

// ── 3. Load imageConfig.ts to determine which paths are referenced ────────────

const configSource = readFileSync(IMAGE_CONFIG_PATH, 'utf-8');

function toPublicPath(absPath) {
  // Convert absolute filesystem path → /images/... public URL
  const rel = relative(join(ROOT, 'public'), absPath);
  return '/' + rel.replace(/\\/g, '/');
}

// ── 4. For each group, pick the canonical copy ────────────────────────────────

let totalDeleted = 0;
let totalRemapped = 0;
let updatedConfig = configSource;

for (const group of duplicateGroups) {
  // Convert all to public paths
  const publicPaths = group.map(toPublicPath);

  // Prefer the path that appears in imageConfig; if multiple do, pick first alphabetically
  const referenced = publicPaths.filter(p => configSource.includes(`'${p}'`) || configSource.includes(`"${p}"`));
  const canonical = referenced.length > 0
    ? referenced.sort()[0]
    : publicPaths.sort()[0];

  const canonicalAbs = join(ROOT, 'public', canonical.slice(1));

  const others = publicPaths.filter(p => p !== canonical);

  console.log(`KEEP:   ${canonical}`);
  for (const other of others) {
    console.log(`  → REMAP: ${other}`);
    // Replace all occurrences of this path in imageConfig
    const occurrences = (updatedConfig.match(new RegExp(escapeRegex(other), 'g')) || []).length;
    if (occurrences > 0) {
      updatedConfig = updatedConfig.replaceAll(other, canonical);
      totalRemapped += occurrences;
      console.log(`    (remapped ${occurrences} reference${occurrences !== 1 ? 's' : ''} in imageConfig.ts)`);
    }

    if (!DRY_RUN) {
      const absOther = join(ROOT, 'public', other.slice(1));
      try {
        unlinkSync(absOther);
        totalDeleted++;
      } catch (e) {
        console.error(`    ERROR deleting ${absOther}: ${e.message}`);
      }
    } else {
      totalDeleted++;
    }
  }
  console.log('');
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ── 5. Write updated imageConfig.ts ──────────────────────────────────────────

if (!DRY_RUN && updatedConfig !== configSource) {
  writeFileSync(IMAGE_CONFIG_PATH, updatedConfig, 'utf-8');
  console.log(`✅ imageConfig.ts updated (${totalRemapped} path${totalRemapped !== 1 ? 's' : ''} remapped)`);
}

console.log(`\n${DRY_RUN ? '(DRY RUN) Would delete' : 'Deleted'} ${totalDeleted} duplicate file${totalDeleted !== 1 ? 's' : ''}`);
console.log(`${DRY_RUN ? '(DRY RUN) Would remap' : 'Remapped'} ${totalRemapped} imageConfig reference${totalRemapped !== 1 ? 's' : ''}`);
