# Quick Start: Photography System

## 🚀 Your site is now running with 3,765 optimized wedding photos!

---

## View Your Site

**Development server is running:**
```
http://localhost:3001
```

Visit these pages to see the photography in action:
- **Homepage:** http://localhost:3001
- **Tour Grid:** http://localhost:3001/tour
- **Bridal Suite Gallery:** http://localhost:3001/tour/bridal-suite
- **Outdoor Ceremony:** http://localhost:3001/tour/outdoor-ceremony
- **Grand Ballroom:** http://localhost:3001/tour/main-ballroom

---

## What You'll See

### Homepage
✅ Full-screen hero image with waterfront wedding  
✅ "Why Choose Us" section with venue photography  
✅ New full-bleed editorial showcase section  
✅ All images optimized and responsive  

### Tour Pages
✅ 14 venue sections with preview images  
✅ Click any section to see 6-image gallery  
✅ Asymmetric, magazine-style layouts  
✅ Photography does the heavy lifting  

---

## Photography Features

### Performance
- **AVIF/WebP formats** - Modern, smaller files
- **Lazy loading** - Images load as you scroll
- **Priority loading** - Hero images load first
- **Responsive images** - Right size for each device

### Design
- **Magazine style** - Editorial layouts, not boring grids
- **Asymmetric compositions** - Visual interest
- **Different scales** - Large hero, medium sections, varied galleries
- **Text overlays** - Professional editorial approach

---

## How to Change Images

### 1. Find the image you want
Browse `/optimized/medium/` folder

### 2. Update imageConfig.ts
```typescript
// File: /app/lib/imageConfig.ts

export const imageConfig = {
  homepage: {
    hero: '/optimized/medium/your-image.jpg',  // Change hero
    whyChooseUs: '/optimized/medium/another.jpg',  // Change section
  },
  
  tour: {
    'bridal-suite': [
      '/optimized/medium/suite-1.jpg',  // Replace any of these
      '/optimized/medium/suite-2.jpg',
      // ... add up to 6 images
    ],
  },
};
```

### 3. Save and refresh
Your changes appear instantly in dev mode!

---

## Quick Examples

### Change Hero Image
```typescript
// imageConfig.ts
hero: [
  '/optimized/large/your-new-hero.jpg',  // ← Change this
],
```

### Add Images to Tour Section
```typescript
// imageConfig.ts
tour: {
  'bridal-suite': [
    '/optimized/medium/_1058351-jj-p 6.jpg',
    '/optimized/medium/_1058484-by-r.jpg',
    '/optimized/medium/_1058554-jj-p 4.jpg',
    '/optimized/medium/_1058554-jj-p.jpg',
    '/optimized/medium/_1058675-by-d 7.jpg',
    '/optimized/medium/_1058738-by-r 5.jpg',
    // ← Add your image here
  ],
}
```

---

## File Organization

```
/optimized/
  ├── large/      → 1 hero image
  ├── medium/     → 101 section/gallery images
  └── thumb/      → 3,663 available for future use
```

**Total available:** 3,765 wedding photos  
**Currently using:** 101 images (lots more to add!)

---

## Commands

```bash
# Development (currently running)
npm run dev
# → http://localhost:3001

# Build for production
npm run build

# Start production server
npm start
```

---

## Image Guidelines

### Alt Text (Important for SEO!)
Always include descriptive alt text with keywords:

```tsx
<Image 
  src={image}
  alt="Elegant waterfront wedding reception at Riviera Waterfront Mansion in Massapequa, Long Island"
/>
```

**Include these keywords:**
- Long Island
- Massapequa
- Waterfront wedding venue
- What's in the image (ceremony, reception, ballroom, etc.)

### Quality Settings
```tsx
quality={90}  // Hero images
quality={85}  // Standard (recommended)
quality={75}  // Background images
```

### Sizes Attribute
```tsx
sizes="100vw"                           // Full width
sizes="(max-width: 768px) 100vw, 50vw"  // Half on desktop
sizes="(max-width: 640px) 50vw, 33vw"   // Gallery
```

---

## Common Tasks

### Add New Homepage Section with Photo
1. Add image to `imageConfig.ts`:
```typescript
homepage: {
  myNewSection: '/optimized/medium/image.jpg',
}
```

2. Use in page.tsx:
```tsx
import { imageConfig } from '@/app/lib/imageConfig';

<Image 
  src={imageConfig.homepage.myNewSection}
  alt="Description"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  quality={85}
/>
```

### Create New Tour Section
1. Add to `imageConfig.ts`:
```typescript
tour: {
  'my-new-section': [
    '/optimized/medium/1.jpg',
    '/optimized/medium/2.jpg',
    '/optimized/medium/3.jpg',
    '/optimized/medium/4.jpg',
    '/optimized/medium/5.jpg',
    '/optimized/medium/6.jpg',
  ],
},
tourPreviews: {
  'my-new-section': '/optimized/medium/preview.jpg',
}
```

2. Add to tour page array in `/app/tour/page.tsx`:
```typescript
const tourSections = [
  // ... existing sections
  { 
    title: 'My New Section', 
    slug: 'my-new-section', 
    description: 'Description text' 
  },
];
```

Done! It will automatically appear in the tour grid and detail page.

---

## Documentation

**Full Guides:**
- 📘 **IMAGES_GUIDE.md** - Complete technical reference
- 📗 **PHOTOGRAPHY_IMPLEMENTATION_SUMMARY.md** - What was built
- 📙 **QUICK_START_PHOTOGRAPHY.md** - This file (quick reference)

---

## Troubleshooting

### Images not loading?
1. Check file path in `imageConfig.ts`
2. Make sure image exists in `/optimized/` folder
3. Check browser console for errors

### Layout shifting?
Always wrap Image in container with aspect ratio:
```tsx
<div className="relative aspect-video">
  <Image src={img} fill className="object-cover" />
</div>
```

### Slow loading?
1. Don't use `priority` on every image (only hero)
2. Make sure `sizes` attribute is set correctly
3. Use appropriate quality (85 is good default)

---

## Tips

✅ **Let photography breathe** - Don't cram images together  
✅ **Use varying sizes** - Create visual hierarchy  
✅ **Write good alt text** - Helps SEO and accessibility  
✅ **Test on mobile** - Most users visit on phones  
✅ **Keep quality high** - These photos sell the venue  

---

## What's Next?

### Easy Wins
- [ ] Replace more hero images (you have thousands!)
- [ ] Add menu page photography
- [ ] Add vendor page with vendor photos
- [ ] Create "Real Weddings" gallery section

### Advanced
- [ ] Add lightbox for full-screen image viewing
- [ ] Create image slider for hero section
- [ ] Add photo comparison (before/after venue setups)
- [ ] Implement client wedding galleries

---

**🎉 Your photography system is fully operational and ready to wow clients!**

The venue photographs speak for themselves. Let them do the selling!
