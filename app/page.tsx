import Header from './components/Header';
import Footer from './components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      
      <main id="main">
        {/* Hero Section */}
        <section className="relative h-[70vh] md:h-[80vh] bg-riviera-neutral">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wider text-white mb-6">
                STUNNING WATERFRONT
                <span className="block text-riviera-gold mt-2">WEDDING VENUE</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 mb-8 max-w-2xl mx-auto">
                New York's premiere location for unforgettable celebrations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/tour"
                  className="bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-white hover:text-riviera-gold transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
                >
                  TAKE A TOUR →
                </Link>
                <Link 
                  href="/contact"
                  className="bg-white text-riviera-text px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-gold hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
                >
                  BOOK A VISIT
                </Link>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <a 
              href="#about" 
              className="text-white text-xs tracking-widest flex flex-col items-center gap-2 hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold"
              aria-label="Scroll to learn more"
            >
              <span>VIEW MORE</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-riviera-text mb-6">
                  Celebrating 100 years of wedding excellence
                </h2>
                <p className="text-base md:text-lg font-light text-riviera-text/80 leading-relaxed mb-6">
                  Third generation, family owned and operated since 1947. The Riviera Waterfront Mansion is the only venue in New York held and run by the same family for over 75 years.
                </p>
                <p className="text-base md:text-lg font-light text-riviera-text/80 leading-relaxed mb-8">
                  Our waterfront mansion is kept in pristine condition with updates and renovations throughout our tenure, making this a genuinely one of a kind modern yet classic destination wedding venue.
                </p>
                <Link 
                  href="/contact"
                  className="inline-block bg-riviera-gold text-white px-8 py-3 text-sm font-light tracking-widest hover:bg-riviera-brown transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
                >
                  DOWNLOAD BROCHURE →
                </Link>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <div className="absolute inset-0 bg-riviera-neutral" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-riviera-neutral py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-4">
                We set the standards for all to follow
              </h2>
              <p className="text-lg font-light text-riviera-text/70">
                One of a kind, historic, waterfront banquet caterer
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-light text-riviera-gold mb-4">350</div>
                <h3 className="text-sm tracking-widest text-riviera-text mb-2">CAPACITY</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Spacious venue accommodating up to 350 guests
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-light text-riviera-gold mb-4">1</div>
                <h3 className="text-sm tracking-widest text-riviera-text mb-2">EXCLUSIVE</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  One event at a time, your day is exclusively yours
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-light text-riviera-gold mb-4">75+</div>
                <h3 className="text-sm tracking-widest text-riviera-text mb-2">YEARS</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Three generations of wedding excellence
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Venue Highlights */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-12 text-center">
              Long Island's premiere wedding venue
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-riviera-neutral p-6">
                <h3 className="text-sm tracking-widest text-riviera-text mb-3">OUTDOOR CEREMONY</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Waterfront ceremony area with stunning views
                </p>
              </div>
              
              <div className="border border-riviera-neutral p-6">
                <h3 className="text-sm tracking-widest text-riviera-text mb-3">INDOOR CEREMONY</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Elegant indoor ceremony space available
                </p>
              </div>
              
              <div className="border border-riviera-neutral p-6">
                <h3 className="text-sm tracking-widest text-riviera-text mb-3">COCKTAIL HOUR</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Indoor and outdoor waterfront cocktail areas
                </p>
              </div>
              
              <div className="border border-riviera-neutral p-6">
                <h3 className="text-sm tracking-widest text-riviera-text mb-3">GRAND BALLROOM</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Indoor waterfront grand ballroom with dance floor
                </p>
              </div>
              
              <div className="border border-riviera-neutral p-6">
                <h3 className="text-sm tracking-widest text-riviera-text mb-3">BRIDAL SUITE</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Private wedding party suite with restroom
                </p>
              </div>
              
              <div className="border border-riviera-neutral p-6">
                <h3 className="text-sm tracking-widest text-riviera-text mb-3">TOP SHELF BAR</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Indoor and outdoor full service bars
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-riviera-brown py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-12 text-center">
              What couples are saying
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 backdrop-blur-sm">
                <p className="text-sm font-light leading-relaxed mb-4">
                  "Thank you so much for all the hard work and assistance that you provided us! Your team helped make our day special, smooth & forever memorable! Specifically Tara & Irene were Fantastic!! Thank you!"
                </p>
                <p className="text-xs tracking-wider text-riviera-gold">— TIANA & ERIC, NEW YORK</p>
              </div>

              <div className="bg-white/10 p-6 backdrop-blur-sm">
                <p className="text-sm font-light leading-relaxed mb-4">
                  "Our guests raved about the service, the food (especially the duck and roast suckling pig!), the view of the water, and the beautiful ballroom! My husband and I wanted to include Filipino traditions in our ceremony, and they were happy to work with us!"
                </p>
                <p className="text-xs tracking-wider text-riviera-gold">— FRANCIELLE S, NEW YORK</p>
              </div>

              <div className="bg-white/10 p-6 backdrop-blur-sm">
                <p className="text-sm font-light leading-relaxed mb-4">
                  "I wish there were 10 stars to give because that is truly what this venue deserves. From the fantastic views, to the breathtaking bridal suite I was completely blown away. Very professional, easily contacted, guests still raving about the food."
                </p>
                <p className="text-xs tracking-wider text-riviera-gold">— CAROLINE W, NEW YORK</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-riviera-text mb-6">
              Ready to start planning your dream wedding?
            </h2>
            <p className="text-lg font-light text-riviera-text/70 mb-8">
              Schedule a tour of our waterfront mansion and experience the magic yourself
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-brown transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
              >
                SCHEDULE A VISIT →
              </Link>
              <a 
                href="tel:+15165415020"
                className="border-2 border-riviera-gold text-riviera-gold px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-gold hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
              >
                CALL (516) 541 5020
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://www.rivierawaterfrontmansion.com/#organization',
            name: 'Riviera Waterfront Mansion',
            url: 'https://www.rivierawaterfrontmansion.com',
            logo: 'https://www.rivierawaterfrontmansion.com/logo.png',
            image: 'https://www.rivierawaterfrontmansion.com/og-image.jpg',
            description: 'Premier waterfront wedding venue in Massapequa, NY. Third generation family owned since 1947.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '200 E Shore Dr',
              addressLocality: 'Massapequa',
              addressRegion: 'NY',
              postalCode: '11758',
              addressCountry: 'US'
            },
            telephone: '+15165415020',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '11:00',
                closes: '19:00'
              }
            ],
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 40.6644,
              longitude: -73.4711
            },
            priceRange: '$$$',
            servesCuisine: 'Continental'
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Riviera Waterfront Mansion',
            url: 'https://www.rivierawaterfrontmansion.com'
          })
        }}
      />
    </>
  );
}
