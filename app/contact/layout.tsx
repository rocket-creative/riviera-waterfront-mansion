import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Schedule Tour | Long Island Wedding Venue | Riviera Waterfront Mansion',
  description: 'Schedule a private tour of Riviera Waterfront Mansion in Massapequa, NY. Check wedding date availability for 2026 and 2027. Call 516 541 5020, email appointments@rivierawaterfrontmansion.com, or submit an online inquiry. Open Tuesday to Sunday with personalized consultations.',
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/contact'
  },
  openGraph: {
    title: 'Contact & Schedule Tour | Riviera Waterfront Mansion',
    description: 'Schedule a private tour of our Long Island waterfront wedding venue in Massapequa, NY. Check date availability and plan your dream wedding.',
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
    description: 'Schedule a private tour of our Massapequa waterfront wedding venue. Check date availability for your Long Island wedding.',
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
