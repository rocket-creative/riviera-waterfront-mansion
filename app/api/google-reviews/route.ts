import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 300; // Cache for 5 minutes

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      return NextResponse.json(
        { error: 'Missing API configuration' },
        { status: 500 }
      );
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;

    const response = await fetch(url, {
      next: { revalidate: 300 }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch from Google Places API');
    }

    const data = await response.json();

    if (data.status !== 'OK') {
      throw new Error(`Google Places API error: ${data.status}`);
    }

    const reviews = data.result?.reviews || [];
    
    // Sort by most recent and take top reviews
    const sortedReviews = reviews
      .sort((a: any, b: any) => b.time - a.time)
      .map((review: any) => ({
        author: review.author_name,
        rating: review.rating,
        text: review.text,
        time: review.time
      }));

    return NextResponse.json({
      reviews: sortedReviews,
      overall_rating: data.result?.rating,
      total_ratings: data.result?.user_ratings_total
    });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews', reviews: [] },
      { status: 500 }
    );
  }
}
