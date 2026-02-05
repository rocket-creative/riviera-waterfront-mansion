'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import GoogleReviews from './components/GoogleReviews';
import DualSocialFeed from './components/DualSocialFeed';
import Image from 'next/image';
import Link from 'next/link';
import { imageConfig } from './lib/imageConfig';
import { AnimatedSection } from './components/AnimatedSection';
import { HoverScale } from './components/HoverScale';
import { useFadeInUp, useStaggerChildren, useScrollTriggerCleanup } from './lib/useAnimations';

export default function Home() {
  // Cleanup ScrollTriggers on unmount
  useScrollTriggerCleanup();

  // Refs for custom animations
  const heroContentRef = useFadeInUp({ delay: 0.3, duration: 1.4 });
  const statsRef = useStaggerChildren('.stat-item', { stagger: 0.2, duration: 1 });
  const featuresRef = useStaggerChildren('.feature-card', { stagger: 0.1, duration: 0.8 });
  return (
    <>
      <Header />
      
      <main id="main">
        {/* Hero Section - Photography First, Editorial Style */}
        <section className="relative h-[75vh] md:h-[85vh] overflow-hidden">
          {/* Hero Image - Priority loading for above fold */}
          <Image 
            src={imageConfig.hero[0]}
            alt="Stunning waterfront wedding ceremony at Riviera Waterfront Mansion in Massapequa, Long Island"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div ref={heroContentRef as any} className="max-w-5xl">
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
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <HoverScale effect="lift">
                  <Link 
                    href="/contact"
                    className="bg-riviera-gold text-white px-10 py-5 text-sm font-light tracking-widest hover:bg-white hover:text-riviera-text transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 shadow-lg text-center block"
                  >
                    SCHEDULE YOUR VISIT →
                  </Link>
                </HoverScale>
                <HoverScale effect="lift">
                  <Link 
                    href="/tour"
                    className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 text-sm font-light tracking-widest hover:bg-white hover:text-riviera-text transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 text-center block"
                  >
                    TAKE A VIRTUAL TOUR
                  </Link>
                </HoverScale>
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
            <div ref={statsRef as any} className="grid md:grid-cols-3 gap-8 text-center">
              <div className="stat-item">
                <div className="text-5xl md:text-6xl font-light text-riviera-gold mb-3">75+</div>
                <h3 className="text-sm tracking-widest text-white mb-2">YEARS OF EXCELLENCE</h3>
                <p className="text-sm font-light text-white/70">
                  Third generation family owned since 1947
                </p>
              </div>
              
              <div className="stat-item">
                <div className="text-5xl md:text-6xl font-light text-riviera-gold mb-3">1</div>
                <h3 className="text-sm tracking-widest text-white mb-2">EVENT AT A TIME</h3>
                <p className="text-sm font-light text-white/70">
                  Exclusive venue, your day is entirely yours
                </p>
              </div>
              
              <div className="stat-item">
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
        <section className="relative py-16 md:py-20 overflow-hidden bg-riviera-dark-brown">
          <AnimatedSection animation="fadeInUp" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="text-center">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">REAL LONG ISLAND WEDDING REVIEWS</p>
              <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white mb-4">
                Why couples choose Riviera Waterfront Mansion
              </h2>
              <p className="text-lg font-light text-white/80 max-w-2xl mx-auto">
                Join hundreds of happy couples who celebrated their dream wedding at our historic Massapequa waterfront mansion since 1947
              </p>
            </div>
          </AnimatedSection>

          <GoogleReviews />

          <AnimatedSection animation="fadeInUp" delay={0.2} className="text-center mt-12" as="div">
            <HoverScale effect="lift">
              <a
                href="https://www.google.com/maps/place/Riviera+Waterfront+Mansion"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-riviera-gold text-riviera-gold px-8 py-3 text-sm font-light tracking-widest hover:bg-riviera-gold hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 focus:ring-offset-riviera-dark-brown"
              >
                READ ALL REVIEWS ON GOOGLE →
              </a>
            </HoverScale>
          </AnimatedSection>
        </section>

        {/* Why Choose Us - Editorial Magazine Style with Photography */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="revealFromLeft" className="order-2 md:order-1" as="div">
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
                <div className="flex flex-col md:flex-row gap-4">
                  <HoverScale effect="lift">
                    <Link 
                      href="/contact"
                      className="inline-block bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-dark-brown transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 text-center"
                    >
                      DOWNLOAD BROCHURE →
                    </Link>
                  </HoverScale>
                  <HoverScale effect="lift">
                    <a 
                      href="tel:+15165415020"
                      className="inline-block border-2 border-riviera-gold text-riviera-gold px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-gold hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 text-center"
                    >
                      CALL (516) 541 5020
                    </a>
                  </HoverScale>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="imageReveal" delay={0.2} className="order-1 md:order-2 relative h-[400px] md:h-[600px] overflow-hidden" as="div">
                <HoverScale scale={1.1} duration={0.8}>
                  <Image 
                    src={imageConfig.homepage.whyChooseUs}
                    alt="Historic Riviera Waterfront Mansion ballroom with elegant reception setup and waterfront views in Massapequa, Long Island"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                </HoverScale>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Live Social Feed - Visual Proof */}
        <section className="bg-riviera-neutral py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-12" as="div">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">FOLLOW OUR LONG ISLAND WEDDING VENUE</p>
              <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-riviera-text mb-4">
                See real Long Island waterfront weddings at Riviera Waterfront Mansion
              </h2>
              <p className="text-lg font-light text-riviera-text/70 max-w-2xl mx-auto mb-8">
                Get a front row seat to stunning waterfront weddings at our Massapequa venue, behind the scenes setups, and must know Long Island wedding venue updates. Be inspired by real couples celebrating at our historic waterfront estate and dreamy decor.
              </p>
              <div className="flex items-center justify-center gap-6">
                <a
                  href="https://www.instagram.com/rivierawaterfrontmansion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm tracking-widest text-riviera-text hover:text-riviera-gold transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>@RIVIERAWATERFRONTMANSION</span>
                </a>
                <span className="text-riviera-text/30">|</span>
                <a
                  href="https://www.tiktok.com/@rivierawaterfrontmansion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm tracking-widest text-riviera-text hover:text-riviera-gold transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                  <span>@RIVIERAWATERFRONTMANSION</span>
                </a>
              </div>
            </AnimatedSection>

            <DualSocialFeed />
          </div>
        </section>

        {/* Editorial Photo Showcase - Full Bleed Magazine Style */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <HoverScale scale={1.05} duration={1}>
            <Image 
              src={imageConfig.homepage.venue}
              alt="Elegant Long Island wedding reception at Riviera Waterfront Mansion in Massapequa with stunning table settings and waterfront views"
              fill
              className="object-cover"
              sizes="100vw"
              quality={90}
            />
          </HoverScale>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <AnimatedSection animation="fadeInUp" delay={0.3} className="absolute bottom-0 left-0 right-0 p-8 md:p-16" as="div">
            <div className="max-w-4xl">
              <p className="text-riviera-gold text-sm tracking-widest mb-4">WHERE TIMELESS ELEGANCE MEETS WATERFRONT BEAUTY</p>
              <h2 className="font-cormorant text-3xl md:text-4xl lg:text-6xl font-light tracking-wide text-white mb-6 leading-tight">
                Every detail designed for your perfect Long Island wedding celebration
              </h2>
              <HoverScale effect="lift">
                <Link 
                  href="/tour"
                  className="inline-block bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-white hover:text-riviera-text transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
                >
                  EXPLORE THE VENUE →
                </Link>
              </HoverScale>
            </div>
          </AnimatedSection>
        </section>

        {/* Venue Features - What You Get */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16" as="div">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">EVERYTHING YOU NEED FOR YOUR LONG ISLAND WEDDING</p>
              <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-riviera-text mb-4">
                One of a kind historic waterfront wedding venue in Massapequa NY
              </h2>
              <p className="text-lg font-light text-riviera-text/70 max-w-2xl mx-auto">
                From ceremony to reception, our complete Long Island waterfront estate offers every amenity for your perfect wedding day with indoor and outdoor options
              </p>
            </AnimatedSection>

            <div ref={featuresRef as any} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <div className="feature-card bg-riviera-neutral/30 p-8 hover:bg-riviera-neutral/50 transition-colors">
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
                className="inline-block bg-riviera-gold text-white px-10 py-4 text-sm font-light tracking-widest hover:bg-riviera-dark-brown transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
              >
                EXPLORE ALL FEATURES →
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA - Conversion */}
        <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-riviera-gold text-sm tracking-widest mb-4">READY TO BOOK YOUR LONG ISLAND WATERFRONT WEDDING?</p>
            <h2 className="font-cormorant text-3xl md:text-4xl lg:text-6xl font-light tracking-wide text-riviera-text mb-6 leading-tight">
              Start planning your dream Massapequa waterfront wedding today
            </h2>
            <p className="text-lg md:text-xl font-light text-riviera-text/70 mb-10 max-w-2xl mx-auto">
              Schedule a personal tour of our historic Riviera Waterfront Mansion in Massapequa, NY and experience the magic of our Long Island waterfront wedding venue for yourself. Limited wedding dates available.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/contact"
                className="bg-riviera-gold text-white px-10 py-5 text-sm font-light tracking-widest hover:bg-riviera-dark-brown transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 shadow-lg text-center"
              >
                SCHEDULE YOUR VISIT →
              </Link>
              <a 
                href="tel:+15165415020"
                className="border-2 border-riviera-gold text-riviera-gold px-10 py-5 text-sm font-light tracking-widest hover:bg-riviera-gold hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 text-center"
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
