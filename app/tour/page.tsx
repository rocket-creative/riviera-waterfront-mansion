import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Virtual Venue Tour | Riviera Waterfront Mansion',
  description: 'Take a virtual tour of Riviera Waterfront Mansion. Explore our grand ballroom, bridal suite, waterfront ceremony areas, and stunning photo locations.',
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/tour'
  },
  openGraph: {
    title: 'Virtual Venue Tour | Riviera Waterfront Mansion',
    description: 'Explore our stunning waterfront venue with our virtual tour',
    url: 'https://www.rivierawaterfrontmansion.com/tour',
  },
};

const tourSections = [
  { title: 'Entrance Lobby', slug: 'entrance-lobby', description: 'Grand entrance with elegant details' },
  { title: 'Bridal Suite', slug: 'bridal-suite', description: 'Private preparation space for the wedding party' },
  { title: 'Indoor Ceremony', slug: 'indoor-ceremony', description: 'Elegant indoor ceremony space' },
  { title: 'Outdoor Ceremony', slug: 'outdoor-ceremony', description: 'Waterfront ceremony with stunning views' },
  { title: 'Indoor Cocktail Hour', slug: 'indoor-cocktail', description: 'Sophisticated indoor cocktail space' },
  { title: 'Outdoor Cocktail Hour', slug: 'outdoor-cocktail', description: 'Waterfront cocktail area' },
  { title: 'Main Ballroom', slug: 'main-ballroom', description: 'Grand ballroom with waterfront views' },
  { title: 'Bride & Groom Table', slug: 'sweetheart-table', description: 'Elegant head table setting' },
  { title: 'Main Guest Seating', slug: 'guest-seating', description: 'Beautiful reception seating' },
  { title: 'Dancefloor', slug: 'dancefloor', description: 'Spacious dance floor' },
  { title: 'DJ & Band Setup', slug: 'entertainment', description: 'Professional entertainment space' },
  { title: 'Main Bar', slug: 'main-bar', description: 'Full service bar area' },
  { title: 'Balconies', slug: 'balconies', description: 'Overlooking the dance floor and water' },
  { title: 'Photo Locations', slug: 'photo-locations', description: 'Stunning photography spots throughout' },
];

export default function TourPage() {
  return (
    <>
      <Header />
      
      <main id="main">
        {/* Hero Section */}
        <section className="bg-riviera-neutral py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-riviera-text mb-6">
              Virtual venue tour
            </h1>
            <p className="text-lg md:text-xl font-light text-riviera-text/70 max-w-2xl mx-auto">
              Explore every corner of our stunning waterfront mansion from the entrance to the reception
            </p>
          </div>
        </section>

        {/* Tour Grid */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tourSections.map((section) => (
                <Link
                  key={section.slug}
                  href={`/tour/${section.slug}`}
                  className="group relative overflow-hidden bg-riviera-neutral h-64 focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h2 className="text-xl font-light tracking-wide text-white mb-2 group-hover:text-riviera-gold transition-colors">
                      {section.title}
                    </h2>
                    <p className="text-sm font-light text-white/80">
                      {section.description}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <svg 
                      className="w-6 h-6 text-white group-hover:text-riviera-gold transition-colors transform group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-riviera-brown py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
              Experience it in person
            </h2>
            <p className="text-lg font-light mb-8 opacity-90">
              Nothing compares to seeing our waterfront mansion yourself. Schedule a private tour today.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-white hover:text-riviera-text transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-riviera-brown"
            >
              SCHEDULE A VISIT →
            </Link>
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
                name: 'Virtual Tour'
              }
            ]
          })
        }}
      />
    </>
  );
}
