import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spring Bridal Showcase | Riviera Waterfront Mansion',
  description: 'Join us for our Spring Bridal Showcase on April 22, 6–9 PM. Free admission. Explore wedding trends, meet top vendors, and tour Long Island\'s premier waterfront wedding venue.',
  robots: { index: false, follow: false },
};

export default function SpringBridalShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
