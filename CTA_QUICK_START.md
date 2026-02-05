# CTA Implementation Quick Start

**5 minute guide to understanding the new conversion funnel system**

---

## What Changed?

Every page now has **strategic CTAs** (Call To Actions) that guide users toward booking their wedding.

### Before
Generic "Contact Us" buttons scattered randomly.

### After
Contextual CTAs at strategic points:
- **Hero:** Immediate conversion opportunity
- **Mid page:** After key content sections
- **Final:** Strong conversion push before footer

---

## Two New Components

### 1. CTASection
Full width section with headline and buttons.

**Use for:** Page endings, major transitions

```tsx
<CTASection
  headline="Book your wedding today"
  background="dark"
  buttons={[
    { text: 'SCHEDULE VISIT →', href: '/contact', intent: 'schedule' }
  ]}
/>
```

### 2. InlineCTA
Image + content side by side.

**Use for:** Mid page conversion points

```tsx
<InlineCTA
  headline="See our venue in person"
  buttonText="BOOK TOUR →"
  buttonHref="/contact"
  imageSrc="/path/to/image.jpg"
  imageAlt="Venue photo"
/>
```

---

## Page by Page Summary

### Homepage
- Hero form (immediate conversion)
- Mid page CTA (after social proof)
- Final CTA (last chance)

### Contact
- Hero CTAs
- Inquiry form (main conversion)
- Final CTA (keep exploring)

### Menu
- Urgency bar (FOMO)
- Mid page tasting CTA
- Final booking CTA

### Tour
- Mid page in person tour CTA
- Final booking CTA

### Tour Details
- Final booking CTA

### Vendors
- Mid page recommendations CTA
- Final multi path CTA

---

## Key Principles

### 1. Contextual
CTAs match what the user just viewed:
- Saw menu → Request tasting
- Saw tour → Book in person tour

### 2. Progressive
CTAs appear at natural break points:
- After hero
- After key content
- Before footer

### 3. Multiple Paths
Every CTA offers options:
- Primary: Schedule/Contact
- Secondary: Call
- Tertiary: Explore more

### 4. Benefit Focused
Headlines emphasize outcomes:
- ✅ "Your dream wedding starts here"
- ❌ "Contact us for more information"

---

## Button Intents

Each button has an "intent" that controls styling:

- `schedule` → Gold button (primary conversion)
- `call` → Bordered button (phone)
- `tour` → Bordered button (explore)
- `menu` → Bordered button (explore)
- `vendors` → Bordered button (explore)
- `download` → Dark button (PDF)

Auto adjusts for light/dark backgrounds.

---

## Quick Examples

### Simple CTA (1 button)
```tsx
<CTASection
  headline="Book your wedding"
  buttons={[
    { text: 'CONTACT US →', href: '/contact', intent: 'schedule' }
  ]}
/>
```

### Standard CTA (2 buttons)
```tsx
<CTASection
  headline="Schedule your visit"
  background="dark"
  buttons={[
    { text: 'BOOK TOUR →', href: '/contact', intent: 'schedule' },
    { text: 'CALL NOW', href: 'tel:+15165415020', intent: 'call', external: true }
  ]}
/>
```

### Inline CTA (Image + Content)
```tsx
<InlineCTA
  eyebrow="SEE IT IN PERSON"
  headline="Experience our venue"
  description="Book a private tour today."
  buttonText="SCHEDULE →"
  buttonHref="/contact"
  imageSrc="/images/venue.jpg"
  imageAlt="Venue interior"
/>
```

---

## Background Options

- `white` → White background, dark text
- `neutral` → Stone background, dark text
- `dark` → Dark background, white text
- `gold` → Gold background, white text

Alternate backgrounds for visual rhythm.

---

## Mobile Behavior

Both components are fully responsive:
- **Mobile:** Buttons stack vertically, images on top
- **Desktop:** Buttons side by side, 50/50 image layouts

No configuration needed.

---

## Files to Know

**Components:**
- `app/components/CTASection.tsx`
- `app/components/InlineCTA.tsx`

**Documentation:**
- `CTA_FUNNEL_STRATEGY.md` (Strategy & reasoning)
- `CTA_COMPONENTS_USAGE.md` (Detailed usage)
- `CTA_IMPLEMENTATION_SUMMARY.md` (What changed)
- `CONVERSION_FUNNEL_FLOW.md` (Visual diagrams)
- `CTA_QUICK_START.md` (This file)

---

## Common Tasks

### Add CTA to New Page
1. Import component
2. Choose type (CTASection or InlineCTA)
3. Set intent (schedule, call, etc)
4. Set background (white, dark, etc)
5. Write benefit focused headline

### Update Existing CTA
1. Find component in page file
2. Edit headline, description, or button text
3. Test on mobile

### Change Button Action
1. Update `href` (destination)
2. Update `intent` (styling)
3. Set `external: true` for phone/email

---

## Testing Checklist

After adding/modifying CTAs:
- [ ] Desktop layout looks good
- [ ] Mobile layout responsive
- [ ] Buttons clickable
- [ ] Links go to correct pages
- [ ] Phone numbers dial correctly
- [ ] Focus states visible (tab key)
- [ ] Text readable on background

---

## Conversion Tracking

To track CTA performance, add analytics events:

```javascript
// Example: Track schedule visit clicks
onClick={() => {
  gtag('event', 'cta_click', {
    'event_label': 'schedule_visit',
    'page': window.location.pathname
  });
}}
```

---

## Next Steps

1. **Review strategy:** Read CTA_FUNNEL_STRATEGY.md
2. **Explore components:** Check component files
3. **Monitor performance:** Track click rates
4. **Iterate:** A/B test headlines and placement

---

## Support

Questions? Check the documentation:
- Strategy → `CTA_FUNNEL_STRATEGY.md`
- Usage → `CTA_COMPONENTS_USAGE.md`
- Implementation → `CTA_IMPLEMENTATION_SUMMARY.md`

---

**Done!** ✅

You now have a comprehensive conversion funnel system with contextual CTAs on every page.
