# Inquiry Form Setup Guide

This guide will help you set up the unified inquiry form with Resend email integration and Google Sheets logging.

## 1. Resend Setup

### Create Resend Account
1. Go to [resend.com](https://resend.com) and create an account
2. Navigate to API Keys section
3. Create a new API key
4. Copy the API key

### Configure Domain (Important!)
1. In Resend dashboard, go to Domains
2. Add your domain (e.g., `rivierawaterfrontmansion.com`)
3. Add the DNS records they provide to your domain registrar
4. Wait for verification (usually 5-10 minutes)
5. Once verified, update the "from" email in `/app/actions/inquiry.ts`:
   ```typescript
   from: 'Riviera Inquiries <inquiries@rivierawaterfrontmansion.com>',
   ```

**Note:** Until domain is verified, emails will come from `onboarding@resend.dev` (for testing only)

## 2. Google Sheets Setup

### Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (e.g., "Riviera Inquiries")
3. Enable Google Sheets API:
   - Go to "APIs & Services" > "Enable APIs and Services"
   - Search for "Google Sheets API"
   - Click "Enable"

### Create Service Account
1. Go to "IAM & Admin" > "Service Accounts"
2. Click "Create Service Account"
3. Name it (e.g., "riviera-inquiries-bot")
4. Click "Create and Continue"
5. Grant role: "Editor" (or just "Google Sheets" if available)
6. Click "Done"
7. Click on the service account email
8. Go to "Keys" tab
9. Click "Add Key" > "Create new key"
10. Choose JSON format
11. Download the JSON file

### Extract Credentials from JSON
Open the downloaded JSON file and find:
- `client_email` - Your service account email
- `private_key` - Your private key (includes `-----BEGIN PRIVATE KEY-----`)

### Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Riviera Inquiries" (or your preference)
4. Rename the first sheet to "Inquiries"
5. Add headers in row 1:
   ```
   A1: Timestamp
   B1: Name
   C1: Email
   D1: Phone
   E1: Wedding Date
   F1: Guest Count
   G1: Desired Season
   H1: Preferred Day
   I1: Second Choice Day
   J1: Ceremony Location
   K1: Message
   ```
6. Share the sheet with your service account email (the `client_email` from JSON)
   - Click "Share" button
   - Paste the service account email
   - Give "Editor" permissions
7. Copy the Sheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
   ```

## 3. Environment Variables

Create a `.env.local` file in your project root:

```bash
# Resend API Configuration
RESEND_API_KEY=re_your_actual_api_key_here

# Google Sheets API Configuration
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project-name.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
Your actual private key here (keep the line breaks)
-----END PRIVATE KEY-----
"
GOOGLE_SHEET_ID=your_actual_sheet_id_here
```

**Important Notes:**
- The `GOOGLE_PRIVATE_KEY` must include quotes and preserve line breaks
- Never commit `.env.local` to git (it's already in `.gitignore`)
- For production (Vercel), add these as environment variables in the dashboard

## 4. Testing

### Test Locally
1. Make sure `.env.local` is configured
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Navigate to `/contact`
4. Fill out and submit the form
5. Check:
   - Your email at info@rivierawaterfrontmansion.com
   - Your Google Sheet for a new row

### Common Issues

**Email not sending:**
- Check Resend API key is valid
- Verify domain is verified in Resend
- Check console for errors

**Google Sheets not logging:**
- Verify service account has Editor access to the sheet
- Check Sheet ID is correct
- Ensure Sheet name is exactly "Inquiries"
- Check private key formatting (must have line breaks)

## 5. Production Deployment (Vercel)

1. Push your code to GitHub
2. In Vercel dashboard > Settings > Environment Variables
3. Add all three variables:
   - `RESEND_API_KEY`
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
4. For `GOOGLE_PRIVATE_KEY`, paste the entire key including:
   ```
   -----BEGIN PRIVATE KEY-----
   (key content with line breaks)
   -----END PRIVATE KEY-----
   ```
5. Redeploy the project

## 6. Using the Form Throughout the Site

The inquiry form is now a reusable component. To add it anywhere:

```tsx
import InquiryForm from '@/app/components/InquiryForm';

// Then use it:
<InquiryForm />
```

You can also link to the contact page:
```tsx
import Link from 'next/link';

<Link href="/contact#form">
  SCHEDULE A VISIT →
</Link>
```

## Support

If you encounter issues:
1. Check the browser console for errors
2. Check the Vercel logs (if deployed)
3. Verify all environment variables are set correctly
4. Test the Google Sheets API connection separately
5. Verify Resend domain is fully verified
