import Header from '../components/Header';
import Footer from '../components/Footer';
import BrochureFormEmbed from '../components/BrochureFormEmbed';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Brochure | Riviera Waterfront Mansion Massapequa NY',
  description: 'Request the Riviera Waterfront Mansion wedding brochure. Get detailed information about our Massapequa waterfront venue, Long Island wedding packages, menu options, and more.',
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/wedding-brochure'
  },
  openGraph: {
    title: 'Wedding Brochure | Riviera Waterfront Mansion',
    description: 'Request the Riviera Waterfront Mansion wedding brochure for Long Island wedding venue details, packages, and more.',
    url: 'https://www.rivierawaterfrontmansion.com/wedding-brochure',
  },
};

export default function WeddingBrochurePage() {
  return (
    <>
      <Header />

      <main id="main">
        {/* Split layout: image left, form right */}
        <section className="min-h-[calc(100vh-80px)] grid md:grid-cols-2">

          {/* Left — Brochure cover image */}
          <div className="relative min-h-[50vh] md:min-h-0">
            <Image
              src="/brochure-cover.png"
              alt="Riviera Waterfront Mansion Wedding Brochure — Long Island wedding venue in Massapequa, NY"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              quality={90}
            />
          </div>

          {/* Right — Form gate */}
          <div className="flex flex-col justify-center px-8 py-16 md:px-12 lg:px-16 bg-white">
            <div className="max-w-md w-full mx-auto">
              <p className="text-sm tracking-widest text-riviera-gold mb-4">WEDDING BROCHURE</p>
              <h1 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-riviera-text mb-4 leading-tight">
                Everything you need to plan your perfect Long Island wedding
              </h1>
              <p className="text-base font-light text-riviera-text/70 leading-relaxed mb-8">
                Complete the form to receive our comprehensive wedding brochure covering our Massapequa waterfront venue, packages, catering, and availability.
              </p>

              <BrochureFormEmbed />

              <p className="mt-6 text-xs font-light text-riviera-text/40 leading-relaxed">
                Prefer to speak with someone? Call us at{' '}
                <a
                  href="tel:+15165415020"
                  className="text-riviera-gold hover:underline focus:outline-none focus:ring-2 focus:ring-riviera-gold"
                >
                  (516) 541 5020
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* JSON-LD Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.rivierawaterfrontmansion.com'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Wedding Brochure',
                item: 'https://www.rivierawaterfrontmansion.com/wedding-brochure'
              }
            ]
          })
        }}
      />
    </>
  );
}
