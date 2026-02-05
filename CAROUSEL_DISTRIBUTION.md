# Hero Carousel Image Distribution

## Strategy

The hero carousel uses **6 diverse images** selected from throughout the 117-image collection to ensure visual variety.

### Selection Algorithm

Images are picked at strategic intervals:

| Position | Selection Point | Image |
|----------|----------------|-------|
| 1 | Start (0%) | `_0350052-by-p.jpg` |
| 2 | 20% through | `_2004282-sm-t.jpg` |
| 3 | 40% through | `_24M0956-jb-25-P.jpg` |
| 4 | 60% through | `_COL3623ca-p.jpg` |
| 5 | 80% through | `_DSC5029aa-port-2.jpg` |
| 6 | End (100%) | `_GS29387sc-p.jpg` |

### Why This Works

**Avoids Sequences:**
- Sequential images often show the same wedding/couple
- Sequential images may have similar composition or lighting
- Sequential naming suggests they were shot together

**Ensures Variety:**
- Picks from beginning, middle, and end of collection
- Different photographers (by, sm, jb-25, ca, aa, sc suffixes)
- Different time periods/weddings
- Different couples and compositions

### Technical Implementation

Located in `scripts/generate-image-config.js`:

```javascript
const heroIndices = [
  0,                                    // First image
  Math.floor(totalImages * 0.2),       // 20% through
  Math.floor(totalImages * 0.4),       // 40% through
  Math.floor(totalImages * 0.6),       // 60% through
  Math.floor(totalImages * 0.8),       // 80% through
  totalImages - 1,                      // Last image
];

const allocation = {
  heroCarousel: heroIndices.map(i => images[i]),
  // ...
};
```

### Regenerating

If you add/remove images from "USE THESE" folder:

```bash
bash scripts/setup-images.sh
```

The carousel selection will automatically recalculate based on the new collection size.

### Manual Override

To manually select specific images, edit `app/lib/imageConfig.ts`:

```typescript
heroCarousel: [
  '/images/large/your-image-1.jpg',
  '/images/large/your-image-2.jpg',
  '/images/large/your-image-3.jpg',
  '/images/large/your-image-4.jpg',
  '/images/large/your-image-5.jpg',
  '/images/large/your-image-6.jpg',
],
```

**Note:** Manual edits will be overwritten when regenerating the config.

---

## Current Selection

**Image 1:** `_0350052-by-p.jpg`
- Photographer: by
- Position: First in collection

**Image 2:** `_2004282-sm-t.jpg`
- Photographer: sm
- Position: ~23rd image (20%)

**Image 3:** `_24M0956-jb-25-P.jpg`
- Photographer: jb-25
- Position: ~47th image (40%)

**Image 4:** `_COL3623ca-p.jpg`
- Photographer: ca
- Position: ~70th image (60%)

**Image 5:** `_DSC5029aa-port-2.jpg`
- Photographer: aa
- Position: ~94th image (80%)

**Image 6:** `_GS29387sc-p.jpg`
- Photographer: sc
- Position: Last in collection (117th)

---

## Benefits

✅ **Visual Variety** - Different weddings, couples, and compositions  
✅ **Photographer Diversity** - Multiple photographers represented  
✅ **Automatic** - No manual selection needed  
✅ **Scalable** - Works with any collection size  
✅ **Consistent** - Same distribution logic for all regenerations  

---

**Last Updated:** February 4, 2026  
**Total Images:** 117  
**Carousel Images:** 6 (diverse selection)
