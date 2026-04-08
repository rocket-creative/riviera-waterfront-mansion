import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

const ALLOWED_FOLDERS = ['large', 'medium', 'thumb', 'cocktail-hour', 'enhancements', 'dinner-plates'];

export async function POST(request: Request) {
  if (process.env.NODE_ENV === 'production') {
    return new NextResponse('Not Found', { status: 404 });
  }

  try {
    const formData = await request.formData();
    const folder = formData.get('folder') as string;
    const files = formData.getAll('files') as File[];

    if (!folder || !ALLOWED_FOLDERS.includes(folder)) {
      return NextResponse.json({ success: false, error: 'Invalid folder' }, { status: 400 });
    }

    if (!files || files.length === 0) {
      return NextResponse.json({ success: false, error: 'No files provided' }, { status: 400 });
    }

    const targetDir = join(process.cwd(), 'public', 'images', folder);
    if (!existsSync(targetDir)) {
      mkdirSync(targetDir, { recursive: true });
    }

    const saved: string[] = [];
    const errors: string[] = [];

    for (const file of files) {
      if (!file.name || !/\.(jpg|jpeg|png|webp)$/i.test(file.name)) {
        errors.push(`${file.name}: unsupported format`);
        continue;
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Sanitize filename: lowercase, replace spaces with dashes
      const safeName = file.name
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9._-]/g, '');

      const filePath = join(targetDir, safeName);
      writeFileSync(filePath, buffer);
      saved.push(`/images/${folder}/${safeName}`);
    }

    return NextResponse.json({ success: true, saved, errors });
  } catch (err) {
    console.error('upload error:', err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
