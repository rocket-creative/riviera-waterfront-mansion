import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Fall Bridal Showcase | Riviera Waterfront Mansion',
  robots: { index: false, follow: false },
};

export default function SpringBridalShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  void children;
  redirect('/fall-bridal-showcase');
}
