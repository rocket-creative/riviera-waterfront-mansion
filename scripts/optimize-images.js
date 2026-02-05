#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '../USE THESE');
const OUTPUT_DIR = path.join(__dirname, '../public/images');

// Image size configurations
const SIZES = {
  large: { width: 1920, quality: 90 }, // Hero images
  medium: { width: 1200, quality: 85 }, // Section images
  thumb: { width: 600, quality: 80 },   // Thumbnails/previews
};

async function ensureDir(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function getImageFiles() {
  const files = await fs.readdir(SOURCE_DIR);
  return files
    .filter(file => /\.(jpg|jpeg)$/i.test(file))
    .sort();
}

async function optimizeImage(inputPath, outputPath, size) {
  try {
    await sharp(inputPath)
      .resize(size.width, null, {
        withoutEnlargement: true,
        fit: 'inside',
      })
      .jpeg({
        quality: size.quality,
        progressive: true,
        mozjpeg: true,
      })
      .toFile(outputPath);
    
    return true;
  } catch (error) {
    console.error(`Error optimizing ${path.basename(inputPath)}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🖼️  Image Optimization Script');
  console.log('================================\n');

  // Get all source images
  const imageFiles = await getImageFiles();
  console.log(`Found ${imageFiles.length} images to optimize\n`);

  if (imageFiles.length === 0) {
    console.error('❌ No images found in USE THESE folder');
    process.exit(1);
  }

  // Create output directories
  for (const sizeName of Object.keys(SIZES)) {
    const dir = path.join(OUTPUT_DIR, sizeName);
    await ensureDir(dir);
    console.log(`✅ Created directory: public/images/${sizeName}`);
  }
  console.log('');

  // Process each image
  let completed = 0;
  let failed = 0;

  for (const [index, filename] of imageFiles.entries()) {
    const inputPath = path.join(SOURCE_DIR, filename);
    const progress = `[${index + 1}/${imageFiles.length}]`;
    
    console.log(`${progress} Processing: ${filename}`);

    // Optimize to each size
    for (const [sizeName, sizeConfig] of Object.entries(SIZES)) {
      const outputPath = path.join(OUTPUT_DIR, sizeName, filename);
      const success = await optimizeImage(inputPath, outputPath, sizeConfig);
      
      if (!success) {
        failed++;
      }
    }
    
    completed++;
  }

  console.log('\n================================');
  console.log(`✅ Optimization complete!`);
  console.log(`   Processed: ${completed} images`);
  console.log(`   Failed: ${failed} images`);
  console.log(`   Output: public/images/`);
  console.log('================================\n');
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
