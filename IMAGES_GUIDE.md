# Photography Implementation Guide
## Riviera Waterfront Mansion

This guide explains how photography is implemented across the site following the magazine/editorial design philosophy where **photography does the heavy lifting**.

---

## Philosophy

This site follows a **photography-first, editorial magazine approach**:

- Photography tells the story and sells the venue
- Asymmetric compositions (not uniform grids)
- Images at different scales throughout the page
- Text overlapping images for editorial feel
- Large, impactful hero images
- Editorial layouts that breathe

---

## Image Organization

### Folder Structure

```
/optimized/
  ├── large/      → Hero images (full-screen backgrounds)
  ├── medium/     → Section images, galleries, featured content
  └── thumb/      → Thumbnails, previews (if needed)
```

**Total images available:** 3,765 optimized JPGs

### Image Configuration

All image mappings are centralized in `/app/lib/imageConfig.ts`

```typescript
import { imageConfig } from '@/app/lib/imageConfig';

// Hero image
<Image src={imageConfig.hero[0]} />

// Homepage sections
<Image src={imageConfig.homepage.whyChooseUs} />

// Tour galleries
import { getTourImages } from '@/app/lib/imageConfig';
const images = getTourImages('bridal-suite');
```

---

## Performance Best Practices

### 1. Next.js Image Component

**Always use Next.js Image component** for automatic optimization:

```tsx
import Image from 'next/image';

<Image 
  src="/optimized/medium/image.jpg"
  alt="Descriptive alt text for accessibility and SEO"
  fill                    // For dynamic sizing
  priority                // For above-the-fold images only
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
  quality={85}            // 85 is good balance
/>
```

### 2. Priority Loading

**Only use `priority` for above-the-fold images:**

```tsx
// ✅ CORRECT - Hero image (visible on load)
<Image src={heroImage} priority />

// ❌ WRONG - Gallery images below fold
<Image src={galleryImage} priority />  // Don't do this!
```

### 3. Responsive Sizes

**Define sizes attribute for optimal loading:**

```tsx
// Full width hero
sizes="100vw"

// Two column layout
sizes="(max-width: 768px) 100vw, 50vw"

// Three column gallery
sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
```

### 4. Quality Settings

```tsx
quality={90}  // Hero images, critical above-fold
quality={85}  // Main content images (good default)
quality={75}  // Background images, less critical
```

---

## Image Dimensions

### Aspect Ratios Used

```tsx
// Hero images - cinematic
className="aspect-[21/9]"

// Featured sections - landscape
className="aspect-[16/10]"

// Gallery images - standard
className="aspect-[4/3]"

// Portrait images - vertical
className="aspect-[4/5]"

// Square - social/thumbnails
className="aspect-square"
```

---

## Editorial Layout Patterns

### 1. Full Bleed Hero

```tsx
<section className="relative h-[75vh] md:h-[85vh] overflow-hidden">
  <Image 
    src={heroImage}
    alt="..."
    fill
    priority
    className="object-cover"
    sizes="100vw"
    quality={90}
  />
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
  {/* Text overlay */}
</section>
```

### 2. Asymmetric Gallery Grid

```tsx
<div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
  {images.map((img, index) => {
    const isLarge = index === 0 || index === 3;
    const isMedium = index === 1 || index === 4;
    
    return (
      <div className={`
        ${isLarge ? 'col-span-2 row-span-2 aspect-[16/10]' : ''}
        ${isMedium ? 'col-span-1 aspect-[4/5]' : ''}
        ${!isLarge && !isMedium ? 'aspect-square' : ''}
      `}>
        <Image src={img} fill className="object-cover" />
      </div>
    );
  })}
</div>
```

### 3. Side-by-Side Editorial

```tsx
<div className="grid md:grid-cols-2 gap-16 items-center">
  <div>
    {/* Text content */}
  </div>
  <div className="relative h-[400px] md:h-[600px] overflow-hidden">
    <Image 
      src={sectionImage}
      alt="..."
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 50vw"
      quality={85}
    />
  </div>
</div>
```

### 4. Text Over Image (Editorial Style)

```tsx
<section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
  <Image src={bgImage} fill className="object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
    <h2 className="text-4xl lg:text-6xl text-white">
      Headline breaks across the image
    </h2>
  </div>
</section>
```

---

## Core Web Vitals Optimization

### LCP (Largest Contentful Paint) < 2.5s

- Hero images use `priority` attribute
- Dimensions defined (prevents layout shift)
- Modern formats (AVIF, WebP) via Next.js config

### CLS (Cumulative Layout Shift) < 0.1

- Always specify width/height or use `fill` with container aspect ratio
- Reserve space for images with aspect ratio classes

```tsx
// ✅ CORRECT - No layout shift
<div className="relative aspect-video">
  <Image src={img} fill className="object-cover" />
</div>

// ❌ WRONG - Causes layout shift
<Image src={img} width={0} height={0} />
```

---

## Adding New Images

### 1. Add to imageConfig.ts

```typescript
export const imageConfig = {
  homepage: {
    newSection: '/optimized/medium/image-name.jpg',
  },
};
```

### 2. Implement in Component

```tsx
import { imageConfig } from '@/app/lib/imageConfig';

<Image 
  src={imageConfig.homepage.newSection}
  alt="Descriptive alt text"
  fill
  sizes="..."
  quality={85}
/>
```

### 3. Alt Text Guidelines

**SEO-optimized, descriptive alt text:**

```tsx
// ✅ GOOD
alt="Elegant waterfront wedding reception at Riviera Waterfront Mansion in Massapequa, Long Island with stunning table settings"

// ❌ BAD
alt="Wedding photo"
```

---

## Tour Section Images

### Tour Grid Previews

Each tour section has a preview image shown in the grid:

```tsx
import { getTourPreview } from '@/app/lib/imageConfig';

<Image src={getTourPreview('bridal-suite')} />
```

### Tour Detail Galleries

Each tour section page shows 6 images in an editorial grid:

```tsx
import { getTourImages } from '@/app/lib/imageConfig';

const images = getTourImages(slug);
```

**Configured sections:**
- entrance-lobby
- bridal-suite
- indoor-ceremony
- outdoor-ceremony
- indoor-cocktail
- outdoor-cocktail
- main-ballroom
- sweetheart-table
- guest-seating
- dancefloor
- entertainment
- main-bar
- balconies
- photo-locations

---

## Checklist: Before Deploying Images

### Performance
- [ ] Hero images have `priority` attribute
- [ ] Gallery images lazy load (no priority)
- [ ] `sizes` attribute defined for responsive images
- [ ] Quality set appropriately (85-90 for important, 75 for backgrounds)
- [ ] Modern formats enabled (AVIF, WebP) in next.config.ts

### Accessibility
- [ ] All images have descriptive alt text
- [ ] Alt text includes location keywords (Long Island, Massapequa)
- [ ] Alt text describes what's in the image for screen readers

### SEO
- [ ] Alt text includes target keywords naturally
- [ ] File names are descriptive (already done in /optimized/)
- [ ] Images compressed and optimized

### Design
- [ ] Follows magazine/editorial layout (asymmetric, varied sizes)
- [ ] Photography does the heavy lifting
- [ ] Images at different scales create visual interest
- [ ] Text overlays are readable with proper gradients

---

## Troubleshooting

### Images not loading?

1. Check file path in imageConfig.ts
2. Verify image exists in /optimized/ folder
3. Check browser console for errors
4. Ensure Next.js Image component is imported

### Layout shifts?

1. Always define aspect ratio on container
2. Use `fill` with relative parent
3. Specify width/height if using fixed dimensions

### Slow loading?

1. Use `priority` only for above-fold images
2. Define proper `sizes` attribute
3. Check image file size (should be optimized)
4. Verify Next.js config has modern formats enabled

---

## Quick Reference

```tsx
// Hero (above fold)
<Image src={img} fill priority sizes="100vw" quality={90} />

// Section image (below fold)
<Image src={img} fill sizes="(max-width: 768px) 100vw, 50vw" quality={85} />

// Gallery image
<Image src={img} fill sizes="(max-width: 640px) 50vw, 33vw" quality={80} />

// Background image
<Image src={img} fill className="object-cover" quality={75} />
```

---

**Remember:** Photography sells the venue. Let the images breathe and do the heavy lifting!
