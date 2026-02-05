import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 600; // Cache for 10 minutes

// Dummy Instagram posts for testing and fallback
const DUMMY_POSTS = [
  {
    id: 'inst_001',
    caption: 'Stunning waterfront ceremony at golden hour 🌅 Another perfect day at Riviera! #RivieraWedding #WaterfrontWedding #LongIslandWedding',
    media_url: '/optimized/ceremony-waterfront-1.jpg',
    permalink: 'https://www.instagram.com/rivierawaterfrontmansion/',
    timestamp: new Date().toISOString()
  },
  {
    id: 'inst_002',
    caption: 'The grand ballroom transformation is complete ✨ Ready for tonight\'s celebration! #WeddingVenue #BallroomWedding #ElegantWedding',
    media_url: '/optimized/ballroom-reception-1.jpg',
    permalink: 'https://www.instagram.com/rivierawaterfrontmansion/',
    timestamp: new Date(Date.now() - 86400000).toISOString()
  },
  {
    id: 'inst_003',
    caption: 'Our gorgeous bridal suite with those dreamy waterfront views 💕 #BridalSuite #WeddingPrep #GettingReady',
    media_url: '/optimized/bridal-suite-1.jpg',
    permalink: 'https://www.instagram.com/rivierawaterfrontmansion/',
    timestamp: new Date(Date.now() - 172800000).toISOString()
  },
  {
    id: 'inst_004',
    caption: 'Cocktail hour perfection! 🍸 Indoor and outdoor spaces flowing seamlessly #CocktailHour #WeddingReception #Celebrations',
    media_url: '/optimized/cocktail-hour-1.jpg',
    permalink: 'https://www.instagram.com/rivierawaterfrontmansion/',
    timestamp: new Date(Date.now() - 259200000).toISOString()
  },
  {
    id: 'inst_005',
    caption: 'That first dance moment ❤️ Magic happens here every weekend #FirstDance #WeddingReception #NewlyWeds',
    media_url: '/optimized/reception-dancing-1.jpg',
    permalink: 'https://www.instagram.com/rivierawaterfrontmansion/',
    timestamp: new Date(Date.now() - 345600000).toISOString()
  },
  {
    id: 'inst_006',
    caption: 'Table settings on point 🍽️ Every detail matters at Riviera #WeddingDecor #TableSettings #ReceptionDetails',
    media_url: '/optimized/table-settings-1.jpg',
    permalink: 'https://www.instagram.com/rivierawaterfrontmansion/',
    timestamp: new Date(Date.now() - 432000000).toISOString()
  },
  {
    id: 'inst_007',
    caption: 'The venue at dusk is absolutely magical 🌙 #NightWedding #VenueVibes #WaterfrontMagic',
    media_url: '/optimized/venue-exterior-night-1.jpg',
    permalink: 'https://www.instagram.com/rivierawaterfrontmansion/',
    timestamp: new Date(Date.now() - 518400000).toISOString()
  },
  {
    id: 'inst_008',
    caption: 'Behind the scenes: Our team setting up for today\'s ceremony 🎪 #WeddingSetup #BehindTheScenes #EventPlanning',
    media_url: '/optimized/ceremony-setup-1.jpg',
    permalink: 'https://www.instagram.com/rivierawaterfrontmansion/',
    timestamp: new Date(Date.now() - 604800000).toISOString()
  },
  {
    id: 'inst_009',
    caption: 'Outdoor ceremony with water views never gets old 💙 #OutdoorWedding #CeremonyViews #DreamWedding',
    media_url: '/optimized/ceremony-outdoor-1.jpg',
    permalink: 'https://www.instagram.com/rivierawaterfrontmansion/',
    timestamp: new Date(Date.now() - 691200000).toISOString()
  },
  {
    id: 'inst_010',
    caption: 'Cheers to another beautiful celebration! 🥂 #WeddingToast #Celebration #RivieraLove',
    media_url: '/optimized/toast-moment-1.jpg',
    permalink: 'https://www.instagram.com/rivierawaterfrontmansion/',
    timestamp: new Date(Date.now() - 777600000).toISOString()
  }
];

export async function GET() {
  try {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    // If no access token, return dummy data
    if (!accessToken) {
      console.log('Using dummy Instagram data');
      return NextResponse.json({
        posts: DUMMY_POSTS
      });
    }

    // Fetch from Instagram Basic Display API
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp,media_type&access_token=${accessToken}`;

    const response = await fetch(url, {
      next: { revalidate: 600 }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch from Instagram API');
    }

    const data = await response.json();

    // Filter for images only, exclude videos for better performance
    const imagePosts = data.data
      ?.filter((post: any) => post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM')
      .map((post: any) => ({
        id: post.id,
        caption: post.caption || '',
        media_url: post.media_url,
        permalink: post.permalink,
        timestamp: post.timestamp
      })) || [];

    return NextResponse.json({
      posts: imagePosts.length > 0 ? imagePosts : DUMMY_POSTS
    });
  } catch (error) {
    console.error('Error fetching Instagram feed:', error);
    // Return dummy data on error
    return NextResponse.json({
      posts: DUMMY_POSTS
    });
  }
}
