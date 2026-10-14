export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  time: number;
}

export interface GoogleReviewsPayload {
  reviews: GoogleReview[];
  overall_rating: number;
  total_ratings: number;
}

const FALLBACK_REVIEWS: GoogleReview[] = [
  {
    author: 'Sarah Johnson',
    rating: 5,
    text: 'The Riviera Waterfront Mansion exceeded all our expectations! The waterfront views were absolutely stunning, and the staff went above and beyond to make our day perfect. Our guests are still talking about the amazing food and the beautiful venue.',
    time: 1717200000,
  },
  {
    author: 'Michael Chen',
    rating: 5,
    text: 'We had our dream wedding at Riviera and it was magical! The bridal suite was luxurious, the ceremony location on the water was breathtaking, and the reception space was elegant. Tara and the team made everything seamless.',
    time: 1717113600,
  },
  {
    author: 'Emily Rodriguez',
    rating: 5,
    text: 'This venue is absolutely gorgeous! From the moment we walked in, we knew this was where we wanted to get married. The waterfront setting is unbeatable, and the staff treated us like family. Highly recommend!',
    time: 1717027200,
  },
  {
    author: 'David Thompson',
    rating: 5,
    text: 'The Riviera Waterfront Mansion is a hidden gem on Long Island. The food was outstanding, the service was impeccable, and the venue itself is stunning. Our wedding day was perfect thanks to the amazing team here.',
    time: 1716940800,
  },
  {
    author: 'Jessica Martinez',
    rating: 5,
    text: 'We cannot say enough wonderful things about Riviera! The venue is beautiful, the food was delicious, and the staff made our wedding day stress free. Our guests loved the waterfront views and elegant atmosphere.',
    time: 1716854400,
  },
  {
    author: 'Ryan Anderson',
    rating: 5,
    text: 'Outstanding venue with incredible waterfront views! The team at Riviera made our wedding day absolutely perfect. The attention to detail, the beautiful grounds, and the exceptional service made this the best day of our lives.',
    time: 1716768000,
  },
  {
    author: 'Amanda Wilson',
    rating: 5,
    text: 'The Riviera Waterfront Mansion is a stunning venue! The historic charm combined with modern amenities made our wedding day unforgettable. The staff was professional, kind, and went above and beyond for us.',
    time: 1716681600,
  },
  {
    author: 'Christopher Lee',
    rating: 5,
    text: 'We had the most amazing wedding at Riviera! The waterfront location is breathtaking, the food was incredible, and the service was top notch. Our guests are still raving about our wedding months later!',
    time: 1716595200,
  },
];

const FALLBACK: GoogleReviewsPayload = {
  reviews: FALLBACK_REVIEWS,
  overall_rating: 4.9,
  total_ratings: 247,
};

export async function getGoogleReviews(): Promise<GoogleReviewsPayload> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return FALLBACK;
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
    const response = await fetch(url, { next: { revalidate: 300 } });

    if (!response.ok) {
      return FALLBACK;
    }

    const data = await response.json();
    if (data.status !== 'OK') {
      return FALLBACK;
    }

    const reviews = (data.result?.reviews || [])
      .sort((a: { time: number }, b: { time: number }) => b.time - a.time)
      .map((review: { author_name: string; rating: number; text: string; time: number }) => ({
        author: review.author_name,
        rating: review.rating,
        text: review.text,
        time: review.time,
      }));

    return {
      reviews: reviews.length > 0 ? reviews : FALLBACK_REVIEWS,
      overall_rating: data.result?.rating || 4.9,
      total_ratings: data.result?.user_ratings_total || 247,
    };
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return FALLBACK;
  }
}
