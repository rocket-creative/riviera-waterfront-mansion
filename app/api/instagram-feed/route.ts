import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 600; // Cache for 10 minutes

// Placeholder Instagram posts using real venue images
// These display while waiting for live API connection
const PLACEHOLDER_POSTS = [
  {
    id: 'inst_001',
    caption: 'Stunning waterfront ceremony at golden hour. Another perfect day at Riviera! #RivieraWedding #WaterfrontWedding #LongIslandWedding',
    media_url: '/images/medium/_0359652-by-p.jpg',
    permalink: 'https://www.instagram.com/rivierawaterfrontmansion/',
    timestamp: new Date().toISOString()
  },
  {
    id: 'inst_002',
    caption: 'The grand ballroom transformation is complete. Ready for tonight\'s celebration! #WeddingVenue #BallroomWedding #ElegantWedding',
    media_url: '/images/medium/_DSC5114aa-port-2.jpg',
    permalink: 'https://www.instagram.com/rivierawaterfrontmansion/',
    timestamp: new Date(Date.now() - 86400000).toISOString()
  },
  {
    id: 'inst_003',
    caption: 'Our gorgeous bridal suite with those dreamy waterfront views. #BridalSuite #WeddingPrep #GettingReady',
    media_url: '/images/medium/_DSC5139aa-port-2.jpg',
    permalink: 'https://www.instagram.com/rivierawaterfrontmansion/',
    timestamp: new Date(Date.now() - 172800000).toISOString()
  },
  {
    id: 'inst_004',
    caption: 'Cocktail hour perfection! Indoor and outdoor spaces flowing seamlessly #CocktailHour #WeddingReception #Celebrations',
    media_url: '/images/medium/_DSC4964cb-p.jpg',
    permalink: 'https://www.instagram.com/rivierawaterfrontmansion/',
    timestamp: new Date(Date.now() - 259200000).toISOString()
  },
  {
    id: 'inst_005',
    caption: 'That first dance moment. Magic happens here every weekend #FirstDance #WeddingReception #NewlyWeds',
    media_url: '/images/medium/_50M1318-jj-p.jpg',
    permalink: 'https://www.instagram.com/rivierawaterfrontmansion/',
    timestamp: new Date(Date.now() - 345600000).toISOString()
  },
  {
    id: 'inst_006',
    caption: 'Table settings on point. Every detail matters at Riviera #WeddingDecor #TableSettings #ReceptionDetails',
    media_url: '/images/medium/_DSC8820sa-p.jpg',
    permalink: 'https://www.instagram.com/rivierawaterfrontmansion/',
    timestamp: new Date(Date.now() - 432000000).toISOString()
  },
  {
    id: 'inst_007',
    caption: 'The venue at dusk is absolutely magical. #NightWedding #VenueVibes #WaterfrontMagic',
    media_url: '/images/medium/_DSC8849sa-p.jpg',
    permalink: 'https://www.instagram.com/rivierawaterfrontmansion/',
    timestamp: new Date(Date.now() - 518400000).toISOString()
  },
  {
    id: 'inst_008',
    caption: 'Behind the scenes: Our team setting up for today\'s ceremony #WeddingSetup #BehindTheScenes #EventPlanning',
    media_url: '/images/medium/_0359665-by-p.jpg',
    permalink: 'https://www.instagram.com/rivierawaterfrontmansion/',
    timestamp: new Date(Date.now() - 604800000).toISOString()
  },
  {
    id: 'inst_009',
    caption: 'Outdoor ceremony with water views never gets old. #OutdoorWedding #CeremonyViews #DreamWedding',
    media_url: '/images/medium/_DSC4629cb-p.jpg',
    permalink: 'https://www.instagram.com/rivierawaterfrontmansion/',
    timestamp: new Date(Date.now() - 691200000).toISOString()
  },
  {
    id: 'inst_010',
    caption: 'Cheers to another beautiful celebration! #WeddingToast #Celebration #RivieraLove',
    media_url: '/images/medium/_50M1265-jj-p.jpg',
    permalink: 'https://www.instagram.com/rivierawaterfrontmansion/',
    timestamp: new Date(Date.now() - 777600000).toISOString()
  }
];

export async function GET() {
  try {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    // If no access token, return placeholder data with real venue images
    if (!accessToken) {
      console.log('Instagram: Using placeholder data (add INSTAGRAM_ACCESS_TOKEN for live feed)');
      return NextResponse.json({
        posts: PLACEHOLDER_POSTS,
        source: 'placeholder'
      });
    }

    // Fetch from Instagram Basic Display API
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp,media_type&access_token=${accessToken}&limit=12`;

    const response = await fetch(url, {
      next: { revalidate: 600 }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Instagram API error:', errorText);
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
      posts: imagePosts.length > 0 ? imagePosts : PLACEHOLDER_POSTS,
      source: imagePosts.length > 0 ? 'live' : 'placeholder'
    });
  } catch (error) {
    console.error('Error fetching Instagram feed:', error);
    // Return placeholder data on error
    return NextResponse.json({
      posts: PLACEHOLDER_POSTS,
      source: 'placeholder',
      error: 'API connection failed'
    });
  }
}
