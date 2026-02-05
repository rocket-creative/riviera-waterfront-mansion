#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

// Map old optimized paths to new ones based on availability
const PATH_MAPPINGS = {
  // Homepage feature cards - using tour section images
  '/optimized/medium/_24m1474-jb-25-r 2.jpg': '/images/medium/_2004398-sm-t.jpg', // outdoor ceremony
  '/optimized/medium/_1058770-jj-d.jpg': '/images/medium/_2001396-jb-25-P.jpg', // indoor ceremony
  '/optimized/medium/l1020458-by-2nd.jpg': '/images/medium/_2006757-jd-p.jpg', // cocktail
  '/optimized/medium/_1058351-jj-p 6.jpg': '/images/medium/_1051114-ea-p.jpg', // ballroom
  '/optimized/medium/_1058554-jj-p 4.jpg': '/images/medium/_1058724-jj-p.jpg', // bridal suite
  '/optimized/medium/_1058806-jj-p 4.jpg': '/images/medium/_2004398-sm-t.jpg', // balcony
  '/optimized/medium/_col5824-sm-2nd 4.jpg': '/images/medium/_0359744-by-p.jpg', // bar
  '/optimized/medium/_0350894-by-r 5.jpg': '/images/medium/_50M1180-jj-p.jpg', // entertainment
  '/optimized/medium/_50m1191-jj-p 4.jpg': '/images/medium/_50M1199-jj-p.jpg', // amenities
  '/optimized/medium/_24m6248-jd-p 6.jpg': '/images/medium/_2005119-tc-p.jpg', // climate
  '/optimized/medium/_0350379-by-c2 3.jpg': '/images/medium/_0359695-by-p.jpg', // coat check
  '/optimized/medium/_24m3717-sm-r 2.jpg': '/images/medium/_2004477-sm-t.jpg', // grounds
};

async function updateFile(filePath) {
  let content = await fs.readFile(filePath, 'utf8');
  let modified = false;

  for (const [oldPath, newPath] of Object.entries(PATH_MAPPINGS)) {
    if (content.includes(oldPath)) {
      content = content.replace(new RegExp(oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newPath);
      modified = true;
      console.log(`  Updated: ${oldPath} → ${newPath}`);
    }
  }

  if (modified) {
    await fs.writeFile(filePath, content, 'utf8');
    return true;
  }

  return false;
}

async function main() {
  console.log('🔄 Updating Image Paths');
  console.log('=======================\n');

  const filePath = path.join(__dirname, '../app/page.tsx');
  
  console.log(`Processing: ${path.basename(filePath)}`);
  
  const updated = await updateFile(filePath);

  if (updated) {
    console.log(`\n✅ Updated ${path.basename(filePath)}`);
  } else {
    console.log(`\n⚠️  No changes needed in ${path.basename(filePath)}`);
  }

  console.log('\n=======================');
  console.log('✅ Path update complete!');
  console.log('=======================\n');
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
