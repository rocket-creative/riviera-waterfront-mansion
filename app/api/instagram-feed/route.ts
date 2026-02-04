import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 600; // Cache for 10 minutes

export async function GET() {
  try {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Missing Instagram configuration' },
        { status: 500 }
      );
    }

    // Instagram Basic Display API
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp&access_token=${accessToken}`;

    const response = await fetch(url, {
      next: { revalidate: 600 }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch from Instagram API');
    }

    const data = await response.json();

    return NextResponse.json({
      posts: data.data || []
    });
  } catch (error) {
    console.error('Error fetching Instagram feed:', error);
    return NextResponse.json(
      { error: 'Failed to fetch feed', posts: [] },
      { status: 500 }
    );
  }
}
