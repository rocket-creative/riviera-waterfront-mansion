# Inquiry Form Usage Guide

## Overview

The unified inquiry form is now available throughout your website. It collects all the information you need for wedding inquiries and automatically:
1. Sends an email to `info@rivierawaterfrontmansion.com` via Resend
2. Logs all inquiries to a Google Sheet as backup

## Form Fields

The form collects:
- **Name** (required)
- **Email** (required)
- **Phone** (required)
- **Wedding Date** (required)
- **Guest Count** (required - 1 to 350)
- **Desired Season** (required - Spring/Summer/Fall/Winter)
- **Preferred Day** (required - Wed/Thu/Fri/Sat/Sun)
- **Second Choice Day** (optional - Wed/Thu/Fri/Sat/Sun)
- **Ceremony Location** (required - On Site/Off Site)
- **Additional Message** (optional)

## How to Use Throughout Your Site

### Option 1: Inline Form (Contact Page)

The form is already integrated on `/contact` page:

```tsx
import InquiryForm from '@/app/components/InquiryForm';

<InquiryForm />
```

### Option 2: Modal Popup (Any CTA)

Use the `InquiryButton` component to trigger a modal anywhere:

```tsx
import InquiryButton from '@/app/components/InquiryButton';

// Primary button (gold background)
<InquiryButton variant="primary">
  BOOK A VISIT
</InquiryButton>

// Secondary button (white background)
<InquiryButton variant="secondary">
  REQUEST INFO
</InquiryButton>

// Outline button (transparent with border)
<InquiryButton variant="outline">
  SCHEDULE TOUR
</InquiryButton>
```

### Option 3: Link to Contact Form

Simple link approach:

```tsx
import Link from 'next/link';

<Link href="/contact#form">
  SCHEDULE A VISIT →
</Link>
```

## Current Implementation

### Homepage (`app/page.tsx`)

The inquiry form is now integrated at these CTAs:
1. **Hero Section** - "BOOK A VISIT" button (modal)
2. **About Section** - "REQUEST INFORMATION" button (modal)
3. **Final CTA Section** - "SCHEDULE A VISIT" button (modal)

### Contact Page (`app/contact/page.tsx`)

The full inline form is available with all fields.

## Email Template

When an inquiry is submitted, an HTML email is sent with:
- Header with Riviera branding colors
- All form fields clearly labeled
- Direct links to email/phone for quick response
- Timestamp in EST timezone

## Google Sheets Log

All inquiries are logged to your Google Sheet with columns:
- Timestamp (ISO format)
- Name
- Email
- Phone
- Wedding Date
- Guest Count
- Desired Season
- Preferred Day
- Second Choice Day
- Ceremony Location
- Additional Message

## Adding to Other Pages

### Example: Adding to Tour Page

```tsx
'use client';

import InquiryButton from '@/app/components/InquiryButton';

export default function TourPage() {
  return (
    <div>
      {/* Your tour content */}
      
      <section className="py-16 text-center">
        <h2>Love what you see?</h2>
        <InquiryButton variant="primary">
          REQUEST YOUR DATE →
        </InquiryButton>
      </section>
    </div>
  );
}
```

### Example: Adding to Menu Page

```tsx
import InquiryButton from '@/app/components/InquiryButton';

<div className="bg-riviera-neutral p-8">
  <h3>Ready to plan your menu?</h3>
  <p>Schedule a tasting with our culinary team</p>
  <InquiryButton variant="outline">
    BOOK TASTING →
  </InquiryButton>
</div>
```

## Customization

### Custom Button Styles

You can add custom classes to the InquiryButton:

```tsx
<InquiryButton 
  variant="primary"
  className="w-full md:w-auto"
>
  CUSTOM TEXT
</InquiryButton>
```

### Custom Form Styling

The InquiryForm component accepts a className prop:

```tsx
<InquiryForm className="max-w-xl mx-auto" />
```

## Accessibility Features

The form includes:
- ✓ Proper ARIA labels
- ✓ Required field indicators
- ✓ Keyboard navigation support
- ✓ Screen reader compatibility
- ✓ Focus states on all inputs
- ✓ Error messages with ARIA
- ✓ Modal ESC key close
- ✓ Modal click-outside close

## User Experience

### Loading States
- Button shows "SENDING..." while processing
- Button is disabled during submission
- Prevents double submissions

### Success Message
- Green success banner displays
- Form resets automatically
- Message auto-dismisses after 5 seconds

### Error Handling
- Individual field errors display below each input
- General errors display at top of form
- Helpful fallback message with phone number

### Modal Features
- Smooth backdrop blur
- Click outside to close
- ESC key to close
- Scroll locked when open
- Responsive on all devices

## Testing Checklist

Before going live:
- [ ] Test form submission on localhost
- [ ] Verify email arrives at info@rivierawaterfrontmansion.com
- [ ] Check Google Sheet receives new row
- [ ] Test all required field validations
- [ ] Test modal open/close functionality
- [ ] Test on mobile devices
- [ ] Test keyboard navigation
- [ ] Test with screen reader
- [ ] Verify Resend domain is verified
- [ ] Verify Google Sheet permissions

## Troubleshooting

### Form submits but no email
- Check Resend API key in `.env.local`
- Verify domain is verified in Resend dashboard
- Check browser console for errors

### Form submits but no Google Sheet entry
- Verify service account has Editor access
- Check Sheet ID is correct
- Ensure sheet name is "Inquiries"
- Check private key formatting

### Modal doesn't open
- Ensure component is in a Client Component (`'use client'`)
- Check browser console for React errors

### TypeScript errors
```bash
npm run build
```

## Support

For setup help, see `INQUIRY_FORM_SETUP.md`
