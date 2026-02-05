# Live Social Media Feeds Setup

## Current Status

The Instagram and TikTok carousel feeds are fully functional and display beautiful venue photos that link to your real social accounts:
- **Instagram**: @rivierawaterfrontmansion
- **TikTok**: @rivierawaterfrontmansion

To show LIVE posts from your accounts (instead of venue placeholders), follow the setup instructions below.

---

## Instagram Live Feed Setup

### Prerequisites
- Instagram Business or Creator account (free to convert)
- Facebook Page connected to Instagram account

### Step 1: Convert to Business Account (if needed)

1. Open Instagram app
2. Go to Settings > Account > Switch to Professional Account
3. Choose "Business"
4. Connect to your Facebook Page (create one if needed)

### Step 2: Create Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "My Apps" > "Create App"
3. Select "Business" as the app type
4. Name it "Riviera Website" or similar
5. Complete the setup

### Step 3: Add Instagram Basic Display

1. In your Facebook App dashboard, click "Add Product"
2. Find "Instagram Basic Display" and click "Set Up"
3. Create a new Instagram App ID
4. Add OAuth Redirect URI: `https://www.rivierawaterfrontmansion.com/` (or your domain)
5. Add Deauthorize Callback URL: `https://www.rivierawaterfrontmansion.com/`
6. Add Data Deletion Request URL: `https://www.rivierawaterfrontmansion.com/`

### Step 4: Add Instagram Test User

1. Go to Instagram Basic Display > Basic Display
2. Scroll to "User Token Generator"
3. Click "Add or Remove Instagram Testers"
4. Add your Instagram username (@rivierawaterfrontmansion)
5. Go to Instagram app > Settings > Security > Apps and Websites > Tester Invites
6. Accept the tester invite

### Step 5: Generate Access Token

1. Back in Facebook Developer Console
2. Go to Instagram Basic Display > Basic Display
3. Click "Generate Token" next to your username
4. Log in to Instagram when prompted
5. Copy the access token

### Step 6: Add Token to Environment

Add to your `.env.local` file (create if it doesn't exist):

```bash
INSTAGRAM_ACCESS_TOKEN=your_long_access_token_here
```

### Step 7: Refresh Token (Every 60 Days)

Instagram access tokens expire after 60 days. To refresh:

```bash
curl -X GET "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=YOUR_CURRENT_TOKEN"
```

Consider setting up a cron job or Vercel serverless function to auto-refresh.

### Step 8: Deploy

1. Add `INSTAGRAM_ACCESS_TOKEN` to Vercel Environment Variables
2. Redeploy the site

Your Instagram feed will now show LIVE posts!

---

## TikTok Live Feed Setup

TikTok API access requires additional approval but is worth it for live content.

### Prerequisites
- TikTok Business Account
- TikTok Developer Account approval

### Step 1: TikTok Business Account

1. Go to [TikTok Business](https://www.tiktok.com/business/)
2. Sign up or convert your existing account
3. Complete business verification

### Step 2: Developer Application

1. Go to [TikTok Developers](https://developers.tiktok.com/)
2. Log in with your TikTok account
3. Create a new app
4. Select "Display API" for permissions
5. Submit for review (typically takes 1 to 2 weeks)

### Step 3: Get Access Token

Once approved:

1. Go to your TikTok Developer App
2. Navigate to "Manage" > "Access Token"
3. Generate a user access token with `user.info.basic` and `video.list` scopes
4. Copy the access token

### Step 4: Add Token to Environment

```bash
TIKTOK_ACCESS_TOKEN=your_tiktok_access_token_here
```

### Step 5: Deploy

1. Add `TIKTOK_ACCESS_TOKEN` to Vercel Environment Variables
2. Redeploy the site

---

## Current Carousel Features

### Visual Design
- **Instagram**: Scrolls right to left (50s cycle)
- **TikTok**: Scrolls left to right (55s cycle) for visual contrast
- Both pause on hover
- Click any card to open the real social post

### Responsive
- Mobile: 288px card width
- Desktop: 320px card width
- Touch friendly

### Performance
- Images lazy loaded
- CSS animations (60fps)
- 10 minute cache refresh

---

## Troubleshooting

### Images Not Loading
The carousel uses real venue images from `/optimized/medium/`. If images don't load:
1. Check the `/optimized/` folder exists
2. Verify image paths in API routes

### Feed Shows Placeholders After Adding Token
1. Check browser console for API errors
2. Verify token is correct in `.env.local`
3. Restart dev server: `npm run dev`
4. Check if token expired (Instagram: 60 days)

### Carousel Not Scrolling
1. Check if CSS animations are loading
2. Verify `globals.css` includes scroll animations
3. Check for `prefers-reduced-motion` setting

### API Rate Limits
- Instagram: 200 calls/hour (we use ~6)
- TikTok: Varies by endpoint

---

## File Locations

```
/app
  /api
    /instagram-feed/route.ts    # Instagram API endpoint
    /tiktok-feed/route.ts       # TikTok API endpoint
  /components
    DualSocialFeed.tsx          # Carousel component
/app/globals.css                # Scroll animations
```

---

## Environment Variables Summary

```bash
# .env.local

# Instagram (required for live feed)
INSTAGRAM_ACCESS_TOKEN=your_instagram_token

# TikTok (optional, requires API approval)
TIKTOK_ACCESS_TOKEN=your_tiktok_token
```

---

## Quick Test

After adding tokens, test locally:

```bash
npm run dev
# Open http://localhost:3000
# Scroll to social feed section
# Check browser Network tab for /api/instagram-feed and /api/tiktok-feed
# Response should show "source": "live" instead of "placeholder"
```

---

**Last Updated**: February 4, 2026
**Status**: Ready for live API connection
