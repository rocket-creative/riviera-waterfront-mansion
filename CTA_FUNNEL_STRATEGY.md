# CTA Funnel Strategy for Riviera Waterfront Mansion

## Overview

Every page is now a conversion funnel with strategically placed CTAs that guide users toward booking their wedding. Each CTA is contextual to the content and designed to move users through the decision journey.

---

## Conversion Funnel Architecture

### Primary Conversion Goal
**Book a venue tour or submit an inquiry**

### Secondary Goals
1. Call the venue
2. Download brochure
3. Explore more content (tour, menu, vendors)

---

## Page by Page Funnel Strategy

### 1. Homepage (/)

**Funnel Stage:** Awareness → Interest → Desire

**CTA Placement:**

1. **Hero Section** (Above the fold)
   - HeroInquiryForm component
   - Schedule Your Visit button
   - Virtual Tour button
   - **Intent:** Immediate conversion for ready buyers

2. **Mid Page Inline CTA** (After social proof)
   - Appears after Google Reviews and social feeds
   - **Headline:** "Your dream Massapequa waterfront wedding starts here"
   - **Button:** "Check Availability"
   - **Intent:** Convert warm leads who have seen social proof

3. **Final CTA Section** (Bottom)
   - Dark background for contrast
   - **Headline:** "Start planning your dream Massapequa waterfront wedding today"
   - **Buttons:** Schedule Visit + Call
   - **Intent:** Last chance conversion before footer

**Conversion Path:**
Hero → See social proof → Mid page CTA → View features → Final CTA → Convert

---

### 2. Contact Page (/contact)

**Funnel Stage:** Action

**CTA Placement:**

1. **Hero Section**
   - Inquire Now button
   - Call button
   - **Intent:** Immediate action for visitors who navigated directly to contact

2. **Contact Form Section**
   - Primary conversion point
   - InquiryForm component
   - **Intent:** Capture lead information

3. **Final CTA Section**
   - **Headline:** "Continue planning your dream Long Island wedding"
   - **Buttons:** Explore Virtual Tour + View Wedding Menu
   - **Intent:** Keep engaged users on site, nurture leads not ready to commit

**Conversion Path:**
Contact intent → Submit form → Explore more content while waiting

---

### 3. Menu Page (/menu)

**Funnel Stage:** Interest → Desire

**CTA Placement:**

1. **Hero Section**
   - Explore Menu button
   - **Intent:** Keep users engaged with content

2. **Urgent Notice Bar** (After trust bar)
   - Phone CTA with urgency
   - **Headline:** "Limited Long Island wedding dates available"
   - **Intent:** Create FOMO, encourage immediate contact

3. **Mid Page Inline CTA** (After cocktail hour preview)
   - **Headline:** "Schedule a private tasting at our Long Island venue"
   - **Button:** "Request Tasting"
   - **Intent:** Specific conversion relevant to menu browsing

4. **Final CTA Section**
   - **Headline:** "Book your Massapequa waterfront wedding today"
   - **Buttons:** Check Availability + Call
   - **Intent:** Convert users impressed by menu options

**Conversion Path:**
Browse menu → Get excited about food → Request tasting/book tour

---

### 4. Tour Page (/tour)

**Funnel Stage:** Interest → Consideration

**CTA Placement:**

1. **Hero Section**
   - Start Exploring button
   - **Intent:** Encourage content engagement

2. **Mid Page Inline CTA** (After tour gallery)
   - **Headline:** "Nothing compares to seeing our Long Island venue in person"
   - **Button:** "Book Your Tour"
   - **Intent:** Convert after viewing virtual tour

3. **Final CTA Section**
   - **Headline:** "Experience our Long Island waterfront wedding venue in person"
   - **Buttons:** Schedule Visit + Call
   - **Intent:** Strong conversion push after full tour viewing

**Conversion Path:**
View virtual tour → Want to see in person → Schedule visit

---

### 5. Tour Detail Pages (/tour/[slug])

**Funnel Stage:** Deep Interest

**CTA Placement:**

1. **Navigation Bar** (Between tour sections)
   - View All Spaces button
   - Previous/Next space links
   - **Intent:** Keep users exploring

2. **Final CTA Section**
   - **Headline:** "Experience our venue in person"
   - **Buttons:** Schedule Visit + Call
   - **Intent:** Convert deeply engaged users who viewed specific spaces

**Conversion Path:**
Explore specific space → View more spaces → Schedule in person tour

---

### 6. Vendors Page (/vendors)

**Funnel Stage:** Consideration → Decision

**CTA Placement:**

1. **Hero Section**
   - Explore Vendors button
   - **Intent:** Engage with vendor list

2. **Mid Page Inline CTA** (After vendor list)
   - **Headline:** "Our team is here to help build your dream wedding team"
   - **Button:** "Get Recommendations"
   - **Intent:** Offer personal assistance

3. **Final CTA Section**
   - **Headline:** "Request your Long Island wedding date"
   - **Buttons:** Contact Us + Explore Venue
   - **Intent:** Multi path conversion (direct booking or more exploration)

**Conversion Path:**
Browse vendors → Need help/recommendations → Contact venue

---

## CTA Component System

### CTASection Component
Reusable full width CTA section with:
- Eyebrow text (gold, all caps)
- Large headline
- Description
- Multiple buttons with intent based styling
- Background variants (white, neutral, dark, gold)

**Use when:** Page ending or major transition point

### InlineCTA Component
2 column layout with image + content:
- Image on left or right
- Eyebrow, headline, description
- Single button
- Background variants

**Use when:** Mid page content break, after key sections

---

## Intent Based Button Styling

Each button has an "intent" that automatically styles it:

- **schedule:** Primary gold button (main conversion)
- **call:** Bordered button (alternative contact method)
- **download:** Dark button (secondary action)
- **tour:** Bordered button (exploration)
- **menu:** Bordered button on dark (exploration)
- **vendors:** Bordered button on dark (exploration)
- **inquiry:** Gold button (form submission)

Automatically adjusts for light/dark backgrounds.

---

## Best Practices Implemented

### 1. Progressive Disclosure
Users see CTAs at natural break points in content consumption.

### 2. Contextual Relevance
Each CTA matches the content the user just consumed:
- Menu page → Request tasting
- Tour page → Book tour
- Vendors page → Get recommendations

### 3. Multiple Paths
Every page offers:
- Primary path: Schedule/Contact
- Secondary path: Call
- Tertiary path: Explore more content

### 4. Urgency Elements
- "Limited dates available"
- "2026 and 2027 dates filling fast"
- Specific availability callouts

### 5. Benefit Focused Copy
Headlines emphasize outcome:
- "Your dream wedding starts here"
- "Experience in person"
- "Continue planning"

### 6. No Dead Ends
Even after form submission pages, users are directed to explore more content.

---

## Conversion Tracking Recommendations

To measure funnel effectiveness, track:

1. **Click Events:**
   - Schedule visit button clicks (by page)
   - Call button clicks (by page)
   - Download brochure clicks
   - Explore content clicks

2. **Form Submissions:**
   - Hero inquiry form (homepage)
   - Full inquiry form (contact page)
   - Tasting requests (menu page)

3. **User Flow:**
   - Entry page → CTA interaction → Conversion
   - Time on page before CTA click
   - Pages viewed before conversion

4. **A/B Test Opportunities:**
   - CTA headline variations
   - Button copy variations
   - Placement (mid page vs bottom only)

---

## Future Enhancements

1. **Smart CTAs:** Show different CTAs based on:
   - Time on site
   - Pages viewed
   - Scroll depth
   - Return visitor vs new

2. **Personalization:**
   - Geographic CTAs (mention proximity to visitor location)
   - Seasonal urgency (peak wedding season messaging)

3. **Exit Intent:**
   - Modal CTA when user attempts to leave
   - Special offer or downloadable brochure

4. **Sticky CTAs:**
   - Floating schedule button on scroll
   - Mobile specific quick contact bar

---

## Implementation Notes

All CTA components are:
- **Accessible:** Focus states, ARIA labels, keyboard navigation
- **Responsive:** Mobile first with proper touch targets
- **Animated:** Subtle GSAP animations for attention
- **SEO Friendly:** Proper semantic HTML and schema markup

The funnel maintains consistency with Cursor Rules:
- Magazine style layouts
- Editorial photography
- HERO/TEXT/NEUTRAL/ACCENT color roles
- Mobile first responsive design
- No hyphens in copy
- Brand voice throughout
