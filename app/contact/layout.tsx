import type { Metadata } from 'next';

const description =
  'Schedule a private tour of Riviera Waterfront Mansion, a high-end waterfront wedding venue on Long Island in Massapequa, NY. Tuesday through Sunday, 11 a.m. to 7 p.m. Call (516) 541 5020.';

export const metadata: Metadata = {
  title: 'Schedule a Tour | Riviera Waterfront Mansion Long Island',
  description,
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/contact'
  },
  openGraph: {
    title: 'Contact & Schedule Tour | Riviera Waterfront Mansion',
    description,
    url: 'https://www.rivierawaterfrontmansion.com/contact',
    siteName: 'Riviera Waterfront Mansion',
    images: [
      {
        url: 'https://www.rivierawaterfrontmansion.com/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Riviera Waterfront Mansion Long Island wedding venue'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact & Schedule Tour | Riviera Waterfront Mansion',
    description,
    images: ['https://www.rivierawaterfrontmansion.com/og-contact.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
