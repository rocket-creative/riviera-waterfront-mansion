import { mkdirSync, existsSync } from 'fs';
import { join, parse } from 'path';
import { NextResponse } from 'next/server';
import sharp from 'sharp';

const POOL_DIR = join(process.cwd(), 'public', 'images', 'pool');
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 82;

export async function POST(request: Request) {
  if (process.env.NODE_ENV === 'production') {
    return new NextResponse('Not Found', { status: 404 });
  }

  try {
    const formData = await request.formData();
    const files = formData.getAll('files') as File[];

    if (!files || files.length === 0) {
      return NextResponse.json({ success: false, error: 'No files provided' }, { status: 400 });
    }

    if (!existsSync(POOL_DIR)) {
      mkdirSync(POOL_DIR, { recursive: true });
    }

    const saved: string[] = [];
    const errors: string[] = [];

    for (const file of files) {
      if (!file.name || !/\.(jpg|jpeg|png|webp)$/i.test(file.name)) {
        errors.push(`${file.name}: unsupported format (use JPG, PNG, or WebP)`);
        continue;
      }

      try {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Sanitize filename and force .jpg extension (we output JPEG)
        const { name: baseName } = parse(file.name);
        const safeName = baseName
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9._-]/g, '') + '.jpg';

        // Optimize: resize to max 1920px wide, compress to quality 82
        const optimized = await sharp(buffer)
          .rotate() // auto-rotate based on EXIF
          .resize({ width: MAX_WIDTH, withoutEnlargement: true })
          .jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true })
          .toBuffer();

        const filePath = join(POOL_DIR, safeName);
        const { writeFileSync } = await import('fs');
        writeFileSync(filePath, optimized);

        const originalMB = (buffer.byteLength / 1024 / 1024).toFixed(1);
        const optimizedMB = (optimized.byteLength / 1024 / 1024).toFixed(1);
        saved.push(`/images/pool/${safeName} (${originalMB}MB → ${optimizedMB}MB)`);
      } catch (fileErr) {
        errors.push(`${file.name}: ${String(fileErr)}`);
      }
    }

    return NextResponse.json({ success: true, saved, errors });
  } catch (err) {
    console.error('upload error:', err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
