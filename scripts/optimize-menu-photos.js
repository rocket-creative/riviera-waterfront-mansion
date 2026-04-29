#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC_DIR = '/Users/rocketcreative/.cursor/projects/Users-rocketcreative-Desktop-CURSER-BUILDS-RIVIERA-NEW-BUILD-2026/assets';
const ROOT = path.resolve(__dirname, '..');
const COCKTAIL_DIR = path.join(ROOT, 'public/images/cocktail-hour');
const ENHANCE_DIR = path.join(ROOT, 'public/images/enhancements');

const MAPPINGS = [
  ['Roast_Turkey-',                COCKTAIL_DIR, 'roasted-whole-turkey.jpg'],
  ['Baked_Clams-',                 COCKTAIL_DIR, 'baked-clams.jpg'],
  ['Chicken_Marsala-',             COCKTAIL_DIR, 'chicken-marsala.jpg'],
  ['Penne_Ala_Vodka-',             COCKTAIL_DIR, 'penne-ala-vodka.jpg'],
  ['Veg_Stir_Fry-',                COCKTAIL_DIR, 'vegetable-stir-fry.jpg'],
  ['Arroz_Con_Pollo-',             COCKTAIL_DIR, 'arroz-con-pollo.jpg'],
  ['Pastrami-',                    COCKTAIL_DIR, 'pastrami.jpg'],
  ['Italian_Meatballs-',           COCKTAIL_DIR, 'italian-meatballs.jpg'],
  ['Fruit_Display-',               COCKTAIL_DIR, 'seasonal-fruit-display.jpg'],
  ['Fett_Alfredo-',                COCKTAIL_DIR, 'fettuccine-alfredo.jpg'],
  ['Seafood_Newburgh-',            COCKTAIL_DIR, 'seafood-newburg.jpg'],
  ['Beef_Stroganoff-',             COCKTAIL_DIR, 'beef-stroganoff.jpg'],
  ['Pasta_Primavera-',             COCKTAIL_DIR, 'pasta-primavera.jpg'],
  ['Hot_Pretzel_Station-',         ENHANCE_DIR,  'hot-pretzel-station.jpg'],
  ['Bacon__Egg___Cheese_Station-', ENHANCE_DIR,  'morning-glory-station.jpg'],
  ['Tacos-',                       ENHANCE_DIR,  'taco-bar-station.jpg'],
  ['Clam___Oyster_Bar_Setup-',     ENHANCE_DIR,  'fresh-clam-oyster-bar.jpg'],
  ['Apple_Cider_Donuts-',          ENHANCE_DIR,  'apple-cider-donut-station.jpg'],
  ['Fresh_Clam___Oysters-',        ENHANCE_DIR,  'fresh-clam-oyster-display.jpg'],
  ['King_Crab_Legs_1_-',           ENHANCE_DIR,  'alaskan-crab-legs-2.jpg'],
  ['Gatorade_Display-',            ENHANCE_DIR,  'chips-gatorade-display.jpg'],
  ['White_Castle-',                ENHANCE_DIR,  'white-castle-slider-station.jpg'],
  ['Ice_Cream_Sundae_Bar-',        ENHANCE_DIR,  'ice-cream-sundae-bar.jpg'],
  ['King_Crabs___Lobster-',        ENHANCE_DIR,  'whole-lobster-station-2.jpg'],
  ['King_Crab_Legs-',              ENHANCE_DIR,  'alaskan-crab-legs.jpg'],
  ['Viennese_Hour-',               ENHANCE_DIR,  'full-viennese.jpg'],
  ['King_Crab___Lobster-',         ENHANCE_DIR,  'whole-lobster-station.jpg'],
  ['Fresh_Clam___Oyster-',         ENHANCE_DIR,  'fresh-clam-oyster-close.jpg'],
];

function findSource(prefix) {
  const all = fs.readdirSync(SRC_DIR);
  // Exact prefix-then-uuid match. The directory contains files like
  // "King_Crab_Legs-<uuid>.png" and "King_Crab_Legs_1_-<uuid>.png"; we want
  // to ensure we don't pick up the wrong one for ambiguous prefixes.
  const re = new RegExp('^' + prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[0-9a-f]{8}-[0-9a-f-]+\\.png$', 'i');
  const matches = all.filter(f => re.test(f));
  if (matches.length === 0) throw new Error(`No source for prefix: ${prefix}`);
  if (matches.length > 1) throw new Error(`Ambiguous source for prefix: ${prefix} (${matches.length}: ${matches.join(', ')})`);
  return path.join(SRC_DIR, matches[0]);
}

async function processOne(prefix, targetDir, targetName) {
  const src = findSource(prefix);
  const dest = path.join(targetDir, targetName);
  await sharp(src)
    .rotate()
    .resize(1200, 1200, { fit: 'cover', position: 'center' })
    .jpeg({
      quality: 82,
      mozjpeg: true,
      progressive: true,
      chromaSubsampling: '4:2:0',
    })
    .toFile(dest);
  const { size } = fs.statSync(dest);
  return { dest, size };
}

(async () => {
  let total = 0;
  let ok = 0;
  for (const [prefix, dir, name] of MAPPINGS) {
    try {
      const { dest, size } = await processOne(prefix, dir, name);
      total += size;
      ok += 1;
      console.log(`OK  ${(size / 1024).toFixed(0).padStart(4)} KB  ${path.relative(ROOT, dest)}`);
    } catch (err) {
      console.error(`ERR ${prefix} -> ${name}: ${err.message}`);
      process.exitCode = 1;
    }
  }
  console.log(`\n${ok}/${MAPPINGS.length} files written, total ${(total / 1024).toFixed(0)} KB`);
})();
