# QUICK COMPLIANCE CHECKLIST
## Riviera Waterfront Mansion Website

Use this checklist when adding new pages or updating existing content.

---

## ✅ NEW PAGE CHECKLIST

### 1. Metadata (layout.tsx or metadata export)
```typescript
- [ ] Title (50-60 characters, includes keywords)
- [ ] Description (150-160 characters, compelling)
- [ ] Canonical URL (absolute path)
- [ ] OpenGraph title, description, URL, image
- [ ] Twitter card (summary_large_image)
- [ ] Robots (index: true, follow: true)
```

### 2. Schema Markup (at bottom of page)
```typescript
- [ ] BreadcrumbList (all non-homepage pages)
- [ ] FAQPage (if page has FAQ section)
- [ ] Additional schema as needed (Service, Article, etc.)
```

### 3. FAQ Section
```typescript
- [ ] Minimum 6-8 relevant questions
- [ ] Import FAQSection component
- [ ] Define FAQ array with question/answer pairs
- [ ] Place before final CTA section
- [ ] Add corresponding FAQPage schema
```

### 4. Accessibility
```typescript
- [ ] All images have descriptive alt text
- [ ] Heading hierarchy (one H1, logical H2/H3)
- [ ] Form inputs have labels
- [ ] Links have descriptive text
- [ ] Focus states visible
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG AA (4.5:1 text)
```

### 5. CTAs & Conversion
```typescript
- [ ] Hero CTA above the fold
- [ ] Mid-page inline CTA after key content
- [ ] Final CTA section before footer
- [ ] Multiple conversion paths (form, phone, explore)
- [ ] Clear value propositions
```

### 6. Performance
```typescript
- [ ] Hero image has priority prop
- [ ] Below-fold images lazy load
- [ ] Images have width/height or aspect ratio
- [ ] Responsive sizes configured
- [ ] Modern formats (AVIF/WebP) via Next.js Image
```

### 7. Content Quality
```typescript
- [ ] No hyphens (use spaces/rewrite)
- [ ] No AI giveaway phrases
- [ ] Active voice
- [ ] Specific numbers and details
- [ ] Benefits before features
- [ ] Keywords naturally integrated
- [ ] Local references (Long Island, Massapequa, NY)
```

---

## ✅ QUICK CONTENT CHECKS

### Phone Numbers:
- ✅ `(516) 541 5020`
- ❌ `516-541-5020`

### Time Ranges:
- ✅ `11:00 am to 8:00 pm`
- ❌ `11:00am-8:00pm`

### Age/Duration:
- ✅ `75+ years`
- ❌ `75-year-old`

### Banned Phrases:
- ❌ "I'd be happy to"
- ❌ "Let's dive into"
- ❌ "It's important to note"
- ❌ "Let's explore"
- ❌ "Leverage" / "Utilize"

---

## ✅ IMAGE CHECKLIST

### Alt Text Format:
```typescript
// GOOD - Descriptive with context
alt="Elegant wedding ceremony at Riviera Waterfront Mansion in Massapequa, Long Island"

// BAD - Generic or missing keywords
alt="Wedding ceremony"
```

### Image Component Setup:
```typescript
// Hero/Above-fold
<Image 
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  fill
  priority  // Important!
  className="object-cover"
  sizes="100vw"
  quality={90}
/>

// Below-fold
<Image 
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
  quality={80}
/>
```

---

## ✅ FAQ SECTION TEMPLATE

```typescript
const pageFAQs = [
  {
    question: 'Specific question about the topic?',
    answer: 'Detailed answer with specifics. Include keywords naturally. Provide actionable information.'
  },
  // ... 6-8 total questions
];

// In JSX before final CTA:
<FAQSection 
  faqs={pageFAQs}
  title="Page-specific FAQ title"
  eyebrow="YOUR QUESTIONS ANSWERED"
  background="white" // or "neutral" or "dark"
/>

// In schema section:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: pageFAQs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    })
  }}
/>
```

---

## ✅ CTA SECTION PATTERNS

### Hero CTA (Above Fold):
```typescript
<HoverScale effect="lift">
  <Link 
    href="/contact"
    className="bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 text-center block"
  >
    ACTION TEXT →
  </Link>
</HoverScale>
```

### Mid-Page Inline CTA:
```typescript
<InlineCTA
  eyebrow="COMPELLING REASON"
  headline="Benefit-focused headline"
  description="Supporting details that create desire..."
  buttonText="SPECIFIC ACTION →"
  buttonHref="/target-page"
  imageSrc={imageConfig.section.image}
  imageAlt="Descriptive alt text"
  imagePosition="left" // or "right"
  background="white" // or "neutral"
/>
```

### Final CTA Section:
```typescript
<CTASection
  eyebrow="CREATE URGENCY"
  headline="Clear benefit-driven headline"
  description="Final convincing details with specific information..."
  background="dark"
  buttons={[
    {
      text: 'PRIMARY ACTION →',
      href: '/contact',
      intent: 'schedule',
    },
    {
      text: 'SECONDARY ACTION',
      href: '/other-page',
      intent: 'explore',
    },
  ]}
/>
```

---

## ✅ SCHEMA MARKUP TEMPLATES

### BreadcrumbList (All Non-Homepage):
```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.rivierawaterfrontmansion.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Page Name'
        }
      ]
    })
  }}
/>
```

---

## ✅ TESTING CHECKLIST

### Before Publishing:
- [ ] Run `npm run build` (no errors)
- [ ] Test keyboard navigation (Tab through all elements)
- [ ] Test at 200% zoom (still readable)
- [ ] Check color contrast (use browser tools)
- [ ] Verify all links work
- [ ] Check mobile responsiveness (393px+)
- [ ] Test forms (if applicable)
- [ ] Validate HTML (no errors)
- [ ] Check Lighthouse scores (aim for 90+)

### After Publishing:
- [ ] Submit to Google Search Console
- [ ] Verify schema markup (schema.org validator)
- [ ] Check Core Web Vitals
- [ ] Monitor 404 errors
- [ ] Test social sharing (OG tags render correctly)

---

## 📋 5-MINUTE PAGE AUDIT

1. **Has FAQ section?** (6-8 questions minimum)
2. **Has FAQPage schema?** (in script tag)
3. **Has metadata?** (title, description, OG tags)
4. **Has BreadcrumbList?** (non-homepage only)
5. **Has 3+ CTAs?** (hero, mid-page, final)
6. **All images have alt text?** (descriptive with keywords)
7. **No hyphens?** (phone, time, ages)
8. **Focus states visible?** (try Tab key)
9. **Heading hierarchy correct?** (one H1, logical H2/H3)
10. **Performance optimized?** (priority on hero, lazy below)

**All YES = Ready to publish**

---

## 🎯 COMMON MISTAKES TO AVOID

### ❌ Don't:
- Use generic titles like "About Us" or "Contact"
- Forget alt text on images
- Skip FAQ sections
- Use hyphens in phone numbers or times
- Have multiple H1s on a page
- Forget priority prop on hero images
- Write "click here" link text
- Use AI giveaway phrases
- Add keywords unnaturally
- Create content without actual URLs for reference

### ✅ Do:
- Write specific, keyword-rich titles
- Describe images with context
- Add 6-8 relevant FAQs per page
- Format phone as (516) 541 5020
- Use single H1, then H2/H3 hierarchy
- Priority load above-fold images
- Write descriptive link text
- Use active voice and real details
- Integrate keywords naturally
- Reference real brand materials

---

**Quick Reference Version:** v1.0  
**Last Updated:** February 4, 2026  
**Use For:** New pages, content updates, quality checks
