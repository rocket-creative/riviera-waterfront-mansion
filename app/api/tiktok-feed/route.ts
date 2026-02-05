import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 600; // Cache for 10 minutes

// Placeholder TikTok videos using real venue images
// These display while waiting for live API connection
const PLACEHOLDER_VIDEOS = [
  {
    id: 'tiktok_001',
    caption: 'POV: You\'re getting married at the most stunning waterfront venue on Long Island #RivieraWedding',
    thumbnail_url: '/optimized/medium/_24m3717-sm-r 2.jpg',
    video_url: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    permalink: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    timestamp: new Date().toISOString(),
    views: '12.5K'
  },
  {
    id: 'tiktok_002',
    caption: 'Venue tour part 1: The Grand Entrance #wedding #weddingvenue #longisland',
    thumbnail_url: '/optimized/medium/_0350469-by-d.jpg',
    video_url: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    permalink: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    timestamp: new Date(Date.now() - 86400000).toISOString(),
    views: '8.2K'
  },
  {
    id: 'tiktok_003',
    caption: 'When the golden hour hits different at your wedding #goldenhour #weddinggoals',
    thumbnail_url: '/optimized/medium/_24m3871-sm-r 3.jpg',
    video_url: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    permalink: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    timestamp: new Date(Date.now() - 172800000).toISOString(),
    views: '45.3K'
  },
  {
    id: 'tiktok_004',
    caption: 'This is why couples choose waterfront weddings #waterfrontwedding #dreamwedding',
    thumbnail_url: '/optimized/medium/l1020458-by-2nd.jpg',
    video_url: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    permalink: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    timestamp: new Date(Date.now() - 259200000).toISOString(),
    views: '23.7K'
  },
  {
    id: 'tiktok_005',
    caption: 'The bridal suite reveal everyone asks for #bridalsuite #weddingday',
    thumbnail_url: '/optimized/medium/_1058675-by-d 7.jpg',
    video_url: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    permalink: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    timestamp: new Date(Date.now() - 345600000).toISOString(),
    views: '19.1K'
  },
  {
    id: 'tiktok_006',
    caption: 'Setting up for today\'s ceremony #weddingsetup #behindthescenes',
    thumbnail_url: '/optimized/medium/_col4956-sm-2nd.jpg',
    video_url: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    permalink: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    timestamp: new Date(Date.now() - 432000000).toISOString(),
    views: '31.8K'
  },
  {
    id: 'tiktok_007',
    caption: 'That first dance energy #firstdance #weddingvibes #celebration',
    thumbnail_url: '/optimized/medium/_2007713-jd-d 4.jpg',
    video_url: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    permalink: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    timestamp: new Date(Date.now() - 518400000).toISOString(),
    views: '56.2K'
  },
  {
    id: 'tiktok_008',
    caption: 'The venue transformation is INSANE. Day to night magic!',
    thumbnail_url: '/optimized/medium/_col8940-jb-25-2nd 4.jpg',
    video_url: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    permalink: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    timestamp: new Date(Date.now() - 604800000).toISOString(),
    views: '67.4K'
  },
  {
    id: 'tiktok_009',
    caption: 'Cocktail hour hits different when you have THIS view #cocktailhour',
    thumbnail_url: '/optimized/medium/_col9407-jb-25-2nd 3.jpg',
    video_url: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    permalink: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    timestamp: new Date(Date.now() - 691200000).toISOString(),
    views: '14.9K'
  },
  {
    id: 'tiktok_010',
    caption: '75+ years of wedding perfection. Family owned since 1947 #longislandwedding',
    thumbnail_url: '/optimized/medium/_col7435-tc-2nd.jpg',
    video_url: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    permalink: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    timestamp: new Date(Date.now() - 777600000).toISOString(),
    views: '28.3K'
  }
];

export async function GET() {
  try {
    const accessToken = process.env.TIKTOK_ACCESS_TOKEN;

    // If no access token, return placeholder data with real venue images
    if (!accessToken) {
      console.log('TikTok: Using placeholder data (add TIKTOK_ACCESS_TOKEN for live feed)');
      return NextResponse.json({
        videos: PLACEHOLDER_VIDEOS,
        source: 'placeholder'
      });
    }

    // TikTok Display API integration
    // Note: Requires TikTok Business account and API approval
    // See: https://developers.tiktok.com/doc/display-api-get-started
    const url = `https://open.tiktokapis.com/v2/video/list/?fields=id,title,video_description,duration,cover_image_url,share_url,create_time,view_count`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      next: { revalidate: 600 }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('TikTok API error:', errorText);
      throw new Error('Failed to fetch from TikTok API');
    }

    const data = await response.json();

    const videos = data.data?.videos?.map((video: any) => ({
      id: video.id,
      caption: video.video_description || video.title || '',
      thumbnail_url: video.cover_image_url,
      video_url: video.share_url,
      permalink: video.share_url,
      timestamp: new Date(video.create_time * 1000).toISOString(),
      views: formatViews(video.view_count)
    })) || [];

    return NextResponse.json({
      videos: videos.length > 0 ? videos : PLACEHOLDER_VIDEOS,
      source: videos.length > 0 ? 'live' : 'placeholder'
    });
  } catch (error) {
    console.error('Error fetching TikTok feed:', error);
    return NextResponse.json({
      videos: PLACEHOLDER_VIDEOS,
      source: 'placeholder',
      error: 'API connection failed'
    });
  }
}

// Format view count for display
function formatViews(count: number): string {
  if (!count) return '';
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
  return count.toString();
}
