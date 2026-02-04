import Header from './components/Header';
import Footer from './components/Footer';
import GoogleReviews from './components/GoogleReviews';
import SocialFeed from './components/SocialFeed';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      
      <main id="main">
        {/* Hero Section - Immediate Hook */}
        <section className="relative h-[75vh] md:h-[85vh] bg-riviera-neutral">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-5xl">
              <p className="text-riviera-gold text-sm sm:text-base tracking-widest mb-4 font-light">
                LONG ISLAND'S PREMIERE WATERFRONT WEDDING VENUE IN MASSAPEQUA NY
              </p>
              <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-wider text-white mb-6 leading-tight">
                YOUR DREAM WEDDING
                <span className="block text-riviera-gold mt-2">DESERVES PERFECTION</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-light text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed">
                Three generations of wedding excellence on a stunning waterfront estate in Massapequa, Long Island. One wedding at a time. Your day, exclusively yours with complete venue access.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-riviera-gold text-white px-10 py-5 text-sm font-light tracking-widest hover:bg-white hover:text-riviera-text transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 shadow-lg"
                >
                  SCHEDULE YOUR VISIT →
                </Link>
                <Link 
                  href="/tour"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 text-sm font-light tracking-widest hover:bg-white hover:text-riviera-text transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  TAKE A VIRTUAL TOUR
                </Link>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <a 
              href="#trust-bar" 
              className="text-white text-xs tracking-widest flex flex-col items-center gap-2 hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold"
              aria-label="Scroll to learn more"
            >
              <span>DISCOVER MORE</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Trust Bar - Quick Stats */}
        <section id="trust-bar" className="bg-riviera-text py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl md:text-6xl font-light text-riviera-gold mb-3">75+</div>
                <h3 className="text-sm tracking-widest text-white mb-2">YEARS OF EXCELLENCE</h3>
                <p className="text-sm font-light text-white/70">
                  Third generation family owned since 1947
                </p>
              </div>
              
              <div>
                <div className="text-5xl md:text-6xl font-light text-riviera-gold mb-3">1</div>
                <h3 className="text-sm tracking-widest text-white mb-2">EVENT AT A TIME</h3>
                <p className="text-sm font-light text-white/70">
                  Exclusive venue, your day is entirely yours
                </p>
              </div>
              
              <div>
                <div className="text-5xl md:text-6xl font-light text-riviera-gold mb-3">350</div>
                <h3 className="text-sm tracking-widest text-white mb-2">GUEST CAPACITY</h3>
                <p className="text-sm font-light text-white/70">
                  Spacious waterfront estate for grand celebrations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Google Reviews - Social Proof */}
        <section className="bg-riviera-brown py-16 md:py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="text-center">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">REAL LONG ISLAND WEDDING REVIEWS</p>
              <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white mb-4">
                Why couples choose Riviera Waterfront Mansion
              </h2>
              <p className="text-lg font-light text-white/80 max-w-2xl mx-auto">
                Join hundreds of happy couples who celebrated their dream wedding at our historic Massapequa waterfront mansion since 1947
              </p>
            </div>
          </div>

          <GoogleReviews />

          <div className="text-center mt-12">
            <a
              href="https://www.google.com/maps/place/Riviera+Waterfront+Mansion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-riviera-gold text-riviera-gold px-8 py-3 text-sm font-light tracking-widest hover:bg-riviera-gold hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 focus:ring-offset-riviera-brown"
            >
              READ ALL REVIEWS ON GOOGLE →
            </a>
          </div>
        </section>

        {/* Why Choose Us - Value Proposition */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <p className="text-riviera-gold text-sm tracking-widest mb-4">CELEBRATING 100 YEARS OF WEDDING EXCELLENCE IN MASSAPEQUA NY</p>
                <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-riviera-text mb-8 leading-tight">
                  The only Long Island wedding venue in New York held by the same family for over 75 years
                </h2>
                <p className="text-base md:text-lg font-light text-riviera-text/80 leading-relaxed mb-6">
                  We set the standards for all Long Island wedding venues to follow. As a third generation family owned and operated waterfront wedding venue since 1947, we bring unmatched experience and dedication to every celebration in Massapequa, NY.
                </p>
                <p className="text-base md:text-lg font-light text-riviera-text/80 leading-relaxed mb-6">
                  Our historic waterfront mansion is kept in pristine condition with continuous updates and renovations throughout our tenure, making this a genuinely one of a kind modern yet classic destination wedding venue on Long Island. From outdoor waterfront ceremonies to elegant ballroom receptions, our venue offers everything couples dream of.
                </p>
                <p className="text-base md:text-lg font-light text-riviera-text/80 leading-relaxed mb-8">
                  Our service and your wedding experience are second to none. Warm welcomes, constant smiles, exceptional service, and delicious Continental cuisine elevate your day to dream wedding status. Our dedicated team ensures every detail of your Massapequa waterfront wedding is flawlessly executed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact"
                    className="inline-block bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-brown transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 text-center"
                  >
                    DOWNLOAD BROCHURE →
                  </Link>
                  <a 
                    href="tel:+15165415020"
                    className="inline-block border-2 border-riviera-gold text-riviera-gold px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-gold hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 text-center"
                  >
                    CALL (516) 541 5020
                  </a>
                </div>
              </div>
              <div className="order-1 md:order-2 relative h-[400px] md:h-[600px]">
                <div className="absolute inset-0 bg-riviera-neutral" />
                {/* Image placeholder - replace with actual venue image */}
              </div>
            </div>
          </div>
        </section>

        {/* Live Social Feed - Visual Proof */}
        <section className="bg-riviera-neutral py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">FOLLOW OUR LONG ISLAND WEDDING VENUE</p>
              <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-riviera-text mb-4">
                See real Long Island waterfront weddings at Riviera Waterfront Mansion
              </h2>
              <p className="text-lg font-light text-riviera-text/70 max-w-2xl mx-auto mb-8">
                Get a front row seat to stunning waterfront weddings at our Massapequa venue, behind the scenes setups, and must know Long Island wedding venue updates. Be inspired by real couples celebrating at our historic waterfront estate and dreamy decor.
              </p>
              <a
                href="https://www.instagram.com/rivierawaterfrontmansion/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm tracking-widest text-riviera-text hover:text-riviera-gold transition-colors"
              >
                <span>@RIVIERAWATERFRONTMANSION</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            <SocialFeed />
          </div>
        </section>

        {/* Venue Features - What You Get */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">EVERYTHING YOU NEED FOR YOUR LONG ISLAND WEDDING</p>
              <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-riviera-text mb-4">
                One of a kind historic waterfront wedding venue in Massapequa NY
              </h2>
              <p className="text-lg font-light text-riviera-text/70 max-w-2xl mx-auto">
                From ceremony to reception, our complete Long Island waterfront estate offers every amenity for your perfect wedding day with indoor and outdoor options
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <div className="bg-riviera-neutral/30 p-8 hover:bg-riviera-neutral/50 transition-colors">
                <h3 className="text-sm tracking-widest text-riviera-text mb-4 font-medium">OUTDOOR WATERFRONT CEREMONY</h3>
                <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                  Stunning waterfront ceremony area with breathtaking views of the water
                </p>
              </div>
              
              <div className="bg-riviera-neutral/30 p-8 hover:bg-riviera-neutral/50 transition-colors">
                <h3 className="text-sm tracking-widest text-riviera-text mb-4 font-medium">INDOOR CEREMONY OPTION</h3>
                <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                  Beautiful indoor ceremony space available for any weather
                </p>
              </div>
              
              <div className="bg-riviera-neutral/30 p-8 hover:bg-riviera-neutral/50 transition-colors">
                <h3 className="text-sm tracking-widest text-riviera-text mb-4 font-medium">WATERFRONT COCKTAIL AREAS</h3>
                <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                  Indoor and outdoor waterfront cocktail reception spaces
                </p>
              </div>
              
              <div className="bg-riviera-neutral/30 p-8 hover:bg-riviera-neutral/50 transition-colors">
                <h3 className="text-sm tracking-widest text-riviera-text mb-4 font-medium">GRAND BALLROOM</h3>
                <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                  Stunning water view grand ballroom with spacious dance floor
                </p>
              </div>
              
              <div className="bg-riviera-neutral/30 p-8 hover:bg-riviera-neutral/50 transition-colors">
                <h3 className="text-sm tracking-widest text-riviera-text mb-4 font-medium">BRIDAL SUITE</h3>
                <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                  Private luxury suite with two balconies and private restroom
                </p>
              </div>
              
              <div className="bg-riviera-neutral/30 p-8 hover:bg-riviera-neutral/50 transition-colors">
                <h3 className="text-sm tracking-widest text-riviera-text mb-4 font-medium">BALCONY OVERLOOK</h3>
                <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                  Elevated viewing area overlooking the dance floor for dramatic moments
                </p>
              </div>
              
              <div className="bg-riviera-neutral/30 p-8 hover:bg-riviera-neutral/50 transition-colors">
                <h3 className="text-sm tracking-widest text-riviera-text mb-4 font-medium">TOP SHELF BARS</h3>
                <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                  Multiple indoor and outdoor full service top shelf bars
                </p>
              </div>
              
              <div className="bg-riviera-neutral/30 p-8 hover:bg-riviera-neutral/50 transition-colors">
                <h3 className="text-sm tracking-widest text-riviera-text mb-4 font-medium">LIVE MUSIC & DJ WELCOME</h3>
                <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                  Your choice of entertainment options fully supported
                </p>
              </div>
              
              <div className="bg-riviera-neutral/30 p-8 hover:bg-riviera-neutral/50 transition-colors">
                <h3 className="text-sm tracking-widest text-riviera-text mb-4 font-medium">BACKUP GENERATOR</h3>
                <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                  Uninterrupted service guaranteed with full backup power
                </p>
              </div>
              
              <div className="bg-riviera-neutral/30 p-8 hover:bg-riviera-neutral/50 transition-colors">
                <h3 className="text-sm tracking-widest text-riviera-text mb-4 font-medium">CLIMATE CONTROLLED</h3>
                <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                  Air conditioned comfort throughout the venue year round
                </p>
              </div>
              
              <div className="bg-riviera-neutral/30 p-8 hover:bg-riviera-neutral/50 transition-colors">
                <h3 className="text-sm tracking-widest text-riviera-text mb-4 font-medium">COAT CHECK SERVICE</h3>
                <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                  Professional guest coat check service available
                </p>
              </div>
              
              <div className="bg-riviera-neutral/30 p-8 hover:bg-riviera-neutral/50 transition-colors">
                <h3 className="text-sm tracking-widest text-riviera-text mb-4 font-medium">FULL GROUNDS ACCESS</h3>
                <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                  Complete access to our beautiful indoor and outdoor spaces
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/tour"
                className="inline-block bg-riviera-gold text-white px-10 py-4 text-sm font-light tracking-widest hover:bg-riviera-brown transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
              >
                EXPLORE ALL FEATURES →
              </Link>
            </div>
          </div>
        </section>

        {/* Static Testimonials - Additional Social Proof */}
        <section className="bg-riviera-brown py-20 md:py-28 px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">LONG ISLAND WEDDING TESTIMONIALS</p>
              <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-4">
                Couples love their Riviera Waterfront Mansion wedding experience
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-riviera-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-light leading-relaxed mb-6">
                  Thank you so much for all the hard work and assistance that you provided us! Your team helped make our day special, smooth and forever memorable! Specifically Tara and Irene were fantastic!!
                </p>
                <p className="text-xs tracking-wider text-riviera-gold">— TIANA & ERIC</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-riviera-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-light leading-relaxed mb-6">
                  Our guests raved about the service, the food (especially the duck and roast suckling pig!), the view of the water, and the beautiful ballroom! My husband and I wanted to include Filipino traditions in our ceremony, and they were happy to work with us!
                </p>
                <p className="text-xs tracking-wider text-riviera-gold">— FRANCIELLE S</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-riviera-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-light leading-relaxed mb-6">
                  I wish there were 10 stars to give because that is truly what this venue deserves. From the fantastic views, to the breathtaking bridal suite I was completely blown away. Very professional, easily contacted, guests still raving about the food.
                </p>
                <p className="text-xs tracking-wider text-riviera-gold">— CAROLINE W</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Conversion */}
        <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-riviera-gold text-sm tracking-widest mb-4">READY TO BEGIN?</p>
            <h2 className="font-cormorant text-3xl md:text-4xl lg:text-6xl font-light tracking-wide text-riviera-text mb-6 leading-tight">
              Start planning your dream wedding today
            </h2>
            <p className="text-lg md:text-xl font-light text-riviera-text/70 mb-10 max-w-2xl mx-auto">
              Schedule a personal tour of our waterfront mansion and experience the magic for yourself. Limited dates available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/contact"
                className="bg-riviera-gold text-white px-10 py-5 text-sm font-light tracking-widest hover:bg-riviera-brown transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 shadow-lg"
              >
                SCHEDULE YOUR VISIT →
              </Link>
              <a 
                href="tel:+15165415020"
                className="border-2 border-riviera-gold text-riviera-gold px-10 py-5 text-sm font-light tracking-widest hover:bg-riviera-gold hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
              >
                CALL (516) 541 5020
              </a>
            </div>
            <p className="text-sm text-riviera-text/60">
              Available Tuesday through Sunday, 11:00 AM to 7:00 PM
            </p>
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
