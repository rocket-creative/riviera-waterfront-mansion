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

  // Per-page hero images — slideshow capable, edit via /admin/image-manager
  pageHeroes: {
    contact: ['/images/large/_0359652-by-p.jpg'],
    tour:    ['/images/large/_DSC8864sa-p.jpg'],
    vendors: ['/images/large/_0359671-by-p.jpg'],
    rates:   ['/images/medium/_1058432-jj-p.jpg'],
  },

  // Homepage section images — slideshow capable
  homepage: {
    whyChooseUs: ['/images/large/_0350091-by-p.jpg'],
    venue:       ['/images/medium/_50M1309-jj-p.jpg'],
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

  // Tour grid preview images — slideshow capable, edit via /admin/image-manager
  tourPreviews: {
    'entrance-lobby':    ['/images/medium/_COL3623ca-p.jpg'],
    'bridal-suite':      ['/images/medium/_1051082-ea-p.jpg'],
    'indoor-ceremony':   ['/images/medium/_DSC3690kj-p.jpg'],
    'outdoor-ceremony':  ['/images/medium/_24M0956-jb-25-P.jpg'],
    'indoor-cocktail':   ['/images/medium/_50M1199-jj-p.jpg'],
    'outdoor-cocktail':  ['/images/medium/_0350052-by-p.jpg'],
    'main-ballroom':     ['/images/medium/_1058432-jj-p.jpg'],
    'sweetheart-table':  ['/images/medium/_DSC0623mj-p.jpg'],
    'guest-seating':     ['/images/medium/_GS20092sc-p.jpg'],
    'dancefloor':        ['/images/medium/_GS28994sc-p.jpg'],
    'entertainment':     ['/images/medium/_50M8930sa-p.jpg'],
    'main-bar':          ['/images/medium/_DSC4617cb-p.jpg'],
    'balconies':         ['/images/medium/_0359684-by-p.jpg'],
    'photo-locations':   ['/images/medium/_2004078-sm-t.jpg'],
  },

  // Section CTA images — slideshow capable, edit via /admin/image-manager
  sections: {
    vendors: ['/images/medium/_0359671-by-p.jpg'],
    contact: ['/images/medium/_DSC3984km-p.jpg'],
    menu:    ['/images/medium/_24M3331-sm-t.jpg'],
    rates:   ['/images/medium/_2005048-tc-p.jpg'],
  },

  // Menu Section Hero Carousels — edit via /admin/image-manager
  menuSectionHeroes: {
    'page-hero': [
      '/images/large/_0359671-by-p.jpg',
      '/images/large/_1058724-jj-p.jpg',
      '/images/large/_1059409-jj-p.jpg',
      '/images/large/_0359652-by-p.jpg',
    ],
    'cocktail-hour': [
      '/images/cocktail-hour/hero-cold-displays.jpg',
      '/images/cocktail-hour/hero-carving-station.jpg',
      '/images/medium/_50M1199-jj-p.jpg',
      '/images/medium/_50M1231-jj-p.jpg',
    ],
    'hot-gourmet': [
      '/images/cocktail-hour/hero-hot-gourmet.jpg',
      '/images/cocktail-hour/hero-carving-station.jpg',
      '/images/cocktail-hour/hero-cold-displays.jpg',
    ],
    'enhancements': [
      '/images/enhancements/bacon-station-hero.jpg',
      '/images/enhancements/sushi-bar-waterfront.jpg',
      '/images/enhancements/smores-station.jpg',
      '/images/enhancements/donut-wall-hero.jpg',
    ],
    'ballroom': [
      '/images/medium/_1058432-jj-p.jpg',
      '/images/medium/_1058724-jj-p.jpg',
      '/images/medium/_50M2983jj-p4.jpg',
      '/images/medium/_50M2666sc-p.jpg',
    ],
    'exit-stations': [
      '/images/enhancements/burger-station.jpg',
      '/images/enhancements/donut-wall-close.jpg',
      '/images/enhancements/french-fry-station.jpg',
      '/images/enhancements/espresso-cordial-station.jpg',
    ],
  },

  // Menu item image slideshows — each slot holds an array; edit via /admin/image-manager
  menuImages: {
    // Cocktail Hour — Cold displays
    'cocktail-cold-meats-board':      ['/images/cocktail-hour/cold-meats-board.jpg'],
    'cocktail-cheeseboard':           ['/images/cocktail-hour/cheeseboard.jpg'],
    'cocktail-mediterranean-board':   ['/images/cocktail-hour/mediterranean-board.jpg'],
    'cocktail-antipasto-salad':       ['/images/cocktail-hour/antipasto-salad.jpg'],
    'cocktail-vegetable-crudite':     ['/images/cocktail-hour/vegetable-crudite.jpg'],
    // Cocktail Hour — Passed hors d'oeuvres
    'cocktail-spanakopita':           ['/images/cocktail-hour/spanakopita.jpg'],
    'cocktail-kobe-slider':           ['/images/cocktail-hour/kobe-slider.jpg'],
    'cocktail-spring-rolls':          ['/images/cocktail-hour/spring-rolls.jpg'],
    'cocktail-miniature-empanadas':   ['/images/cocktail-hour/miniature-empanadas.jpg'],
    'cocktail-zucchini-sticks':       ['/images/cocktail-hour/zucchini-sticks.jpg'],
    'cocktail-bourbon-chicken-bites': ['/images/cocktail-hour/bourbon-chicken-bites.jpg'],
    'cocktail-fried-coconut-shrimp':  ['/images/cocktail-hour/fried-coconut-shrimp.jpg'],
    // Cocktail Hour — Cold salads
    'cocktail-seafood-salad':         ['/images/cocktail-hour/seafood-salad.jpg'],
    'cocktail-greek-couscous-salad':  ['/images/cocktail-hour/greek-couscous-salad.jpg'],
    // Cocktail Hour — Carving station
    'cocktail-london-broil':          ['/images/cocktail-hour/london-broil.jpg'],
    'cocktail-roast-pork-tenderloin': ['/images/cocktail-hour/roast-pork-tenderloin.jpg'],
    'cocktail-corned-beef':           ['/images/cocktail-hour/corned-beef.jpg'],
    'cocktail-glazed-virginia-ham':   ['/images/cocktail-hour/glazed-virginia-ham.jpg'],
    // Cocktail Hour — Poultry
    'cocktail-chicken-pina-colada':   ['/images/cocktail-hour/chicken-pina-colada.jpg'],
    'cocktail-chicken-scarpariello':  ['/images/cocktail-hour/chicken-scarpariello.jpg'],
    'cocktail-chicken-francese':      ['/images/cocktail-hour/chicken-francese.jpg'],
    'cocktail-arroz-con-pollo':       ['/images/cocktail-hour/arroz-con-pollo.jpg'],
    'cocktail-sesame-chicken':        ['/images/cocktail-hour/sesame-chicken.jpg'],
    // Cocktail Hour — Pasta
    'cocktail-rigatoni-prosciutto':   ['/images/cocktail-hour/rigatoni-prosciutto.jpg'],
    'cocktail-tortellini-carbonara':  ['/images/cocktail-hour/tortellini-carbonara.jpg'],
    'cocktail-riviera-pasta':         ['/images/cocktail-hour/riviera-pasta.jpg'],
    // Cocktail Hour — Vegan
    'cocktail-eggplant-rollatini':    ['/images/cocktail-hour/eggplant-rollatini.jpg'],
    // Cocktail Hour — Seafood
    'cocktail-fried-calamari':        ['/images/cocktail-hour/fried-calamari.jpg'],
    'cocktail-seafood-paella':        ['/images/cocktail-hour/seafood-paella.jpg'],
    'cocktail-seafood-newburg':       ['/images/cocktail-hour/seafood-newburg.jpg'],
    'cocktail-seafood-fra-diablo':    ['/images/cocktail-hour/seafood-fra-diablo.jpg'],
    'cocktail-shrimp-scampi':         ['/images/cocktail-hour/shrimp-scampi.jpg'],
    // Cocktail Hour — Beef
    'cocktail-swedish-meatballs':     ['/images/cocktail-hour/swedish-meatballs.jpg'],
    'cocktail-beef-teriyaki':         ['/images/cocktail-hour/beef-teriyaki.jpg'],
    'cocktail-sausage-and-peppers':   ['/images/cocktail-hour/sausage-and-peppers.jpg'],
    'cocktail-kielbasa-sauerkraut':   ['/images/cocktail-hour/kielbasa-sauerkraut.jpg'],
    // Enhancements
    'enhance-jumbo-shrimp-cocktail':    ['/images/enhancements/jumbo-shrimp-cocktail.jpg'],
    'enhance-sushi-bar-waterfront':     ['/images/enhancements/sushi-bar-waterfront.jpg'],
    'enhance-bacon-station-hero':       ['/images/enhancements/bacon-station-hero.jpg'],
    'enhance-french-fry-station':       ['/images/enhancements/french-fry-station.jpg'],
    'enhance-donut-wall-hero':          ['/images/enhancements/donut-wall-hero.jpg'],
    'enhance-smores-station':           ['/images/enhancements/smores-station.jpg'],
    'enhance-espresso-cordial-station': ['/images/enhancements/espresso-cordial-station.jpg'],
    'enhance-gelato-espresso-hero':     ['/images/enhancements/gelato-espresso-hero.jpg'],
    'enhance-burger-station':           ['/images/enhancements/burger-station.jpg'],
    'enhance-donut-wall-close':         ['/images/enhancements/donut-wall-close.jpg'],
    // Dinner Plates — Starters
    'dinner-tomato-mozzarella':         ['/images/dinner-plates/_GS20462-riv-dinner-plate-2.jpg'],
    'dinner-bruschetta':                ['/images/dinner-plates/_GS20483-riv-dinner-plate-2.jpg'],
    'dinner-warm-mozzarella-salad':     ['/images/dinner-plates/_GS20467-riv-dinner-plate-2.jpg'],
    // Dinner Plates — Beef
    'dinner-prime-rib':                 ['/images/dinner-plates/_GS20389-riv-dp-ES.jpg'],
    'dinner-filet-mignon':              ['/images/dinner-plates/_GS20375-riv-dp-ES.jpg'],
    'dinner-ny-shell-steak':            ['/images/dinner-plates/_GS20371-riv-dp-ES.jpg'],
    'dinner-chateaubriand':             ['/images/dinner-plates/_GS20380-riv-dp-ES.jpg'],
    'dinner-surf-and-turf':             ['/images/dinner-plates/surf-and-turf.jpg'],
    // Dinner Plates — Poultry
    'dinner-chicken-princess':          ['/images/dinner-plates/_GS20406-riv-dp-ES.jpg'],
    'dinner-roast-duck':                ['/images/dinner-plates/_GS20450-riv-dp-ES.jpg'],
    'dinner-chicken-romano':            ['/images/dinner-plates/_GS20392-riv-dp-ES.jpg'],
    'dinner-chicken-piccata':           ['/images/dinner-plates/_GS20396-riv-dp-ES.jpg'],
    'dinner-chicken-cordon-bleu':       ['/images/dinner-plates/chicken-cordon-bleu.jpg'],
    // Dinner Plates — Seafood
    'dinner-salmon':                    ['/images/dinner-plates/_GS20430-riv-dp-ES.jpg'],
    'dinner-striped-bass':              ['/images/dinner-plates/_GS20435-riv-dp-ES.jpg'],
    'dinner-stuffed-flounder':          ['/images/dinner-plates/_GS20440-riv-dp-ES.jpg'],
    'dinner-grilled-swordfish':         ['/images/dinner-plates/_GS20420-riv-dp-ES.jpg'],
    'dinner-stuffed-shrimp':            ['/images/dinner-plates/_GS20445-riv-dp-ES.jpg'],
    // Dinner Plates — Vegan / Vegetarian
    'dinner-portabella-mushroom-tower': ['/images/dinner-plates/_GS20477-riv-dinner-plate-2-b22e38a4.jpg'],
    'dinner-wild-mushroom-risotto':     ['/images/dinner-plates/_GS20472-riv-dinner-plate-2.jpg'],
    'dinner-stuffed-eggplant':          ['/images/dinner-plates/_GS20492-riv-dinner-plate-2.jpg'],
    // Dinner Plates — Pork / Veal
    'dinner-pork-chop':                 ['/images/dinner-plates/_GS20411-riv-dp-ES.jpg'],
    'dinner-veal-marsala':              ['/images/dinner-plates/_GS20416-riv-dp-ES.jpg'],
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
