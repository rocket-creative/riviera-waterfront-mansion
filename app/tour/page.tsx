import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getTourPreview } from '../lib/imageConfig';

export const metadata: Metadata = {
  title: 'Long Island Wedding Venue Virtual Tour | Riviera Waterfront Mansion Massapequa NY',
  description: 'Take a virtual tour of Riviera Waterfront Mansion in Massapequa NY. Explore our grand waterfront ballroom, luxurious bridal suite, indoor and outdoor ceremony areas, cocktail spaces, and stunning Long Island wedding photography locations.',
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/tour'
  },
  openGraph: {
    title: 'Virtual Tour of Long Island Wedding Venue | Riviera Waterfront Mansion',
    description: 'Explore our stunning Massapequa waterfront wedding venue with our comprehensive virtual tour',
    url: 'https://www.rivierawaterfrontmansion.com/tour',
  },
};

const tourSections = [
  { title: 'Entrance Lobby', slug: 'entrance-lobby', description: 'Grand entrance with elegant architectural details' },
  { title: 'Bridal Suite', slug: 'bridal-suite', description: 'Private luxury preparation space for wedding party' },
  { title: 'Indoor Ceremony Space', slug: 'indoor-ceremony', description: 'Elegant indoor Long Island wedding ceremony space' },
  { title: 'Outdoor Waterfront Ceremony', slug: 'outdoor-ceremony', description: 'Massapequa waterfront ceremony with stunning sunset views' },
  { title: 'Indoor Cocktail Hour', slug: 'indoor-cocktail', description: 'Sophisticated indoor cocktail space with waterfront views' },
  { title: 'Outdoor Cocktail Hour', slug: 'outdoor-cocktail', description: 'Waterfront cocktail area overlooking the water' },
  { title: 'Grand Ballroom', slug: 'main-ballroom', description: 'Grand reception ballroom with waterfront views' },
  { title: 'Bride & Groom Table', slug: 'sweetheart-table', description: 'Elegant head table setting for the couple' },
  { title: 'Guest Reception Seating', slug: 'guest-seating', description: 'Beautiful Long Island wedding reception seating' },
  { title: 'Spacious Dancefloor', slug: 'dancefloor', description: 'Spacious dance floor for your celebration' },
  { title: 'Entertainment Setup Area', slug: 'entertainment', description: 'Professional DJ and live band entertainment space' },
  { title: 'Top Shelf Bar', slug: 'main-bar', description: 'Full service top shelf bar area' },
  { title: 'Waterfront Balconies', slug: 'balconies', description: 'Overlooking the dance floor and Massapequa waterfront' },
  { title: 'Wedding Photo Locations', slug: 'photo-locations', description: 'Stunning Long Island wedding photography spots throughout venue' },
];

export default function TourPage() {
  return (
    <>
      <Header />
      
      <main id="main">
        {/* Hero Section */}
        <section className="bg-riviera-neutral py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-riviera-text mb-6">
              Virtual tour of our Long Island waterfront wedding venue
            </h1>
            <p className="text-lg md:text-xl font-light text-riviera-text/70 max-w-2xl mx-auto">
              Explore every corner of our stunning Massapequa waterfront mansion from the grand entrance to the elegant reception spaces. Discover why couples choose Riviera for their Long Island wedding.
            </p>
          </div>
        </section>

        {/* Tour Grid - Photography First Gallery */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tourSections.map((section) => (
                <Link
                  key={section.slug}
                  href={`/tour/${section.slug}`}
                  className="group relative overflow-hidden h-64 focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
                >
                  {/* Photo does the heavy lifting */}
                  <Image 
                    src={getTourPreview(section.slug)}
                    alt={`${section.title} at Riviera Waterfront Mansion Long Island wedding venue in Massapequa, NY`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h2 className="font-cormorant text-xl font-light tracking-wide text-white mb-2 group-hover:text-riviera-gold transition-colors">
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
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 text-center text-white bg-riviera-dark-brown">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide mb-6">
              Experience our Long Island waterfront wedding venue in person
            </h2>
            <p className="text-lg font-light mb-8 opacity-90">
              Nothing compares to seeing our historic Massapequa waterfront mansion yourself. Schedule a private tour of Riviera Waterfront Mansion today and discover why we are Long Island's premiere wedding venue.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-white hover:text-riviera-text transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-riviera-dark-brown"
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
