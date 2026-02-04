import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Riviera Waterfront Mansion',
  description: 'Schedule a tour of our waterfront wedding venue. Located in Massapequa, NY. Call (516) 541 5020 or send us a message.',
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/contact'
  },
  openGraph: {
    title: 'Contact Us | Riviera Waterfront Mansion',
    description: 'Schedule a tour of our waterfront wedding venue in Massapequa, NY',
    url: 'https://www.rivierawaterfrontmansion.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
