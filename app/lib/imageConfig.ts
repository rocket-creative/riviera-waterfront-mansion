/**
 * Image Configuration for Riviera Waterfront Mansion
 * Maps images to specific sections across the site
 * Organized by size: large (hero/full-bleed), medium (sections/galleries), thumb (previews)
 *
 * NOTE: Images are being curated and sorted — final placements coming by end of week.
 * All paths below are confirmed to exist in /public/images/
 */

export const imageConfig = {
  // Homepage Hero Carousel — large, full-bleed shots
  hero: [
    '/images/large/_0359671-by-p.jpg',
    '/images/large/_1058724-jj-p.jpg',
    '/images/large/_1059409-jj-p.jpg',
    '/images/large/_0359652-by-p.jpg',
    '/images/large/_0350091-by-p.jpg',
  ],

  // Homepage Sections
  homepage: {
    whyChooseUs: '/images/medium/_DSC8472jj-p.jpg',
    venue: '/images/medium/_50M1309-jj-p.jpg',
  },

  // Tour Section Galleries
  tour: {
    'entrance-lobby': [
      '/images/medium/_COL3623ca-p.jpg',
      '/images/medium/_COL3650ca-p.jpg',
      '/images/medium/_COL4083ca-p.jpg',
      '/images/medium/_COL4113ca-p.jpg',
      '/images/medium/_DSC0105km-p.jpg',
      '/images/medium/_50M1180-jj-p.jpg',
    ],
    'bridal-suite': [
      '/images/medium/_50M1475-ea-p.jpg',
      '/images/medium/_50M1493-ea-p.jpg',
      '/images/medium/_50M1509-ea-p.jpg',
      '/images/medium/_1051082-ea-p.jpg',
      '/images/medium/_1051106-ea-p.jpg',
      '/images/medium/_1051114-ea-p.jpg',
    ],
    'indoor-ceremony': [
      '/images/medium/_DSC3690kj-p.jpg',
      '/images/medium/_DSC3719kj-p.jpg',
      '/images/medium/_DSC3731kj-p.jpg',
      '/images/medium/_DSC3736kj-p.jpg',
      '/images/medium/_DSC3791kj-p.jpg',
      '/images/medium/_DSC3802kj-p.jpg',
    ],
    'outdoor-ceremony': [
      '/images/medium/_24M0956-jb-25-P.jpg',
      '/images/medium/_24M1353-jb-25-P.jpg',
      '/images/medium/_2000804-jb-25-P.jpg',
      '/images/medium/_2001310-jb-25-P.jpg',
      '/images/medium/_2001396-jb-25-P.jpg',
      '/images/medium/_DSC3834kj-p.jpg',
    ],
    'indoor-cocktail': [
      '/images/medium/_50M1199-jj-p.jpg',
      '/images/medium/_50M1231-jj-p.jpg',
      '/images/medium/_50M1265-jj-p.jpg',
      '/images/medium/_50M1318-jj-p.jpg',
      '/images/medium/_DSC8472jj-p.jpg',
      '/images/medium/_DSC8809jj-p2.jpg',
    ],
    'outdoor-cocktail': [
      '/images/medium/_0350052-by-p.jpg',
      '/images/medium/_0350091-by-p.jpg',
      '/images/medium/_0350158-by-p.jpg',
      '/images/medium/_0359652-by-p.jpg',
      '/images/medium/_0359665-by-p.jpg',
      '/images/medium/_0359672-by-p.jpg',
    ],
    'main-ballroom': [
      '/images/medium/_1058432-jj-p.jpg',
      '/images/medium/_1058724-jj-p.jpg',
      '/images/medium/_1059409-jj-p.jpg',
      '/images/medium/_50M2983jj-p4.jpg',
      '/images/medium/_50M3097jj-p4.jpg',
      '/images/medium/_50M2666sc-p.jpg',
    ],
    'sweetheart-table': [
      '/images/medium/_DSC0623mj-p.jpg',
      '/images/medium/_DSC0641mj-p.jpg',
      '/images/medium/_DSC1372mj-p.jpg',
      '/images/medium/_DSC1442mj-p.jpg',
      '/images/medium/_DSC1460mj-p.jpg',
      '/images/medium/_50M2696sc-p.jpg',
    ],
    'guest-seating': [
      '/images/medium/_GS20092sc-p.jpg',
      '/images/medium/_GS28772sc-p.jpg',
      '/images/medium/_GS28894sc-p.jpg',
      '/images/medium/_GS28903sc-p.jpg',
      '/images/medium/_GS28912sc-p.jpg',
      '/images/medium/_GS28968sc-p.jpg',
    ],
    'dancefloor': [
      '/images/medium/_GS28994sc-p.jpg',
      '/images/medium/_GS29344sc-p.jpg',
      '/images/medium/_GS29350sc-p.jpg',
      '/images/medium/_GS29360sc-p.jpg',
      '/images/medium/_GS29387sc-p.jpg',
      '/images/medium/_50M8930sa-p.jpg',
    ],
    'entertainment': [
      '/images/medium/_50M8937sa-p.jpg',
      '/images/medium/_50M8944sa-p.jpg',
      '/images/medium/_50M9919aa-port-2.jpg',
      '/images/medium/_50M9979aa-port-2.jpg',
      '/images/medium/_DSC5029aa-port-2.jpg',
      '/images/medium/_DSC5114aa-port-2.jpg',
    ],
    'main-bar': [
      '/images/medium/_DSC5139aa-port-2.jpg',
      '/images/medium/_DSC6150aa-port-2.jpg',
      '/images/medium/_DSC4617cb-p.jpg',
      '/images/medium/_DSC4629cb-p.jpg',
      '/images/medium/_DSC4647cb-p.jpg',
      '/images/medium/_DSC4964cb-p.jpg',
    ],
    'balconies': [
      '/images/medium/_0359684-by-p.jpg',
      '/images/medium/_0359695-by-p.jpg',
      '/images/medium/_0359729-by-p.jpg',
      '/images/medium/_0359733-by-p.jpg',
      '/images/medium/_0359744-by-p.jpg',
      '/images/medium/_0359671-by-p.jpg',
    ],
    'photo-locations': [
      '/images/medium/_2004078-sm-t.jpg',
      '/images/medium/_2004142-sm-t.jpg',
      '/images/medium/_2004282-sm-t.jpg',
      '/images/medium/_2004340-sm-t.jpg',
      '/images/medium/_2004380-sm-t.jpg',
      '/images/medium/_2004398-sm-t.jpg',
    ],
  },

  // Tour Grid Preview Images (one per section)
  tourPreviews: {
    'entrance-lobby':    '/images/medium/_COL3623ca-p.jpg',
    'bridal-suite':      '/images/medium/_1051082-ea-p.jpg',
    'indoor-ceremony':   '/images/medium/_DSC3690kj-p.jpg',
    'outdoor-ceremony':  '/images/medium/_24M0956-jb-25-P.jpg',
    'indoor-cocktail':   '/images/medium/_50M1199-jj-p.jpg',
    'outdoor-cocktail':  '/images/medium/_0350052-by-p.jpg',
    'main-ballroom':     '/images/medium/_1058432-jj-p.jpg',
    'sweetheart-table':  '/images/medium/_DSC0623mj-p.jpg',
    'guest-seating':     '/images/medium/_GS20092sc-p.jpg',
    'dancefloor':        '/images/medium/_GS28994sc-p.jpg',
    'entertainment':     '/images/medium/_50M8930sa-p.jpg',
    'main-bar':          '/images/medium/_DSC4617cb-p.jpg',
    'balconies':         '/images/medium/_0359684-by-p.jpg',
    'photo-locations':   '/images/medium/_2004078-sm-t.jpg',
  },

  // Additional section images used across other pages
  sections: {
    vendors:   '/images/medium/_0359671-by-p.jpg',
    contact:   '/images/medium/_DSC3984km-p.jpg',
    menu:      '/images/medium/_24M3331-sm-t.jpg',
    rates:     '/images/medium/_2005048-tc-p.jpg',
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
