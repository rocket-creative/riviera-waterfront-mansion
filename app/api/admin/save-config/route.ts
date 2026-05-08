import { writeFileSync } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

/**
 * Persists edits from /admin/image-manager by rewriting app/lib/imageConfig.ts.
 *
 * IMPORTANT: Saves are disabled in production (returns 404). On Vercel there is no
 * separate server-side image store; only this repo file (and static public assets) apply.
 */
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
      tourHeroes,
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
      tourHeroes,
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
  tourHeroes: Record<string, string[]>;
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

  // Tour detail page hero images — full-bleed, one per section, edit via /admin/image-manager
  tourHeroes: {
${arrayMapLines(config.tourHeroes, 22)}
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

const TOUR_GRID_PREVIEW_MAX = 8;

/** Client-requested exclusions: identifiable couple-heavy frames (stay out of venue marketing galleries). Match literals in save-config/route.ts generateImageConfigTs output. */
const BANNED_TOUR_MARKETING_SUBSTRINGS = [
  'dsc07552-mc-d-6f2bb2bf',
  'dsc07530-mc-d-6b6ebd24',
  'dsc04305-web-fa6b6ecf',
  'dsc02284-mc-d-ef3e99ba',
] as const;

function tourPathBannedFromVenueMarketing(src: string): boolean {
  const f = src.toLowerCase();
  return BANNED_TOUR_MARKETING_SUBSTRINGS.some(sub => f.includes(sub));
}

/** Filenames tagged as portrait exports in shared naming (listing grid favors landscape shots). */
function tourPathLooksPortraitTagged(src: string): boolean {
  const f = src.toLowerCase();
  return f.includes('-port-') || f.includes('_port-') || f.includes('aa-port');
}

function pickTourGridPreviewPaths(paths: string[], max: number): string[] {
  const noBan = paths.filter((p) => !tourPathBannedFromVenueMarketing(p));
  const landscape = noBan.filter((p) => !tourPathLooksPortraitTagged(p));
  const pool = landscape.length ? landscape : noBan;
  return pool.slice(0, max);
}

/**
 * Get images for a specific tour section
 */
export function getTourImages(slug: string): string[] {
  const raw = imageConfig.tour[slug as keyof typeof imageConfig.tour] || [];
  return raw.filter((p) => !tourPathBannedFromVenueMarketing(p));
}

/**
 * Tour listing grid slideshow: first landscapes from section gallery, capped for performance.
 */
export function getTourPreviews(slug: string): string[] {
  const key = slug as keyof typeof imageConfig.tour;
  const gallery = imageConfig.tour[key];
  if (Array.isArray(gallery) && gallery.length > 0) {
    const allowed = gallery.filter((p) => !tourPathBannedFromVenueMarketing(p));
    if (allowed.length > 0) {
      return pickTourGridPreviewPaths(allowed, TOUR_GRID_PREVIEW_MAX);
    }
  }
  const curated = imageConfig.tourPreviews[key as keyof typeof imageConfig.tourPreviews] as string[] | undefined;
  return curated?.length ? pickTourGridPreviewPaths(curated, TOUR_GRID_PREVIEW_MAX) : [];
}

/**
 * Get first preview image for tour section (backwards compat)
 */
export function getTourPreview(slug: string): string {
  return getTourPreviews(slug)[0] ?? '';
}

/**
 * Get hero image for a tour detail page
 * Falls back to tourPreviews if no hero is set
 */
export function getTourHero(slug: string): string {
  const heroes = imageConfig.tourHeroes[slug as keyof typeof imageConfig.tourHeroes] as string[] | undefined;
  return heroes?.[0] ?? getTourPreview(slug);
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
