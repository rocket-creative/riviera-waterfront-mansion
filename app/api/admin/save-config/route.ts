import { writeFileSync } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  if (process.env.NODE_ENV === 'production') {
    return new NextResponse('Not Found', { status: 404 });
  }

  try {
    const body = await request.json();
    const { hero, homepage, tour, tourPreviews, sections, menuImages } = body;

    const content = generateImageConfigTs({ hero, homepage, tour, tourPreviews, sections, menuImages });
    const filePath = join(process.cwd(), 'app/lib/imageConfig.ts');
    writeFileSync(filePath, content, 'utf-8');

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('save-config error:', err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}

function indent(strs: string[], spaces = 4) {
  return strs.map(s => ' '.repeat(spaces) + s).join('\n');
}

function generateImageConfigTs(config: {
  hero: string[];
  homepage: Record<string, string>;
  tour: Record<string, string[]>;
  tourPreviews: Record<string, string>;
  sections: Record<string, string>;
  menuImages: Record<string, string>;
}): string {
  const heroLines = config.hero.map(p => `'${p}',`);
  const tourLines = Object.entries(config.tour).map(([k, imgs]) => {
    const imgLines = imgs.map(p => `      '${p}',`).join('\n');
    return `    '${k}': [\n${imgLines}\n    ],`;
  });
  const tourPreviewLines = Object.entries(config.tourPreviews).map(
    ([k, v]) => `    '${k}': '${v}',`
  );
  const menuImageLines = Object.entries(config.menuImages).map(
    ([k, v]) => `    '${k}': '${v}',`
  );

  return `/**
 * Image Configuration for Riviera Waterfront Mansion
 * Maps images to specific sections across the site
 * Organized by size: large (hero/full-bleed), medium (sections/galleries), thumb (previews)
 *
 * Managed via /admin/image-manager — use the admin tool to reassign images.
 * All paths below are confirmed to exist in /public/images/
 */

export const imageConfig = {
  // Homepage Hero Carousel — large, full-bleed shots
  hero: [
${indent(heroLines)}
  ],

  // Homepage Sections
  homepage: {
    whyChooseUs: '${config.homepage.whyChooseUs}',
    venue: '${config.homepage.venue}',
  },

  // Tour Section Galleries
  tour: {
${tourLines.join('\n')}
  },

  // Tour Grid Preview Images (one per section)
  tourPreviews: {
${tourPreviewLines.join('\n')}
  },

  // Additional section images used across other pages
  sections: {
    vendors: '${config.sections.vendors}',
    contact: '${config.sections.contact}',
    menu:    '${config.sections.menu}',
    rates:   '${config.sections.rates}',
  },

  // Menu page image assignments — edit via /admin/image-manager
  menuImages: {
${menuImageLines.join('\n')}
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
 * Get hero images for carousel
 */
export function getHeroImage(): string {
  const heroes = imageConfig.hero;
  return heroes[Math.floor(Math.random() * heroes.length)];
}
`;
}
