import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 600; // Cache for 10 minutes

// Dummy TikTok videos for testing and fallback
const DUMMY_VIDEOS = [
  {
    id: 'tiktok_001',
    caption: 'POV: You\'re getting married at the most stunning waterfront venue on Long Island 💍✨',
    thumbnail_url: '/optimized/venue-aerial-1.jpg',
    video_url: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    permalink: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    timestamp: new Date().toISOString(),
    views: '12.5K'
  },
  {
    id: 'tiktok_002',
    caption: 'Venue tour part 1: The Grand Entrance 🎥 #wedding #weddingvenue #longisland',
    thumbnail_url: '/optimized/entrance-grand-1.jpg',
    video_url: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    permalink: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    timestamp: new Date(Date.now() - 86400000).toISOString(),
    views: '8.2K'
  },
  {
    id: 'tiktok_003',
    caption: 'When the golden hour hits different at your wedding 🌅 #goldenhour #weddinggoals',
    thumbnail_url: '/optimized/ceremony-sunset-1.jpg',
    video_url: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    permalink: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    timestamp: new Date(Date.now() - 172800000).toISOString(),
    views: '45.3K'
  },
  {
    id: 'tiktok_004',
    caption: 'This is why couples choose waterfront weddings 💙 #waterfrontwedding #dreamwedding',
    thumbnail_url: '/optimized/waterfront-view-1.jpg',
    video_url: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    permalink: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    timestamp: new Date(Date.now() - 259200000).toISOString(),
    views: '23.7K'
  },
  {
    id: 'tiktok_005',
    caption: 'The bridal suite reveal everyone asks for 👰 #bridalsuite #weddingday',
    thumbnail_url: '/optimized/bridal-suite-2.jpg',
    video_url: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    permalink: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    timestamp: new Date(Date.now() - 345600000).toISOString(),
    views: '19.1K'
  },
  {
    id: 'tiktok_006',
    caption: 'Setting up for today\'s ceremony like... ⚡ #weddingsetup #behindthescenes',
    thumbnail_url: '/optimized/setup-timelapse-1.jpg',
    video_url: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    permalink: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    timestamp: new Date(Date.now() - 432000000).toISOString(),
    views: '31.8K'
  },
  {
    id: 'tiktok_007',
    caption: 'That first dance energy 🕺💃 #firstdance #weddingvibes #celebration',
    thumbnail_url: '/optimized/first-dance-1.jpg',
    video_url: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    permalink: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    timestamp: new Date(Date.now() - 518400000).toISOString(),
    views: '56.2K'
  },
  {
    id: 'tiktok_008',
    caption: 'The venue transformation is INSANE 😱 Day to night magic ✨',
    thumbnail_url: '/optimized/venue-transformation-1.jpg',
    video_url: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    permalink: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    timestamp: new Date(Date.now() - 604800000).toISOString(),
    views: '67.4K'
  },
  {
    id: 'tiktok_009',
    caption: 'Cocktail hour hits different when you have THIS view 🍹 #cocktailhour',
    thumbnail_url: '/optimized/cocktail-outdoor-1.jpg',
    video_url: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    permalink: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    timestamp: new Date(Date.now() - 691200000).toISOString(),
    views: '14.9K'
  },
  {
    id: 'tiktok_010',
    caption: '75+ years of wedding perfection 👑 Family owned since 1947 #longislandwedding',
    thumbnail_url: '/optimized/venue-historic-1.jpg',
    video_url: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    permalink: 'https://www.tiktok.com/@rivierawaterfrontmansion',
    timestamp: new Date(Date.now() - 777600000).toISOString(),
    views: '28.3K'
  }
];

export async function GET() {
  try {
    const accessToken = process.env.TIKTOK_ACCESS_TOKEN;

    // If no access token, return dummy data
    if (!accessToken) {
      console.log('Using dummy TikTok data');
      return NextResponse.json({
        videos: DUMMY_VIDEOS
      });
    }

    // TikTok API integration would go here
    // Note: TikTok's API requires business account and approval
    // For now, we'll use dummy data as the primary content
    
    return NextResponse.json({
      videos: DUMMY_VIDEOS
    });
  } catch (error) {
    console.error('Error fetching TikTok feed:', error);
    return NextResponse.json({
      videos: DUMMY_VIDEOS
    });
  }
}
