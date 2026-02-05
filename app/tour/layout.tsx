import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Virtual Tour | Long Island Waterfront Wedding Venue | Riviera Waterfront Mansion',
  description: 'Take a virtual tour of Riviera Waterfront Mansion in Massapequa, NY. Explore our grand entrance, bridal suite, ceremony spaces, cocktail areas, grand ballroom, and stunning waterfront views. See why couples choose our historic Long Island wedding venue.',
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/tour'
  },
  openGraph: {
    title: 'Virtual Tour | Riviera Waterfront Mansion Long Island',
    description: 'Explore every corner of our stunning Massapequa waterfront wedding venue. Virtual tour of ceremony spaces, grand ballroom, bridal suite, and more.',
    url: 'https://www.rivierawaterfrontmansion.com/tour',
    siteName: 'Riviera Waterfront Mansion',
    images: [
      {
        url: 'https://www.rivierawaterfrontmansion.com/og-tour.jpg',
        width: 1200,
        height: 630,
        alt: 'Virtual tour of Riviera Waterfront Mansion Long Island wedding venue'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virtual Tour | Riviera Waterfront Mansion',
    description: 'Explore our stunning Long Island waterfront wedding venue with our virtual tour. See ceremony spaces, grand ballroom, and more.',
    images: ['https://www.rivierawaterfrontmansion.com/og-tour.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
