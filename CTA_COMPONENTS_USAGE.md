# CTA Components Usage Guide

Quick reference for implementing CTAs throughout the Riviera Waterfront Mansion website.

---

## CTASection Component

Full width CTA section with headline, description, and multiple buttons.

### Import
```tsx
import CTASection from './components/CTASection';
```

### Basic Usage
```tsx
<CTASection
  eyebrow="READY TO START?"
  headline="Book your wedding today"
  description="Limited dates available for 2026 and 2027."
  background="dark"
  buttons={[
    {
      text: 'SCHEDULE A VISIT →',
      href: '/contact',
      intent: 'schedule',
    },
    {
      text: 'CALL (516) 541 5020',
      href: 'tel:+15165415020',
      intent: 'call',
      external: true,
    },
  ]}
/>
```

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `eyebrow` | string | No | - | Small gold text above headline |
| `headline` | string | Yes | - | Main CTA headline |
| `description` | string | No | - | Supporting text below headline |
| `buttons` | CTAButton[] | Yes | - | Array of button objects |
| `background` | 'white' \| 'neutral' \| 'dark' \| 'gold' | No | 'white' | Section background color |
| `className` | string | No | '' | Additional CSS classes |

### Button Object

```tsx
{
  text: string;           // Button text
  href: string;           // Link destination
  intent: CTAIntent;      // Button styling intent
  variant?: CTAVariant;   // Optional variant (future use)
  external?: boolean;     // true for external links (phone, email)
  download?: boolean;     // true for download links
}
```

### Intent Types

- `schedule` - Primary gold button (main conversion)
- `call` - Bordered button (phone calls)
- `download` - Dark button (downloads)
- `tour` - Bordered button (explore tour)
- `menu` - Bordered button on dark (explore menu)
- `vendors` - Bordered button on dark (explore vendors)
- `inquiry` - Gold button (form submission)

### Background Variants

- `white` - White background, dark text
- `neutral` - Light stone background, dark text
- `dark` - Dark background (riviera-text), white text
- `gold` - Gold background, white text

---

## InlineCTA Component

2 column layout with image and content side by side.

### Import
```tsx
import InlineCTA from './components/InlineCTA';
```

### Basic Usage
```tsx
<InlineCTA
  eyebrow="SCHEDULE YOUR VISIT"
  headline="Experience our venue in person"
  description="See our stunning waterfront spaces and meet our team."
  buttonText="BOOK YOUR TOUR →"
  buttonHref="/contact"
  imageSrc="/optimized/medium/example.jpg"
  imageAlt="Riviera Waterfront Mansion venue"
  imagePosition="left"
  background="neutral"
/>
```

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `eyebrow` | string | Yes | - | Gold text above headline |
| `headline` | string | Yes | - | Main headline |
| `description` | string | Yes | - | Supporting description |
| `buttonText` | string | Yes | - | CTA button text |
| `buttonHref` | string | Yes | - | Button destination URL |
| `imageSrc` | string | Yes | - | Image path |
| `imageAlt` | string | Yes | - | Image alt text (SEO) |
| `imagePosition` | 'left' \| 'right' | No | 'left' | Which side the image appears |
| `background` | 'white' \| 'neutral' | No | 'neutral' | Section background |

---

## Usage Examples by Page Type

### Homepage Final CTA
```tsx
<CTASection
  eyebrow="READY TO BOOK YOUR WEDDING?"
  headline="Start planning your dream wedding today"
  description="Schedule a tour and check availability."
  background="dark"
  buttons={[
    { text: 'SCHEDULE VISIT →', href: '/contact', intent: 'schedule' },
    { text: 'CALL NOW', href: 'tel:+15165415020', intent: 'call', external: true },
  ]}
/>
```

### Content Page Mid Section
```tsx
<InlineCTA
  eyebrow="SEE IT IN PERSON"
  headline="Nothing compares to our venue"
  description="Book a private tour today."
  buttonText="SCHEDULE TOUR →"
  buttonHref="/contact"
  imageSrc="/path/to/image.jpg"
  imageAlt="Wedding venue interior"
  imagePosition="left"
  background="white"
/>
```

### Menu Page Specific CTA
```tsx
<InlineCTA
  eyebrow="TASTE OUR CUISINE"
  headline="Schedule a private menu tasting"
  description="Sample our chef inspired dishes."
  buttonText="REQUEST TASTING →"
  buttonHref="/contact"
  imageSrc="/path/to/food.jpg"
  imageAlt="Gourmet wedding food"
  imagePosition="right"
  background="neutral"
/>
```

### Multi Path Conversion
```tsx
<CTASection
  eyebrow="EXPLORE MORE"
  headline="Continue your wedding planning"
  description="Discover more about our venue."
  background="dark"
  buttons={[
    { text: 'VIRTUAL TOUR', href: '/tour', intent: 'tour' },
    { text: 'WEDDING MENU', href: '/menu', intent: 'menu' },
    { text: 'PREFERRED VENDORS', href: '/vendors', intent: 'vendors' },
  ]}
/>
```

---

## Best Practices

### 1. Placement
- **CTASection:** Use at page endings or major content transitions
- **InlineCTA:** Use mid page after key content sections

### 2. Frequency
- Homepage: 2-3 CTAs (hero, mid page, final)
- Content pages: 2 CTAs (mid page, final)
- Contact page: 1-2 CTAs (form focused, exploration)

### 3. Button Count
- Primary conversion: 1-2 buttons max (schedule + call)
- Exploration CTAs: 2-3 buttons (tour, menu, vendors)
- Never more than 3 buttons per CTA section

### 4. Copy Guidelines
- **Eyebrow:** ALL CAPS, action oriented, creates context
- **Headline:** Clear benefit, mentions location (Long Island/Massapequa)
- **Description:** Specific details, urgency, next steps
- **Button:** Action verb + arrow or direct benefit

### 5. Background Selection
- Use `dark` for strong contrast and final page CTAs
- Use `white` for mid page CTAs on neutral backgrounds
- Use `neutral` for inline CTAs on white backgrounds
- Alternate backgrounds for visual rhythm

### 6. Image Selection (InlineCTA)
- Use high quality wedding photography
- Match image subject to CTA message (venue → tour, food → tasting)
- Ensure faces or focal points align well in 50/50 split

### 7. Intent Selection
- Primary action = `schedule` (always gold)
- Secondary action = `call` (always bordered)
- Exploration = `tour`, `menu`, `vendors` (bordered)
- Downloads = `download` (dark background)

---

## Responsive Behavior

Both components are mobile first and responsive:

### CTASection
- Mobile: Stacked buttons (full width)
- Desktop: Side by side buttons (max 3)

### InlineCTA
- Mobile: Stacked (image on top, content below)
- Desktop: 2 column grid (50/50 split)
- Image position only affects desktop layout

---

## Accessibility

Both components include:
- Proper focus states (ring on focus)
- Keyboard navigation support
- ARIA labels where needed
- Sufficient color contrast ratios
- Proper heading hierarchy

---

## Animation

Both components use:
- GSAP fadeInUp on scroll
- HoverScale effects on buttons
- Smooth transitions on all interactions

No configuration needed, animations are built in.

---

## Customization

To add custom styling:

```tsx
<CTASection
  className="my-custom-spacing"
  // ... other props
/>
```

To modify component defaults, edit:
- `/app/components/CTASection.tsx`
- `/app/components/InlineCTA.tsx`

---

## Troubleshooting

### Buttons not displaying correctly
- Check that `intent` is one of the valid types
- Verify `buttons` array has at least one button
- Ensure `href` is a valid path

### Image not loading (InlineCTA)
- Verify image path is correct
- Check image exists in `/public` or `/optimized`
- Ensure Next.js Image optimization is working

### Background color wrong
- Check spelling of `background` prop
- Verify using valid variant: white, neutral, dark, gold
- Dark/gold backgrounds auto adjust text colors

### External links not working
- Set `external: true` for phone/email links
- Use proper href format: `tel:+15165415020` or `mailto:email@example.com`

---

## Migration Notes

If replacing old CTAs:

**Old:**
```tsx
<section className="py-20 bg-riviera-text">
  <div className="max-w-4xl mx-auto text-center">
    <h2>Book Your Wedding</h2>
    <Link href="/contact">Contact Us</Link>
  </div>
</section>
```

**New:**
```tsx
<CTASection
  headline="Book Your Wedding"
  background="dark"
  buttons={[
    { text: 'CONTACT US →', href: '/contact', intent: 'schedule' }
  ]}
/>
```

Benefits: Consistent styling, proper animations, accessibility, responsive.
