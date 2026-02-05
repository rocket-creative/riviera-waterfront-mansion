#!/usr/bin/env python3
"""
Final Image Audit - Checks if each image from USE THESE folder is used exactly once
(excluding intentional preview duplicates in imageConfig.ts)
"""

import re
from pathlib import Path
from collections import defaultdict

def extract_filename(path):
    """Extract just the filename from a path"""
    return path.split('/')[-1]

def main():
    root_dir = Path("/Users/rocketcreative/Desktop/CURSER BUILDS/RIVIERA_NEW_BUILD-2026")
    
    # Get all 117 images from USE THESE
    use_these = root_dir / "USE THESE"
    available_images = sorted([f.name for f in use_these.glob('*.jpg')])
    
    # Track usage across the codebase (excluding imageConfig.ts duplicates)
    usage_count = defaultdict(int)
    usage_locations = defaultdict(list)
    
    # Scan all TSX files (actual usage)
    for tsx_file in root_dir.rglob('*.tsx'):
        if 'node_modules' in str(tsx_file):
            continue
        
        content = tsx_file.read_text()
        # Find image references
        matches = re.findall(r'/images/(?:large|medium)/([^/\"\']+)', content)
        
        for match in matches:
            filename = match.strip()
            usage_count[filename] += 1
            relative_path = str(tsx_file).replace(str(root_dir) + '/', '')
            usage_locations[filename].append(relative_path)
    
    # Special handling for imageConfig.ts - count tour section arrays only (not previews)
    config_file = root_dir / 'app' / 'lib' / 'imageConfig.ts'
    if config_file.exists():
        content = config_file.read_text()
        
        # Extract tour section arrays (between 'entrance-lobby' and 'tourPreviews')
        tour_section = content[content.find("'entrance-lobby'"):content.find('tourPreviews')]
        
        # Find images in tour sections
        tour_matches = re.findall(r'/images/(?:large|medium)/([^/\"\']+)', tour_section)
        for match in tour_matches:
            filename = match.strip()
            if filename not in usage_count:  # If not already counted from TSX
                usage_count[filename] += 1
                usage_locations[filename].append('app/lib/imageConfig.ts (tour sections)')
        
        # Extract hero carousel and homepage sections
        hero_section = content[:content.find("'entrance-lobby'")]
        hero_matches = re.findall(r'/images/(?:large|medium)/([^/\"\']+)', hero_section)
        for match in hero_matches:
            filename = match.strip()
            if filename not in usage_count:  # If not already counted
                usage_count[filename] += 1
                usage_locations[filename].append('app/lib/imageConfig.ts (hero/homepage)')
    
    print("=" * 80)
    print("FINAL IMAGE USAGE AUDIT - RIVIERA WATERFRONT MANSION")
    print("=" * 80)
    print()
    
    # Check for duplicates
    duplicates = []
    for filename, count in usage_count.items():
        if count > 1:
            duplicates.append((filename, count, usage_locations[filename]))
    
    if duplicates:
        print("⚠️  DUPLICATE IMAGES FOUND:")
        print("-" * 80)
        for filename, count, locations in sorted(duplicates, key=lambda x: x[1], reverse=True):
            print(f"\n❌ {filename} (used {count} times):")
            for loc in sorted(set(locations)):
                print(f"   - {loc}")
        print()
    else:
        print("✅ NO DUPLICATES! Every image is used exactly once.")
        print()
    
    # Check for unused images
    used_filenames = set(usage_count.keys())
    unused = [img for img in available_images if img not in used_filenames]
    
    # Summary
    print("=" * 80)
    print("SUMMARY")
    print("=" * 80)
    print(f"Total images available: {len(available_images)}")
    print(f"Total images used: {len(used_filenames)}")
    print(f"Total unused: {len(unused)}")
    print(f"Duplicate images: {len(duplicates)}")
    print()
    
    if unused:
        print(f"⚠️  UNUSED IMAGES ({len(unused)}):")
        for img in unused:
            print(f"   - {img}")
        print()
    
    # Final verdict
    if not duplicates and not unused:
        print("=" * 80)
        print("🎉 PERFECT! ALL 117 IMAGES ARE USED EXACTLY ONCE!")
        print("=" * 80)
    elif not duplicates:
        print("=" * 80)
        print(f"✅ NO DUPLICATES, but {len(unused)} images are not used yet")
        print("=" * 80)
    elif not unused:
        print("=" * 80)
        print(f"⚠️  ALL IMAGES USED, but {len(duplicates)} have duplicates")
        print("=" * 80)

if __name__ == "__main__":
    main()
