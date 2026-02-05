# Privacy & Cookie Consent Implementation

## Overview

Full privacy compliance implementation including cookie consent banner, privacy policy page, and consent management utilities.

## What Was Built

### 1. Cookie Consent Banner (`app/components/CookieConsent.tsx`)

Client-side component that displays on first visit with the following features:

**Compliance:**
- ✅ No pre-checked boxes (except necessary cookies)
- ✅ Granular consent categories (Necessary, Preferences, Analytics, Marketing)
- ✅ Global Privacy Control (GPC) support
- ✅ localStorage persistence
- ✅ Reject all / Accept all / Customize options

**User Experience:**
- Simple view with 3 buttons (Customize, Reject All, Accept All)
- Detailed view showing all cookie categories with descriptions
- Clean, square button design matching brand aesthetic
- Sticky to bottom, dismissible after consent

### 2. Privacy Policy Page (`app/privacy/page.tsx`)

Complete privacy policy page at `/privacy` including:

- Full SEO metadata (title, description, canonical, OG, Twitter)
- Comprehensive privacy sections:
  - Information collection (voluntary + automatic)
  - How information is used
  - Cookie categories explained
  - Information sharing policies
  - Data security measures
  - User rights (access, correction, deletion, opt-out)
  - Children's privacy
  - Contact information
- Magazine-style layout with proper typography
- Back button for navigation
- BreadcrumbList schema (add if needed)

### 3. Cookie Settings Component (`app/components/CookieSettings.tsx`)

Small button component that allows users to reopen consent preferences after initial choice. Placed in footer.

### 4. Consent Utilities (`app/lib/consent.ts`)

Helper functions for checking consent before loading scripts:

```typescript
// Check if user consented to analytics before loading GA
if (hasAnalyticsConsent()) {
  loadGoogleAnalytics()
}

// Listen for consent changes
onConsentChange((consent) => {
  if (consent.analytics) {
    loadGoogleAnalytics()
  }
})
```

**Available functions:**
- `getConsent()` - Get full consent object
- `hasConsent(category)` - Check specific category
- `hasAnalyticsConsent()` - Quick check for analytics
- `hasMarketingConsent()` - Quick check for marketing
- `hasPreferencesConsent()` - Quick check for preferences
- `onConsentChange(callback)` - Listen for updates

### 5. Integration

**Root Layout** (`app/layout.tsx`):
- CookieConsent component added (displays automatically on first visit)

**Footer** (`app/components/Footer.tsx`):
- Privacy Policy link added
- Cookie Settings button added
- Both displayed above copyright

## How It Works

### First Visit Flow

1. User visits site for first time
2. CookieConsent checks localStorage for existing consent
3. If no consent found, checks for GPC signal:
   - GPC enabled → Auto-reject optional cookies
   - GPC disabled → Show banner
4. User makes choice (Accept All, Reject All, or Customize)
5. Preferences saved to localStorage
6. Banner dismissed
7. Custom event dispatched for other components to react

### Returning Visitor

1. User visits site
2. CookieConsent checks localStorage
3. Consent found → Banner not shown
4. Scripts can check consent status using utilities

### Changing Preferences

1. User clicks "Cookie Settings" in footer
2. localStorage cleared
3. Page reloads
4. Banner displays again
5. User can update choices

## Using Consent Utilities

### Example: Conditional Analytics Loading

```tsx
'use client'

import { useEffect } from 'react'
import { hasAnalyticsConsent, onConsentChange } from '@/app/lib/consent'

export default function Analytics() {
  useEffect(() => {
    // Check initial consent
    if (hasAnalyticsConsent()) {
      loadGoogleAnalytics()
    }
    
    // Listen for consent changes
    const cleanup = onConsentChange((consent) => {
      if (consent.analytics) {
        loadGoogleAnalytics()
      }
    })
    
    return cleanup
  }, [])
  
  return null
}

function loadGoogleAnalytics() {
  // Initialize GA only after consent
  window.gtag('config', 'GA-XXXXXXXX')
}
```

### Example: Conditional Marketing Scripts

```tsx
'use client'

import { useEffect } from 'react'
import { hasMarketingConsent, onConsentChange } from '@/app/lib/consent'

export default function FacebookPixel() {
  useEffect(() => {
    if (hasMarketingConsent()) {
      loadFacebookPixel()
    }
    
    return onConsentChange((consent) => {
      if (consent.marketing) {
        loadFacebookPixel()
      }
    })
  }, [])
  
  return null
}
```

## Customization

### Update Contact Info in Privacy Policy

Edit `app/privacy/page.tsx` line ~195:

```tsx
<p className="text-stone-700 mb-2">
  Email: <a href="mailto:info@rivieramansion.com">info@rivieramansion.com</a>
</p>
<p className="text-stone-700">
  Phone: (555) 123 4567
</p>
```

### Update Privacy Policy Content

The privacy policy is a standard template. Review and customize sections to match your specific:
- Data collection practices
- Third-party services used
- Data retention policies
- International transfers (if applicable)

### Add Cookie Details

If using specific third-party cookies, list them in the privacy policy under the "Cookies and Tracking" section.

## Compliance Checklist

✅ **GDPR (EU)**
- Granular consent categories
- No pre-checked boxes
- Clear descriptions
- Easy opt-out
- Right to access, delete, correct data

✅ **CCPA (California)**
- Privacy policy accessible
- Do Not Sell disclosure
- GPC support
- Right to deletion

✅ **General Best Practices**
- Consent before analytics/marketing
- Clear privacy policy
- Easy to update preferences
- No dark patterns

## Next Steps

1. **Review Privacy Policy:** Customize the template to match your actual practices
2. **Add Analytics Conditionally:** Use consent utilities before loading GA, FB Pixel, etc.
3. **Test GPC:** Enable GPC in browser and verify auto-reject works
4. **Update Contact Info:** Replace placeholder email/phone in privacy page
5. **Add Schema:** Consider adding BreadcrumbList schema to privacy page for SEO

## Files Created

```
app/
  components/
    CookieConsent.tsx       # Main consent banner
    CookieSettings.tsx      # Settings button
    Footer.tsx              # Updated with privacy links
  lib/
    consent.ts              # Consent utility functions
  privacy/
    page.tsx                # Privacy policy page
  layout.tsx                # Updated with CookieConsent
```

## Storage

Consent preferences stored in localStorage:
- `cookie-consent` - JSON object with consent categories
- `cookie-consent-date` - ISO timestamp of consent

## Events

The consent banner dispatches a custom event when preferences are saved:

```typescript
window.addEventListener('cookie-consent-updated', (event) => {
  console.log('New consent:', event.detail)
  // event.detail contains ConsentPreferences object
})
```

## Rules Compliance

This implementation satisfies the CURSOR RULES privacy requirements:

- ✅ No analytics until explicit consent
- ✅ Granular consent: Necessary, Preferences, Analytics, Marketing
- ✅ No pre-checked boxes
- ✅ Honor Global Privacy Control (GPC)
