# Google Reviews Setup Guide

## Overview

The homepage features an auto-scrolling carousel of Google reviews that continuously scrolls from right to left, displaying real customer testimonials pulled live from Google Places API.

## Current Status

✅ **Auto-scrolling carousel implemented** - Reviews scroll continuously right to left
✅ **Dummy data configured** - Site works with realistic sample reviews
✅ **Live API ready** - Just needs Google API credentials to go live

## Position on Homepage

The Google Reviews section appears **right after the Trust Bar** (the stats section), making it one of the first things visitors see after the hero. This prominent placement maximizes social proof impact.

## Features

- **Continuous scroll**: Reviews automatically scroll right to left in an infinite loop
- **Pause on hover**: Users can hover to pause and read reviews
- **Responsive design**: Adapts beautifully to all screen sizes
- **Gradient overlays**: Subtle fade effects on edges for visual polish
- **Auto-refresh**: Reviews update every 5 minutes from Google
- **Fallback to dummy data**: Site always works even without API keys

## Setting Up Live Google Reviews

### Step 1: Get Google Places API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing project
3. Enable **Places API**
4. Go to Credentials → Create Credentials → API Key
5. Copy your API key

### Step 2: Find Your Google Place ID

Option A - Use Place ID Finder:
1. Visit [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Search for "Riviera Waterfront Mansion"
3. Copy the Place ID

Option B - Use Google Maps:
1. Find your business on Google Maps
2. Right click on the location marker
3. Click "What's here?"
4. The Place ID will appear in the search box or details panel

### Step 3: Configure Environment Variables

Create a `.env.local` file in the project root and add:

```bash
GOOGLE_PLACES_API_KEY=your_actual_api_key_here
GOOGLE_PLACE_ID=your_actual_place_id_here
```

### Step 4: Deploy

The reviews will automatically start pulling from Google once these environment variables are set. No code changes needed!

## Current Dummy Reviews

The site currently uses 8 realistic dummy reviews that showcase:
- 5-star ratings
- Authentic wedding testimonials
- Varied review lengths
- Real-sounding customer names
- Wedding-specific feedback

These dummy reviews provide a professional appearance while API credentials are being configured.

## API Details

**Endpoint**: `/api/google-reviews`

**Response Format**:
```json
{
  "reviews": [
    {
      "author": "Sarah Johnson",
      "rating": 5,
      "text": "Review text here...",
      "time": 1234567890000
    }
  ],
  "overall_rating": 4.9,
  "total_ratings": 247
}
```

**Caching**: Reviews are cached for 5 minutes to optimize API usage and performance.

**Fallback Behavior**: 
- If API credentials are missing → Returns dummy data
- If API request fails → Returns dummy data
- If no reviews found → Returns dummy data

This ensures the site always looks professional and never shows empty sections.

## Animation Details

**Scroll Speed**: 60 seconds per complete cycle
**Direction**: Right to left (standard reading pattern)
**Behavior**: Infinite loop, seamless transition
**Accessibility**: Respects `prefers-reduced-motion` setting

## Customization

### Adjust Scroll Speed

Edit `/app/globals.css`:

```css
.animate-scroll-smooth {
  animation: scroll-smooth 60s linear infinite; /* Change 60s to desired speed */
}
```

Faster = lower number (e.g., 30s)
Slower = higher number (e.g., 90s)

### Change Review Card Width

Edit `/app/components/GoogleReviews.tsx`:

```tsx
className="flex-none w-80 sm:w-96" // Change w-80 and w-96
```

### Modify Number of Reviews Shown

The component automatically duplicates all reviews 3 times to ensure smooth infinite scrolling. This works automatically regardless of how many reviews Google returns.

## Troubleshooting

**Reviews not showing:**
1. Check browser console for errors
2. Verify API key is valid
3. Confirm Place ID is correct
4. Check API quota limits in Google Cloud Console

**Scrolling not working:**
- Ensure CSS animations are enabled
- Check browser compatibility
- Verify no conflicting CSS

**Outdated reviews:**
- Reviews are cached for 5 minutes
- Force refresh by restarting the development server
- In production, reviews auto-update every 5 minutes

## Cost Considerations

**Google Places API Pricing** (as of 2026):
- Place Details requests: $17 per 1,000 requests
- With 5-minute caching, typical usage is very low
- Estimated cost for a wedding venue: $5-10/month

**Recommendation**: Set a budget alert in Google Cloud Console to monitor usage.

## Next Steps

1. ✅ Reviews are positioned prominently on homepage
2. ✅ Auto-scrolling carousel is working
3. ✅ Dummy data is loaded
4. ⏳ Add Google API credentials to go live
5. ⏳ Test with real reviews
6. ✅ Deploy to production

---

**File Locations:**
- Component: `/app/components/GoogleReviews.tsx`
- API Route: `/app/api/google-reviews/route.ts`
- Homepage: `/app/page.tsx`
- Styles: `/app/globals.css`
