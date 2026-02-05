#!/bin/bash

# Riviera Waterfront Mansion - Image Setup Script
# Removes old images, optimizes new ones, and generates config

set -e  # Exit on error

echo "🏛️  Riviera Waterfront Mansion - Image Setup"
echo "=============================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_ROOT"

# Step 1: Remove old image directories
echo "🗑️  Step 1: Removing old image directories..."
echo ""

if [ -d "optimized" ]; then
    echo "  Removing: optimized/"
    rm -rf optimized
    echo -e "  ${GREEN}✅ Deleted optimized/${NC}"
else
    echo -e "  ${YELLOW}⚠️  optimized/ not found (already removed)${NC}"
fi

if [ -d "public/optimized" ]; then
    echo "  Removing: public/optimized/"
    rm -rf public/optimized
    echo -e "  ${GREEN}✅ Deleted public/optimized/${NC}"
else
    echo -e "  ${YELLOW}⚠️  public/optimized/ not found (already removed)${NC}"
fi

# Remove any old jpg files in public root
if [ -d "public" ]; then
    JPG_COUNT=$(find public -maxdepth 1 -name "*.jpg" 2>/dev/null | wc -l | tr -d ' ')
    if [ "$JPG_COUNT" -gt 0 ]; then
        echo "  Removing $JPG_COUNT JPG files from public/"
        find public -maxdepth 1 -name "*.jpg" -delete
        echo -e "  ${GREEN}✅ Deleted old JPG files${NC}"
    fi
fi

echo ""

# Step 2: Check for sharp dependency
echo "📦 Step 2: Checking dependencies..."
echo ""

if ! npm list sharp > /dev/null 2>&1; then
    echo -e "  ${YELLOW}⚠️  'sharp' not installed, installing...${NC}"
    npm install --save-dev sharp
    echo -e "  ${GREEN}✅ Installed sharp${NC}"
else
    echo -e "  ${GREEN}✅ sharp is installed${NC}"
fi

echo ""

# Step 3: Verify source images exist
echo "🔍 Step 3: Verifying source images..."
echo ""

if [ ! -d "USE THESE" ]; then
    echo -e "  ${RED}❌ ERROR: 'USE THESE' folder not found!${NC}"
    echo "  Please ensure the 'USE THESE' folder with images is in the project root."
    exit 1
fi

IMAGE_COUNT=$(find "USE THESE" -name "*.jpg" -o -name "*.jpeg" | wc -l | tr -d ' ')

if [ "$IMAGE_COUNT" -eq 0 ]; then
    echo -e "  ${RED}❌ ERROR: No images found in 'USE THESE' folder!${NC}"
    exit 1
fi

echo -e "  ${GREEN}✅ Found $IMAGE_COUNT images in 'USE THESE' folder${NC}"
echo ""

# Step 4: Optimize images
echo "🖼️  Step 4: Optimizing images (this may take a while)..."
echo ""

node scripts/optimize-images.js

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Image optimization failed!${NC}"
    exit 1
fi

echo ""

# Step 5: Generate image configuration
echo "📝 Step 5: Generating image configuration..."
echo ""

node scripts/generate-image-config.js

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Image config generation failed!${NC}"
    exit 1
fi

echo ""

# Step 6: Verify output
echo "✅ Step 6: Verifying output..."
echo ""

# Check if images directory was created
if [ -d "public/images" ]; then
    LARGE_COUNT=$(find public/images/large -name "*.jpg" 2>/dev/null | wc -l | tr -d ' ')
    MEDIUM_COUNT=$(find public/images/medium -name "*.jpg" 2>/dev/null | wc -l | tr -d ' ')
    THUMB_COUNT=$(find public/images/thumb -name "*.jpg" 2>/dev/null | wc -l | tr -d ' ')
    
    echo "  Created image directories:"
    echo "    - public/images/large/  ($LARGE_COUNT images)"
    echo "    - public/images/medium/ ($MEDIUM_COUNT images)"
    echo "    - public/images/thumb/  ($THUMB_COUNT images)"
    echo ""
fi

# Check if config was generated
if [ -f "app/lib/imageConfig.ts" ]; then
    echo -e "  ${GREEN}✅ Updated app/lib/imageConfig.ts${NC}"
else
    echo -e "  ${RED}❌ Image config not found!${NC}"
    exit 1
fi

echo ""
echo "=============================================="
echo -e "${GREEN}🎉 Image setup complete!${NC}"
echo "=============================================="
echo ""
echo "Summary:"
echo "  - Removed old 'optimized' directories"
echo "  - Optimized $IMAGE_COUNT images to 3 sizes"
echo "  - Generated new image configuration"
echo "  - Images are now in: public/images/"
echo ""
echo "Next steps:"
echo "  1. Review app/lib/imageConfig.ts"
echo "  2. Test the website: npm run dev"
echo "  3. Verify images are loading correctly"
echo ""
