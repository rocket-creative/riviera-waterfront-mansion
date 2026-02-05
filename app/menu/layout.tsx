import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Menu & Catering | Long Island Continental Cuisine | Riviera Waterfront Mansion',
  description: 'Explore our chef inspired Continental wedding menu at Riviera Waterfront Mansion in Massapequa, NY. Five hour top shelf open bar, gourmet cocktail hour with hot and cold displays, carved meats, and plated dinner with four entree selections. Exceptional Long Island wedding catering since 1947.',
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/menu'
  },
  openGraph: {
    title: 'Wedding Menu & Catering | Riviera Waterfront Mansion',
    description: 'Chef inspired Continental wedding catering at our Long Island waterfront venue. Five hour top shelf bar, gourmet cocktail hour, and plated dinner with four entree selections.',
    url: 'https://www.rivierawaterfrontmansion.com/menu',
    siteName: 'Riviera Waterfront Mansion',
    images: [
      {
        url: 'https://www.rivierawaterfrontmansion.com/og-menu.jpg',
        width: 1200,
        height: 630,
        alt: 'Gourmet wedding catering at Riviera Waterfront Mansion Long Island'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Menu & Catering | Riviera Waterfront Mansion',
    description: 'Chef inspired Continental wedding catering at our Massapequa waterfront venue with five hour top shelf bar and gourmet selections.',
    images: ['https://www.rivierawaterfrontmansion.com/og-menu.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
