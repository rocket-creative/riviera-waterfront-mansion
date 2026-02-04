# Quick Start - Inquiry Form

## 🚀 Get Started in 15 Minutes

### Step 1: Get Resend API Key (5 min)
1. Go to [resend.com](https://resend.com) → Sign up
2. Create API key
3. Copy the key

### Step 2: Configure Google Sheets (10 min)
1. Create Google Cloud project at [console.cloud.google.com](https://console.cloud.google.com)
2. Enable "Google Sheets API"
3. Create Service Account → Download JSON credentials
4. Create new Google Sheet:
   - Name: "Riviera Inquiries"
   - Sheet name: "Inquiries"
   - Headers in row 1: Timestamp, Name, Email, Phone, Wedding Date, Guest Count, Desired Season, Preferred Day, Second Choice Day, Ceremony Location, Message
5. Share sheet with service account email (from JSON)

### Step 3: Add Environment Variables
Edit `.env.local`:
```bash
RESEND_API_KEY=re_your_key_from_step_1
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-bot@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
paste the entire key from JSON here
-----END PRIVATE KEY-----"
GOOGLE_SHEET_ID=get_from_sheet_url
```

### Step 4: Test
```bash
npm run dev
```
Visit http://localhost:3000 → Click "BOOK A VISIT" → Submit test inquiry

### Step 5: Verify
- Check email at info@rivierawaterfrontmansion.com
- Check Google Sheet for new row

## ✅ Done!

The form is now live at every CTA throughout your site.

## 📚 Need More Details?

- **Complete Setup:** See `INQUIRY_FORM_SETUP.md`
- **Usage Guide:** See `INQUIRY_FORM_USAGE.md`
- **Full Summary:** See `INQUIRY_FORM_SUMMARY.md`

## 🆘 Problems?

### Email not working
- Verify Resend API key is correct
- Check `RESEND_API_KEY` in `.env.local`

### Google Sheets not logging
- Verify sheet is shared with service account email
- Check Sheet ID is correct
- Ensure sheet name is exactly "Inquiries"

### Form not appearing
- Clear browser cache
- Restart dev server: `npm run dev`
- Check browser console for errors

## 📞 Production Deployment

When ready to deploy:
1. Push code to GitHub
2. In Vercel → Settings → Environment Variables
3. Add all 4 variables from `.env.local`
4. Redeploy
5. Test on live site

---

**Need help?** Open `INQUIRY_FORM_SETUP.md` for detailed instructions.
