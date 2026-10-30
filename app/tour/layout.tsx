import type { Metadata } from 'next';

const description =
  'Tour a high-end waterfront wedding mansion on Long Island. Bridal suite, indoor and outdoor ceremonies on the water, cocktail spaces, and grand ballroom in Massapequa, NY.';

export const metadata: Metadata = {
  title: 'Virtual Venue Tour | Riviera Waterfront Mansion Long Island',
  description,
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/tour'
  },
  openGraph: {
    title: 'Virtual Tour | Riviera Waterfront Mansion Long Island',
    description,
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
    description,
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
