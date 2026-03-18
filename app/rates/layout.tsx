import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Rates & Availability | Riviera Waterfront Mansion',
  description: 'Wedding pricing and availability at Riviera Waterfront Mansion in Massapequa, NY. Packages include ceremony, cocktail hour, plated dinner, and five hour open bar. Contact us for a personalized proposal.',
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/rates',
  },
  openGraph: {
    title: 'Wedding Rates & Availability | Riviera Waterfront Mansion',
    description: 'Wedding pricing and availability at our Massapequa waterfront venue. Packages include ceremony, cocktail hour, plated dinner, and five hour open bar.',
    url: 'https://www.rivierawaterfrontmansion.com/rates',
    siteName: 'Riviera Waterfront Mansion',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.rivierawaterfrontmansion.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Riviera Waterfront Mansion Long Island wedding venue rates and availability',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Rates & Availability | Riviera Waterfront Mansion',
    description: 'Wedding pricing and availability at our Massapequa waterfront venue. Packages include ceremony, cocktail hour, plated dinner, and five hour open bar.',
    images: ['https://www.rivierawaterfrontmansion.com/og-image.jpg'],
  },
};

export default function RatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
