# Live Feeds Setup Guide

This guide will help you set up the live Google Reviews and Instagram feed integrations for the Riviera Waterfront Mansion website.

## Google Places API Setup (for Live Reviews)

### Step 1: Enable Google Places API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** → **Library**
4. Search for "Places API" and enable it
5. Go to **APIs & Services** → **Credentials**
6. Click **Create Credentials** → **API Key**
7. Copy the API key

### Step 2: Get Your Place ID

1. Go to [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Search for "Riviera Waterfront Mansion, 200 E Shore Dr, Massapequa, NY 11758"
3. Copy the Place ID

### Step 3: Add to Environment Variables

Add these to your `.env.local` file:

```bash
GOOGLE_PLACES_API_KEY=your_api_key_here
GOOGLE_PLACE_ID=your_place_id_here
```

**Important:** Restrict your API key to only the Places API and your domain for security.

---

## Instagram Basic Display API Setup (for Live Social Feed)

### Step 1: Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click **My Apps** → **Create App**
3. Select **Consumer** as the app type
4. Fill in app details and create the app

### Step 2: Add Instagram Basic Display

1. In your app dashboard, click **Add Product**
2. Find **Instagram Basic Display** and click **Set Up**
3. Click **Create New App** in the Basic Display section
4. Fill in required fields:
   - **Valid OAuth Redirect URIs:** `https://yourdomain.com/`
   - **Deauthorize Callback URL:** `https://yourdomain.com/`
   - **Data Deletion Request URL:** `https://yourdomain.com/`
5. Save changes

### Step 3: Add Instagram Test User

1. Go to **Roles** → **Instagram Testers**
2. Click **Add Instagram Testers**
3. Enter your Instagram account username
4. Log into Instagram and accept the tester invite:
   - Go to Settings → Apps and Websites → Tester Invites
   - Accept the invitation

### Step 4: Generate Access Token

1. In your app, go to **Instagram Basic Display** → **Basic Display**
2. Under **User Token Generator**, click **Generate Token** next to your test user
3. Log in with Instagram and authorize the app
4. Copy the Access Token

### Step 5: Get Long Lived Access Token

Instagram access tokens expire after 1 hour. Convert to a long lived token (60 days):

```bash
curl -X GET "https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=YOUR_APP_SECRET&access_token=SHORT_LIVED_TOKEN"
```

Replace:
- `YOUR_APP_SECRET`: From app dashboard → Settings → Basic
- `SHORT_LIVED_TOKEN`: The token from Step 4

The response will contain a `access_token` that lasts 60 days.

### Step 6: Add to Environment Variables

Add this to your `.env.local` file:

```bash
INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token_here
```

### Step 7: Set Up Token Refresh (Important!)

Instagram long lived tokens expire after 60 days. Set up a monthly refresh:

```bash
curl -X GET "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=YOUR_CURRENT_TOKEN"
```

**Recommendation:** Set a calendar reminder for every 30 days to refresh the token.

---

## Alternative: Instagram Embed Widget (No API Required)

If the API setup is too complex, you can use Instagram's embed widget:

1. Go to your Instagram profile
2. Share a post → **Embed**
3. Copy the embed code
4. Replace the `SocialFeed` component with the embed code

**Note:** This won't auto update as frequently as the API method.

---

## Testing Your Setup

### Test Google Reviews

1. Start your dev server: `npm run dev`
2. Visit `http://localhost:3000/api/google-reviews`
3. You should see JSON with review data

### Test Instagram Feed

1. Visit `http://localhost:3000/api/instagram-feed`
2. You should see JSON with post data

### Test Homepage

1. Visit `http://localhost:3000`
2. Scroll to the reviews section (should see live Google reviews scrolling)
3. Scroll to "See real weddings" section (should see Instagram grid)

---

## Troubleshooting

### Google Reviews Not Showing

- Check your API key is valid and Places API is enabled
- Verify your Place ID is correct
- Check browser console for errors
- Ensure you have reviews on Google Business Profile

### Instagram Feed Not Showing

- Verify your access token is valid (not expired)
- Check that your Instagram account is a tester on the app
- Ensure you have public posts on Instagram
- Check API quota limits haven't been exceeded

### CORS Errors

- API routes run server side, so CORS shouldn't be an issue
- If you see CORS errors, check your API credentials

---

## Security Notes

1. **Never commit** `.env.local` to Git
2. Keep `.env.example` updated with placeholder values
3. Restrict Google API key to specific APIs and domains
4. Rotate Instagram access token regularly
5. Monitor API usage to avoid unexpected charges

---

## Support

If you encounter issues:

1. Check the browser console for errors
2. Check the server logs for API errors
3. Verify all environment variables are set correctly
4. Test API endpoints directly before troubleshooting the UI

For help with Google Places API: [Google Places Documentation](https://developers.google.com/maps/documentation/places/web-service/overview)

For help with Instagram API: [Instagram Basic Display Documentation](https://developers.facebook.com/docs/instagram-basic-display-api)
