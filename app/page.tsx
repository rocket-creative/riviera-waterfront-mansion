'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import GoogleReviews from './components/GoogleReviews';
import DualSocialFeed from './components/DualSocialFeed';
import HeroInquiryForm from './components/HeroInquiryForm';
import HeroCarousel from './components/HeroCarousel';
import CTASection from './components/CTASection';
import InlineCTA from './components/InlineCTA';
import FAQSection from './components/FAQSection';
import InteractiveWeddingForm from './components/InteractiveWeddingForm';
import Image from 'next/image';
import Link from 'next/link';
import { imageConfig } from './lib/imageConfig';
import { AnimatedSection } from './components/AnimatedSection';
import { HoverScale } from './components/HoverScale';
import { useFadeInUp, useStaggerChildren, useScrollTriggerCleanup } from './lib/useAnimations';

const homepageFAQs = [
  {
    question: 'How many guests can Riviera Waterfront Mansion accommodate?',
    answer: 'Our Long Island waterfront venue can accommodate 150 to 350 guests for your wedding celebration. We require a minimum of 150 guests and offer flexible seating arrangements in our grand ballroom to suit your specific needs.'
  },
  {
    question: 'Do you host multiple weddings on the same day?',
    answer: 'No. Riviera Waterfront Mansion hosts only one wedding at a time, ensuring your day is completely exclusive. You and your guests have full private access to our entire Massapequa waterfront facility, grounds, and all amenities.'
  },
  {
    question: 'What is included in your Long Island wedding packages?',
    answer: 'Our wedding packages include a five hour top shelf open bar, chef inspired Continental cuisine with cocktail hour and plated dinner, full venue access, bridal suite, professional staff, tables and linens, backup generator, climate control, and more. Contact us for complete package details and pricing.'
  },
  {
    question: 'Do you offer both indoor and outdoor ceremony options?',
    answer: 'Yes! We offer a stunning outdoor waterfront ceremony area with breathtaking water views, as well as a beautiful indoor ceremony space for any weather conditions. Both options are included with your wedding package.'
  },
  {
    question: 'How far in advance should we book our wedding date?',
    answer: 'We recommend booking 12 to 18 months in advance to secure your preferred date, especially for peak wedding season from May through October. However, we sometimes have availability for shorter notice weddings. Contact us to check current date availability for 2026 and 2027.'
  },
  {
    question: 'Can we bring our own vendors?',
    answer: 'Yes, you may bring your own photographer, DJ, florist, and other vendors. We also provide a curated list of preferred wedding vendors who are familiar with our Massapequa venue and have proven their excellence at our waterfront mansion.'
  },
  {
    question: 'Do you offer wedding tastings?',
    answer: 'Yes! We offer private menu tastings so you can sample our chef inspired Continental cuisine before your wedding day. Tastings can be scheduled as part of your planning process after booking your date.'
  },
  {
    question: 'Is there parking available at the venue?',
    answer: 'Yes, we provide ample complimentary parking for all your wedding guests on our Massapequa waterfront property. The parking area is conveniently located near the entrance.'
  }
];

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
        {/* Hero Section - Editorial 2-Column Layout */}
        <section className="relative min-h-[95vh] md:min-h-screen overflow-hidden bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[95vh] md:min-h-screen gap-4 lg:gap-6">
            {/* Text Column - 35% (roughly 5/12) */}
            <div className="lg:col-span-5 flex items-center order-2 lg:order-1 bg-white">
              <div ref={heroContentRef as any} className="px-6 sm:px-10 lg:px-12 xl:px-16 py-16 lg:py-20">
                <p className="text-riviera-gold text-xs sm:text-sm tracking-widest mb-6 font-light">
                  LONG ISLAND'S PREMIERE WATERFRONT WEDDING VENUE
                </p>
                <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light tracking-wider text-riviera-text mb-6 leading-[1.1]">
                  YOUR DREAM
                  <span className="block text-riviera-gold">WEDDING</span>
                  <span className="block">DESERVES</span>
                  <span className="block">PERFECTION</span>
                </h1>
                <p className="text-base sm:text-lg font-light text-riviera-text/70 mb-8 max-w-md leading-relaxed">
                  Three generations of wedding excellence on a stunning waterfront estate in Massapequa, Long Island. One wedding at a time. Your day, exclusively yours.
                </p>

                {/* Hero Inquiry Form - Above the Fold */}
                <div className="mb-8 max-w-md">
                  <HeroInquiryForm />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <HoverScale effect="lift">
                    <Link 
                      href="/contact"
                      className="bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 text-center block"
                    >
                      BOOK A TOUR →
                    </Link>
                  </HoverScale>
                  <HoverScale effect="lift">
                    <Link 
                      href="/tour"
                      className="border-2 border-riviera-gold text-riviera-gold px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-gold hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 text-center block"
                    >
                      VIRTUAL TOUR
                    </Link>
                  </HoverScale>
                </div>
              </div>
            </div>

            {/* Image Column - 65% (roughly 7/12) - Carousel of couples */}
            <div className="relative lg:col-span-7 h-[50vh] lg:h-auto order-1 lg:order-2">
              <HeroCarousel 
                images={imageConfig.heroCarousel}
                interval={6000}
                alt="Wedding couple at Riviera Waterfront Mansion in Massapequa, Long Island"
              />
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-6 lg:left-auto lg:right-8 z-20">
            <a 
              href="#trust-bar" 
              className="text-riviera-text/50 text-xs tracking-widest flex flex-col items-center gap-2 hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold"
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
        <section id="trust-bar" className="bg-riviera-neutral py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={statsRef as any} className="grid md:grid-cols-3 gap-8 text-center">
              <div className="stat-item">
                <div className="text-5xl md:text-6xl font-light text-riviera-gold mb-3">75+</div>
                <h3 className="text-sm tracking-widest text-riviera-text mb-2">YEARS OF EXCELLENCE</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Third generation family owned since 1947
                </p>
              </div>
              
              <div className="stat-item">
                <div className="text-5xl md:text-6xl font-light text-riviera-gold mb-3">1</div>
                <h3 className="text-sm tracking-widest text-riviera-text mb-2">EVENT AT A TIME</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Exclusive venue, your day is entirely yours
                </p>
              </div>
              
              <div className="stat-item">
                <div className="text-5xl md:text-6xl font-light text-riviera-gold mb-3">350</div>
                <h3 className="text-sm tracking-widest text-riviera-text mb-2">GUEST CAPACITY</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Spacious waterfront estate for grand celebrations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Wedding Planner Form */}
        <section className="py-20 md:py-28 px-6 sm:px-8 lg:px-12 bg-white">
          <AnimatedSection animation="fadeInUp" as="div">
            <InteractiveWeddingForm />
          </AnimatedSection>
        </section>

        {/* Live Google Reviews - Social Proof */}
        <section className="relative py-16 md:py-20 overflow-hidden bg-riviera-text">
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
                className="inline-block border-2 border-riviera-gold text-riviera-gold px-8 py-3 text-sm font-light tracking-widest hover:bg-riviera-gold hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 focus:ring-offset-riviera-text"
              >
                READ ALL REVIEWS ON GOOGLE →
              </a>
            </HoverScale>
          </AnimatedSection>
        </section>

        {/* Why Choose Us - Editorial Magazine Style with Photography */}
        <section className="relative min-h-[80vh] overflow-hidden bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh]">
            {/* Image Column - Full Height */}
            <div className="relative lg:col-span-7 h-[50vh] lg:h-auto order-1 lg:order-1 overflow-hidden">
              <Image 
                src="/images/large/_0350091-by-p.jpg"
                alt="Elegant wedding ceremony at Riviera Waterfront Mansion in Massapequa, Long Island"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
                quality={90}
                priority
              />
            </div>

            {/* Text Column */}
            <div className="lg:col-span-5 flex items-center order-2 lg:order-2">
              <div className="px-6 sm:px-10 lg:px-12 xl:px-16 py-16 lg:py-20">
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
                  <Link 
                    href="/contact"
                    className="inline-block bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 text-center"
                  >
                    DOWNLOAD BROCHURE →
                  </Link>
                  <a 
                    href="tel:+15165415020"
                    className="inline-block border-2 border-riviera-gold text-riviera-gold px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-gold hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 text-center whitespace-nowrap"
                  >
                    CALL (516) 541 5020
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Social Feed - Visual Proof */}
        <section className="bg-riviera-neutral py-20 md:py-28 overflow-hidden">
          <div className="max-w-[1440px] mx-auto">
            <div className="px-4 sm:px-6 lg:px-8">
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
            </div>

            {/* Carousel extends to full section width (1440px) with no padding */}
            <DualSocialFeed />
          </div>
        </section>

        {/* Mid Page CTA - After Social Proof, Before Features */}
        <InlineCTA
          eyebrow="LIMITED WEDDING DATES AVAILABLE"
          headline="Your dream Massapequa waterfront wedding starts here"
          description="Ready to experience our historic Long Island venue in person? Schedule a private tour and discover why couples have chosen Riviera Waterfront Mansion for over 75 years. Personalized consultations available Tuesday through Sunday."
          buttonText="CHECK AVAILABILITY →"
          buttonHref="/contact"
          imageSrc={imageConfig.homepage.venue}
          imageAlt="Elegant Long Island wedding reception at Riviera Waterfront Mansion in Massapequa with stunning table settings and waterfront views"
          imagePosition="left"
          background="neutral"
        />

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
              <Link href="/tour/outdoor-ceremony" className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all block focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 relative">
                <div className="relative h-40 overflow-hidden">
                  <Image src="/images/medium/_DSC4629cb-p.jpg" alt="Outdoor waterfront ceremony" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute top-3 right-3 bg-riviera-gold/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-3 font-medium group-hover:text-riviera-gold transition-colors">OUTDOOR WATERFRONT CEREMONY</h3>
                  <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                    Stunning waterfront ceremony area with breathtaking views of the water
                  </p>
                </div>
              </Link>
              
              <Link href="/tour/indoor-ceremony" className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all block focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 relative">
                <div className="relative h-40 overflow-hidden">
                  <Image src="/images/medium/_DSC4647cb-p.jpg" alt="Indoor ceremony space" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute top-3 right-3 bg-riviera-gold/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-3 font-medium group-hover:text-riviera-gold transition-colors">INDOOR CEREMONY OPTION</h3>
                  <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                    Beautiful indoor ceremony space available for any weather
                  </p>
                </div>
              </Link>
              
              <Link href="/tour/outdoor-cocktail" className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all block focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 relative">
                <div className="relative h-40 overflow-hidden">
                  <Image src="/images/medium/_DSC4964cb-p.jpg" alt="Waterfront cocktail area" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute top-3 right-3 bg-riviera-gold/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-3 font-medium group-hover:text-riviera-gold transition-colors">WATERFRONT COCKTAIL AREAS</h3>
                  <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                    Indoor and outdoor waterfront cocktail reception spaces
                  </p>
                </div>
              </Link>
              
              <Link href="/tour/main-ballroom" className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all block focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 relative">
                <div className="relative h-40 overflow-hidden">
                  <Image src="/images/medium/_DSC5114aa-port-2.jpg" alt="Grand ballroom" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute top-3 right-3 bg-riviera-gold/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-3 font-medium group-hover:text-riviera-gold transition-colors">GRAND BALLROOM</h3>
                  <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                    Stunning water view grand ballroom with spacious dance floor
                  </p>
                </div>
              </Link>
              
              <Link href="/tour/bridal-suite" className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all block focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 relative">
                <div className="relative h-40 overflow-hidden">
                  <Image src="/images/medium/_DSC5139aa-port-2.jpg" alt="Bridal suite" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute top-3 right-3 bg-riviera-gold/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-3 font-medium group-hover:text-riviera-gold transition-colors">BRIDAL SUITE</h3>
                  <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                    Private luxury suite with two balconies and private restroom
                  </p>
                </div>
              </Link>
              
              <Link href="/tour/balconies" className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all block focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 relative">
                <div className="relative h-40 overflow-hidden">
                  <Image src="/images/medium/_DSC6150aa-port-2.jpg" alt="Balcony overlook" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute top-3 right-3 bg-riviera-gold/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-3 font-medium group-hover:text-riviera-gold transition-colors">BALCONY OVERLOOK</h3>
                  <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                    Elevated viewing area overlooking the dance floor for dramatic moments
                  </p>
                </div>
              </Link>
              
              <Link href="/tour/main-bar" className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all block focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 relative">
                <div className="relative h-40 overflow-hidden">
                  <Image src="/images/medium/_DSC8472jj-p.jpg" alt="Top shelf bar" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute top-3 right-3 bg-riviera-gold/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-3 font-medium group-hover:text-riviera-gold transition-colors">TOP SHELF BARS</h3>
                  <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                    Multiple indoor and outdoor full service top shelf bars
                  </p>
                </div>
              </Link>
              
              <Link href="/tour/entertainment" className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all block focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 relative">
                <div className="relative h-40 overflow-hidden">
                  <Image src="/images/medium/_DSC8594sa-p.jpg" alt="Entertainment and DJ" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute top-3 right-3 bg-riviera-gold/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-3 font-medium group-hover:text-riviera-gold transition-colors">LIVE MUSIC & DJ WELCOME</h3>
                  <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                    Your choice of entertainment options fully supported
                  </p>
                </div>
              </Link>
              
              <div className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all">
                <div className="relative h-40 overflow-hidden">
                  <Image src="/images/medium/_DSC8607sa-p.jpg" alt="Venue amenities" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-3 font-medium">BACKUP GENERATOR</h3>
                  <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                    Uninterrupted service guaranteed with full backup power
                  </p>
                </div>
              </div>
              
              <div className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all">
                <div className="relative h-40 overflow-hidden">
                  <Image src="/images/medium/_DSC8650sa-p.jpg" alt="Climate controlled venue" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-3 font-medium">CLIMATE CONTROLLED</h3>
                  <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                    Air conditioned comfort throughout the venue year round
                  </p>
                </div>
              </div>
              
              <div className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all">
                <div className="relative h-40 overflow-hidden">
                  <Image src="/images/medium/_DSC8809jj-p2.jpg" alt="Coat check service" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-3 font-medium">COAT CHECK SERVICE</h3>
                  <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                    Professional guest coat check service available
                  </p>
                </div>
              </div>
              
              <div className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all">
                <div className="relative h-40 overflow-hidden">
                  <Image src="/images/medium/_DSC8820sa-p.jpg" alt="Full grounds access" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-3 font-medium">FULL GROUNDS ACCESS</h3>
                  <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                    Complete access to our beautiful indoor and outdoor spaces
                  </p>
                </div>
              </div>
            </div>

            <AnimatedSection animation="fadeInUp" delay={0.3} className="text-center" as="div">
              <HoverScale effect="lift">
                <Link 
                  href="/tour"
                  className="inline-block bg-riviera-gold text-white px-10 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
                >
                  EXPLORE ALL FEATURES →
                </Link>
              </HoverScale>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqs={homepageFAQs}
          title="Frequently asked questions about our Long Island wedding venue"
          eyebrow="YOUR QUESTIONS ANSWERED"
          background="white"
        />

        {/* Final CTA - Conversion Focused */}
        <CTASection
          eyebrow="READY TO BOOK YOUR LONG ISLAND WATERFRONT WEDDING?"
          headline="Start planning your dream Massapequa waterfront wedding today"
          description="Schedule a personal tour of our historic Riviera Waterfront Mansion in Massapequa, NY and experience the magic of our Long Island waterfront wedding venue for yourself. Limited wedding dates available for 2026 and 2027. Call now or submit an inquiry to check your date."
          background="dark"
          buttons={[
            {
              text: 'BOOK A TOUR →',
              href: '/contact',
              intent: 'schedule',
            },
            {
              text: 'CALL (516) 541 5020',
              href: 'tel:+15165415020',
              intent: 'call',
              external: true,
            },
          ]}
        />
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: homepageFAQs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          })
        }}
      />
    </>
  );
}
