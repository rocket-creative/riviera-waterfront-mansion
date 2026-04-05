import { writeFileSync } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  if (process.env.NODE_ENV === 'production') {
    return new NextResponse('Not Found', { status: 404 });
  }

  try {
    const body = await request.json();
    const {
      hero,
      pageHeroes,
      homepage,
      tour,
      tourPreviews,
      sections,
      menuImages,
      menuSectionHeroes,
    } = body;

    const content = generateImageConfigTs({
      hero,
      pageHeroes,
      homepage,
      tour,
      tourPreviews,
      sections,
      menuImages,
      menuSectionHeroes,
    });
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

/** Serialize a Record<string, string[]> into TS object literal lines */
function arrayMapLines(record: Record<string, string[]>, keyPad = 0): string {
  return Object.entries(record).map(([k, imgs]) => {
    const padded = `'${k}':`.padEnd(keyPad);
    if (!imgs || imgs.length === 0) return `    ${padded} [],`;
    if (imgs.length === 1) return `    ${padded} ['${imgs[0]}'],`;
    const inner = imgs.map(p => `      '${p}',`).join('\n');
    return `    ${padded} [\n${inner}\n    ],`;
  }).join('\n');
}

function generateImageConfigTs(config: {
  hero: string[];
  pageHeroes: Record<string, string[]>;
  homepage: Record<string, string[]>;
  tour: Record<string, string[]>;
  tourPreviews: Record<string, string[]>;
  sections: Record<string, string[]>;
  menuImages: Record<string, string[]>;
  menuSectionHeroes: Record<string, string[]>;
}): string {
  const heroLines = config.hero.map(p => `'${p}',`);

  const tourLines = Object.entries(config.tour).map(([k, imgs]) => {
    const inner = imgs.map(p => `      '${p}',`).join('\n');
    return `    '${k}': [\n${inner}\n    ],`;
  });

  const menuImageLines = Object.entries(config.menuImages).map(([k, imgs]) => {
    if (!imgs || imgs.length === 0) return `    '${k}': [],`;
    if (imgs.length === 1) return `    '${k}': ['${imgs[0]}'],`;
    const inner = imgs.map(p => `      '${p}',`).join('\n');
    return `    '${k}': [\n${inner}\n    ],`;
  });

  const menuSectionHeroLines = Object.entries(config.menuSectionHeroes).map(([k, imgs]) => {
    const inner = imgs.map(p => `      '${p}',`).join('\n');
    return `    '${k}': [\n${inner}\n    ],`;
  });

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

  // Per-page hero images — slideshow capable, edit via /admin/image-manager
  pageHeroes: {
${arrayMapLines(config.pageHeroes, 10)}
  },

  // Homepage section images — slideshow capable
  homepage: {
${arrayMapLines(config.homepage, 14)}
  },

  // Tour Section Galleries
  tour: {
${tourLines.join('\n')}
  },

  // Tour grid preview images — slideshow capable, edit via /admin/image-manager
  tourPreviews: {
${arrayMapLines(config.tourPreviews, 22)}
  },

  // Section CTA images — slideshow capable, edit via /admin/image-manager
  sections: {
${arrayMapLines(config.sections, 10)}
  },

  // Menu Section Hero Carousels — edit via /admin/image-manager
  menuSectionHeroes: {
${menuSectionHeroLines.join('\n')}
  },

  // Menu item image slideshows — each slot holds an array; edit via /admin/image-manager
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
 * Get preview images for tour section (slideshow array)
 */
export function getTourPreviews(slug: string): string[] {
  return (imageConfig.tourPreviews[slug as keyof typeof imageConfig.tourPreviews] as string[] | undefined) ?? [];
}

/**
 * Get first preview image for tour section (backwards compat)
 */
export function getTourPreview(slug: string): string {
  return getTourPreviews(slug)[0] ?? '';
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
