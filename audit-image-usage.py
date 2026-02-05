#!/usr/bin/env python3
"""
Image Usage Audit Script for Riviera Waterfront Mansion Website
Identifies duplicate image usage across the site
"""

import re
import os
from collections import defaultdict
from pathlib import Path

def find_image_references(root_dir):
    """Find all image references in TSX and TS files"""
    image_usage = defaultdict(list)
    
    # Patterns to match image paths
    patterns = [
        r"['\"]/(images/(?:large|medium)/[^'\"]+)['\"]",
        r"src=['\"]/(images/(?:large|medium)/[^'\"]+)['\"]",
    ]
    
    for file_path in Path(root_dir).rglob('*.tsx'):
        if 'node_modules' in str(file_path):
            continue
            
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                for pattern in patterns:
                    matches = re.findall(pattern, content)
                    for match in matches:
                        # Normalize path
                        img_path = match.strip()
                        relative_file = str(file_path).replace(str(root_dir) + '/', '')
                        image_usage[img_path].append(relative_file)
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
    
    for file_path in Path(root_dir).rglob('*.ts'):
        if 'node_modules' in str(file_path) or '.d.ts' in str(file_path):
            continue
            
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                for pattern in patterns:
                    matches = re.findall(pattern, content)
                    for match in matches:
                        img_path = match.strip()
                        relative_file = str(file_path).replace(str(root_dir) + '/', '')
                        image_usage[img_path].append(relative_file)
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
    
    return image_usage

def check_available_images(base_path):
    """Get list of available images in USE THESE folder"""
    use_these_path = Path(base_path) / "USE THESE"
    available = []
    
    if use_these_path.exists():
        for img in use_these_path.glob('*.jpg'):
            available.append(img.name)
    
    return sorted(available)

def main():
    root_dir = Path("/Users/rocketcreative/Desktop/CURSER BUILDS/RIVIERA_NEW_BUILD-2026")
    
    print("=" * 80)
    print("RIVIERA WATERFRONT MANSION - IMAGE USAGE AUDIT")
    print("=" * 80)
    print()
    
    # Find all image usage
    image_usage = find_image_references(root_dir)
    
    # Separate by size
    large_images = {}
    medium_images = {}
    
    for img_path, files in image_usage.items():
        if '/large/' in img_path:
            large_images[img_path] = files
        elif '/medium/' in img_path:
            medium_images[img_path] = files
    
    # Find duplicates
    print("DUPLICATE IMAGE USAGE (SAME IMAGE USED MULTIPLE TIMES):")
    print("-" * 80)
    
    duplicates_found = False
    all_images_sorted = sorted(image_usage.items(), key=lambda x: len(x[1]), reverse=True)
    
    for img_path, files in all_images_sorted:
        if len(files) > 1:
            duplicates_found = True
            img_name = img_path.split('/')[-1]
            print(f"\n❌ {img_name}")
            print(f"   Used {len(files)} times:")
            for file in sorted(set(files)):
                print(f"     - {file}")
    
    if not duplicates_found:
        print("✅ No duplicates found! Each image is used only once.")
    
    print("\n" + "=" * 80)
    print("SUMMARY")
    print("=" * 80)
    print(f"Total unique images used: {len(image_usage)}")
    print(f"  - Large images: {len(large_images)}")
    print(f"  - Medium images: {len(medium_images)}")
    
    # Count total usages
    total_usages = sum(len(files) for files in image_usage.values())
    print(f"Total image references: {total_usages}")
    
    duplicate_count = sum(1 for files in image_usage.values() if len(files) > 1)
    print(f"Images used more than once: {duplicate_count}")
    
    print("\n" + "=" * 80)
    print("LARGE IMAGES (Hero/Feature)")
    print("=" * 80)
    for img_path in sorted(large_images.keys()):
        img_name = img_path.split('/')[-1]
        usage_count = len(large_images[img_path])
        marker = "✅" if usage_count == 1 else f"❌ ({usage_count}x)"
        print(f"{marker} {img_name}")
    
    print("\n" + "=" * 80)
    print("AVAILABLE IMAGES IN 'USE THESE' FOLDER")
    print("=" * 80)
    available = check_available_images(root_dir)
    print(f"Total images available: {len(available)}")
    
    # Check which are used
    used_filenames = set()
    for img_path in image_usage.keys():
        filename = img_path.split('/')[-1]
        used_filenames.add(filename)
    
    unused = []
    for img in available:
        if img not in used_filenames:
            unused.append(img)
    
    if unused:
        print(f"\nUnused images ({len(unused)}):")
        for img in sorted(unused)[:20]:  # Show first 20
            print(f"  - {img}")
        if len(unused) > 20:
            print(f"  ... and {len(unused) - 20} more")
    else:
        print("\n✅ All images from USE THESE folder are being used!")

if __name__ == "__main__":
    main()
