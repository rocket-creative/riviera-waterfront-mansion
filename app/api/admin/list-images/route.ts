import { readdirSync } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  if (process.env.NODE_ENV === 'production') {
    return new NextResponse('Not Found', { status: 404 });
  }

  const baseDir = join(process.cwd(), 'public/images');
  const folders = ['large', 'medium', 'thumb', 'cocktail-hour', 'enhancements', 'dinner-plates'];
  const result: Record<string, string[]> = {};

  for (const folder of folders) {
    try {
      const files = readdirSync(join(baseDir, folder))
        .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
        .sort()
        .map(f => `/images/${folder}/${f}`);
      result[folder] = files;
    } catch {
      result[folder] = [];
    }
  }

  return NextResponse.json(result);
}
