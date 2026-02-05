# CURSOR RULES 2026

**Version:** 2026.2
**Author:** UXUI Design Corp / George Stoff
**Install:** Cursor → Settings → Rules for AI → Paste everything below the line

---

## GIT WORKFLOW

### Commit Format
```
NNN_type_brief-description
```

**Types:** chore, feat, fix, update, refactor, docs, test, style, perf

**Examples:**
- 001_chore_initial-setup
- 002_feat_homepage  
- 003_fix_nav-mobile

### Branch Naming
- `PROJECT_MAIN` - production (default branch, forward facing)
- `PROJECT_DEV` - development work

Derived from folder name: ITL → ITL_MAIN, ITL_DEV

**Only 2 branches unless project requires more.** MAIN is the default. Create DEV from MAIN for development work. Merge DEV → MAIN when ready for production.

### Version Tags
Format: `vNN` (no decimals)
Examples: v01, v02, v03

---

## STACK

### Standard
- Next.js App Router
- TypeScript strict
- Tailwind CSS
- Vercel
- PostgreSQL (Vercel Postgres or Supabase)

### HIPAA (When handling PHI)
- AWS or Google Cloud with BAA (not Vercel)
- Encrypted database (RDS)
- Auth0 Healthcare or AWS Cognito
- 15 min session timeout
- MFA required
- No PHI in logs or localStorage

---

## DESIGN SYSTEM

### Color Architecture

Every palette has 4 roles:

| Role | Usage |
|------|-------|
| HERO | Full-bleed backgrounds (25-35% of page) |
| TEXT | Headlines, body (darkest color) |
| NEUTRAL | Breathing room, alternating sections |
| ACCENT | Small moments, hovers (5% max) |

**Pattern:** HERO → Neutral → HERO → Neutral → Footer

**Rules:**
- One color dominates
- Text color for reading only
- Accents are scalpels not paintbrushes
- No color soup (one bg per section)

### Layout Philosophy

**Magazine presentation:** Every page is a defined width content area floating over a muted background (stone-100, neutral-100). Content has clear edges. The background frames it.

Editorial, not template:
- Asymmetric compositions (not always centered)
- Text overlapping images (headlines break across boundaries)
- Images at different scales (not equal grids)
- Large typography with intentional line breaks
- Uneven grids (5/7 splits, 4/6 splits)
- Color blocking (full sections of solid color)
- Photography does the heavy lifting

### Component Patterns

**Buttons:** Square with arrow
- No rounded corners (or minimal)
- Uppercase, letter spaced, light weight text
- Simple → arrow, shifts right on hover

**Cards (Product):**
- No shadows, no borders
- Image IS the card
- Product name in small caps below
- Price in lighter weight

**Scroll Indicators:**
- "VIEW MORE" with down arrow
- Small caps, tracking-widest
- Subtle bounce animation

### Responsive (Mobile First)

Design for mobile FIRST, enhance upward.

**Breakpoints:**
```
sm: 393px   (iPhone 14 Pro)
md: 810px   (iPad 10.2")
lg: 1024px  (iPad Pro)
xl: 1440px  (13" laptop)
2xl: 1920px (15" laptop)
3xl: 3840px (4K)
```

**Correct:**
```tsx
<div className="text-sm md:text-base lg:text-lg xl:text-xl">
```

**Wrong:**
```tsx
<div className="text-2xl md:text-sm">  // scales DOWN = wrong
```

### Container Rules

**Magazine over background:**

```tsx
<div className="min-h-screen bg-stone-100">
  <div className="max-w-5xl mx-auto bg-white min-h-screen shadow-sm">
    {/* Content */}
  </div>
</div>
```

### Anti-Patterns (What NOT to Do)

- Purple/blue gradients on white
- Generic stock photography
- Inter font everywhere
- Too many colors
- Too many boxes/borders
- Icons everywhere

---

## SEO

### Every Page Needs

```typescript
export const metadata: Metadata = {
  title: 'Primary Keyword | Brand',     // 50-60 chars
  description: 'Compelling...',          // 150-160 chars
  alternates: { canonical: 'https://domain.com/page' },
  openGraph: { ... },
  twitter: { card: 'summary_large_image', ... },
}
```

### JSON-LD Schema

- Homepage: Organization + WebSite
- Service pages: Service
- All non-homepage: BreadcrumbList

### Banned Meta Tags

- keywords (ignored since 2009)
- revisit-after (never worked)
- rating, generator

---

## SECURITY

### Required

- Input validation with Zod on all endpoints
- CSP headers in next.config.js
- No client-side secrets
- Whitelist validation (not blacklist)

### Forbidden

- eval() or Function() with user input
- child_process.exec with user input
- Hardcoded API keys
- Path traversal vulnerabilities

### Headers (next.config.js)

```typescript
const securityHeaders = [
  { key: 'Content-Security-Policy', value: "default-src 'self'..." },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
]
```

---

## ACCESSIBILITY

- WCAG 2.1 AA minimum
- Keyboard navigation for all interactive elements
- Visible focus states
- Form labels for all inputs
- Alt text for all images
- Color contrast meets standards

---

## PRIVACY

- No analytics until explicit consent
- Granular consent: Necessary, Preferences, Analytics, Marketing
- No pre-checked boxes
- Honor Global Privacy Control (GPC)

---

## CONTENT

**No hyphens anywhere.** Rewrite to avoid. Phone: (555) 123 4567 not 555-123-4567.

**No AI giveaways.** Never use: "I'd be happy to", "dive into", "it's important to note", "let's explore", "leverage", "utilize", "in order to", "due to the fact that"

**Ask for URL before writing text.** Design is one thing. Copy is another. Get the source URL so text matches real brand voice.

- Active voice
- Sentence case for headings
- Oxford comma always

---

## GSAP + CSS VISIBILITY

**Common conflict:** GSAP animations fail because CSS has `opacity: 0`, `visibility: hidden`, or `display: none` that GSAP can't override, or GSAP sets initial states that CSS then fights.

### Rules

1. **GSAP controls visibility, not CSS.** If GSAP animates an element's opacity or visibility, remove any CSS that sets those properties.

2. **Use GSAP's `set()` for initial states:**
```tsx
// CORRECT - GSAP handles everything
gsap.set('.element', { opacity: 0, y: 20 })
gsap.to('.element', { opacity: 1, y: 0 })

// WRONG - CSS fights GSAP
// .element { opacity: 0; } ← Remove this
```

3. **Check for conflicts before animating:**
```tsx
// Debug: log computed styles
const el = document.querySelector('.element')
console.log(getComputedStyle(el).opacity)
console.log(getComputedStyle(el).visibility)
console.log(getComputedStyle(el).display)
```

4. **Tailwind classes to watch:**
- `invisible` (visibility: hidden)
- `hidden` (display: none)
- `opacity-0` (opacity: 0)

Remove these from elements GSAP will animate. Let GSAP set initial state instead.

5. **ScrollTrigger specifics:**
```tsx
ScrollTrigger.create({
  trigger: '.element',
  onEnter: () => gsap.to('.element', { opacity: 1 }),
  // Element must be visible in DOM for trigger to work
  // display: none breaks ScrollTrigger detection
})
```

### Pre-animation Checklist

- [ ] No CSS opacity/visibility on animated elements
- [ ] No Tailwind `hidden`, `invisible`, `opacity-0` classes
- [ ] GSAP `set()` used for initial states
- [ ] Parent containers are visible (display not none)
- [ ] ScrollTrigger elements exist in DOM flow

---

## VERIFICATION CHECKLIST

Before completing any page:

**Design:**
- [ ] Colors follow hero/text/neutral/accent roles
- [ ] Mobile-first responsive
- [ ] Magazine-style containers (not edge-to-edge)

**SEO:**
- [ ] Title 50-60 chars
- [ ] Description 150-160 chars
- [ ] Canonical URL (absolute)
- [ ] OG + Twitter tags
- [ ] JSON-LD schema
- [ ] BreadcrumbList (non-homepage)

**Security:**
- [ ] Input validation with Zod
- [ ] No hardcoded secrets
- [ ] Security headers configured

**Accessibility:**
- [ ] All images have alt text
- [ ] Focus states visible
- [ ] Form labels present

---

## FAILURE MODE

If compliance is not possible:
1. STOP
2. EXPLAIN what cannot be satisfied
3. PROPOSE compliant alternative
4. WAIT for approval

Proceeding without compliance is forbidden.
