import { readdirSync, statSync, existsSync } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

const IMAGE_EXT = /\.(jpg|jpeg|png|webp)$/i;

function listFolder(dir: string, publicPrefix: string): string[] {
  if (!existsSync(dir)) return [];
  try {
    return readdirSync(dir)
      .filter(f => IMAGE_EXT.test(f))
      .sort()
      .map(f => `${publicPrefix}/${f}`);
  } catch {
    return [];
  }
}

/** Recursively collect all images under a directory */
function walkImages(dir: string, publicBase: string): string[] {
  if (!existsSync(dir)) return [];
  const results: string[] = [];
  try {
    for (const entry of readdirSync(dir).sort()) {
      const full = join(dir, entry);
      const rel = `${publicBase}/${entry}`;
      if (statSync(full).isDirectory()) {
        results.push(...walkImages(full, rel));
      } else if (IMAGE_EXT.test(entry)) {
        results.push(rel);
      }
    }
  } catch { /* skip unreadable */ }
  return results;
}

export async function GET() {
  if (process.env.NODE_ENV === 'production') {
    return new NextResponse('Not Found', { status: 404 });
  }

  const baseDir = join(process.cwd(), 'public/images');

  // Named flat folders (legacy — kept for backwards compat with slot pickers)
  const namedFolders = ['large', 'medium', 'thumb', 'cocktail-hour', 'enhancements', 'dinner-plates'];
  const result: Record<string, string[]> = {};

  for (const folder of namedFolders) {
    result[folder] = listFolder(join(baseDir, folder), `/images/${folder}`);
  }

  // Master pool: new uploads land here
  result['pool'] = listFolder(join(baseDir, 'pool'), '/images/pool');

  // Tour sub-section folders exposed individually so tour tab still works
  result['tour'] = walkImages(join(baseDir, 'tour'), '/images/tour');

  // ALL: unified master pool — every image on the server, deduplicated
  const all = Array.from(new Set([
    ...result['pool'],
    ...result['large'],
    ...result['medium'],
    ...result['cocktail-hour'],
    ...result['enhancements'],
    ...result['dinner-plates'],
    ...result['tour'],
  ]));
  result['all'] = all;

  return NextResponse.json(result);
}
