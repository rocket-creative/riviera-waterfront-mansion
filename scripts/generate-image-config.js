#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '../USE THESE');
const OUTPUT_FILE = path.join(__dirname, '../app/lib/imageConfig.ts');

// Tour sections that need images (14 sections × 6 images each = 84 images)
const TOUR_SECTIONS = [
  'entrance-lobby',
  'bridal-suite',
  'indoor-ceremony',
  'outdoor-ceremony',
  'indoor-cocktail',
  'outdoor-cocktail',
  'main-ballroom',
  'sweetheart-table',
  'guest-seating',
  'dancefloor',
  'entertainment',
  'main-bar',
  'balconies',
  'photo-locations',
];

async function getImageFiles() {
  const files = await fs.readdir(SOURCE_DIR);
  return files
    .filter(file => /\.(jpg|jpeg)$/i.test(file))
    .sort();
}

function distributeImages(images) {
  // Allocate images:
  // - 6 for hero carousel (spread throughout collection for variety)
  // - 2 for homepage sections (whyChooseUs, venue)
  // - 14 sections × 6 images = 84 for tour galleries
  // - 14 × 1 preview = 14 (reuses first image of each section)
  // Total needed: 6 + 2 + 84 = 92 images (leaving 25 extras for flexibility)

  const totalImages = images.length;
  
  // Pick hero carousel images spread throughout the collection
  // This ensures variety instead of sequential images
  const heroIndices = [
    0,                                    // First image
    Math.floor(totalImages * 0.2),       // 20% through
    Math.floor(totalImages * 0.4),       // 40% through
    Math.floor(totalImages * 0.6),       // 60% through
    Math.floor(totalImages * 0.8),       // 80% through
    totalImages - 1,                      // Last image
  ];

  const allocation = {
    heroCarousel: heroIndices.map(i => images[i]),
    homepage: {
      whyChooseUs: images[Math.floor(totalImages * 0.15)],
      venue: images[Math.floor(totalImages * 0.25)],
    },
    tour: {},
    tourPreviews: {},
  };

  // Distribute remaining images to tour sections (6 per section)
  // Start after the carousel selections to avoid duplicates
  let imageIndex = 6;
  const imagesPerSection = 6;
  
  for (const section of TOUR_SECTIONS) {
    const sectionImages = [];
    
    for (let i = 0; i < imagesPerSection; i++) {
      // Pick images spread throughout remaining collection
      const pickIndex = imageIndex + i;
      if (pickIndex < totalImages) {
        sectionImages.push(images[pickIndex]);
      } else {
        // If we run out, pick from middle section we haven't used yet
        sectionImages.push(images[Math.floor(totalImages * 0.5) + i]);
      }
    }
    
    allocation.tour[section] = sectionImages;
    allocation.tourPreviews[section] = sectionImages[0]; // First image as preview
    
    imageIndex += imagesPerSection;
  }

  return allocation;
}

function generateConfigFile(allocation) {
  const heroCarousel = allocation.heroCarousel.map(img => `/images/large/${img}`);
  const hero = [heroCarousel[0]]; // Single hero for backwards compatibility
  
  const tourSections = Object.entries(allocation.tour)
    .map(([section, images]) => {
      const imagesList = images.map(img => `'/images/medium/${img}'`).join(',\n      ');
      return `    '${section}': [\n      ${imagesList},\n    ]`;
    })
    .join(',\n');

  const tourPreviews = Object.entries(allocation.tourPreviews)
    .map(([section, image]) => `    '${section}': '/images/medium/${image}'`)
    .join(',\n');

  return `/**
 * Image Configuration for Riviera Waterfront Mansion
 * Maps optimized images to specific sections across the site
 * Organized by size: large (hero), medium (sections), thumb (previews)
 * 
 * Auto-generated from 117 source images in USE THESE folder
 */

export const imageConfig = {
  // Homepage Hero Rotations - Single static hero (legacy)
  hero: [
    '${heroCarousel[0]}',
  ],

  // Hero Carousel - Multiple couples, rotating homepage hero
  // Displays 6 different wedding couples in rotation
  heroCarousel: [
    ${heroCarousel.map(img => `'${img}'`).join(',\n    ')},
  ],

  // Homepage Sections
  homepage: {
    whyChooseUs: '/images/medium/${allocation.homepage.whyChooseUs}',
    venue: '/images/medium/${allocation.homepage.venue}',
  },

  // Tour Section Images (6 images per section × 14 sections)
  tour: {
${tourSections}
  },

  // Tour Grid Preview Images (one per section)
  tourPreviews: {
${tourPreviews}
  },
};

/**
 * Get images for a specific tour section
 */
export function getTourImages(slug: string): string[] {
  return imageConfig.tour[slug as keyof typeof imageConfig.tour] || [];
}

/**
 * Get preview image for tour section
 */
export function getTourPreview(slug: string): string {
  return imageConfig.tourPreviews[slug as keyof typeof imageConfig.tourPreviews] || '';
}

/**
 * Get random hero image from carousel
 */
export function getHeroImage(): string {
  const heroes = imageConfig.heroCarousel;
  return heroes[Math.floor(Math.random() * heroes.length)];
}
`;
}

async function main() {
  console.log('📝 Image Config Generator');
  console.log('=========================\n');

  // Get all source images
  const imageFiles = await getImageFiles();
  console.log(`Found ${imageFiles.length} images\n`);

  if (imageFiles.length === 0) {
    console.error('❌ No images found in USE THESE folder');
    process.exit(1);
  }

  // Distribute images across sections
  console.log('Distributing images:');
  console.log(`  - Hero Carousel: 6 images`);
  console.log(`  - Homepage Sections: 2 images`);
  console.log(`  - Tour Galleries: 14 sections × 6 images = 84 images`);
  console.log(`  - Tour Previews: 14 images (reused from galleries)`);
  console.log(`  - Total allocated: 92 images`);
  console.log(`  - Remaining for flexibility: ${imageFiles.length - 92} images\n`);

  const allocation = distributeImages(imageFiles);

  // Generate TypeScript config file
  const configContent = generateConfigFile(allocation);
  await fs.writeFile(OUTPUT_FILE, configContent, 'utf8');

  console.log(`✅ Generated: ${path.relative(process.cwd(), OUTPUT_FILE)}`);
  console.log('\n=========================');
  console.log('✅ Image config generated!');
  console.log('=========================\n');
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
