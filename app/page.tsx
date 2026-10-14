'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import GoogleReviews from './components/GoogleReviews';
import DualSocialFeed from './components/DualSocialFeed';
import HeroCarousel from './components/HeroCarousel';
import CTASection from './components/CTASection';
import InlineCTA from './components/InlineCTA';
import FAQSection from './components/FAQSection';
import MobileStickyCTA from './components/MobileStickyCTA';
import Image from 'next/image';
import Link from 'next/link';
import { imageConfig } from './lib/imageConfig';
import SlideshowImage from './components/SlideshowImage';
import { AnimatedSection } from './components/AnimatedSection';
import { HoverScale } from './components/HoverScale';
import { useFadeInUp, useStaggerChildren, useScrollTriggerCleanup } from './lib/useAnimations';
import BridalShowcaseOverlay from './components/BridalShowcaseOverlay';
import AnswerBlock from './components/AnswerBlock';
import JsonLd from './components/JsonLd';
import { homePage } from './lib/pageAnswers';
import { pageGraph } from './lib/schema';

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
        <section className="relative min-h-dvh overflow-hidden bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-dvh gap-4 lg:gap-6">
            {/* Text Column - 35% (roughly 5/12) */}
            <div className="lg:col-span-5 flex items-center order-2 lg:order-1 bg-white">
              <div ref={heroContentRef as any} className="px-6 sm:px-10 lg:px-12 xl:px-16 py-16 lg:py-20">
                <div className="mb-6">
                  <Image
                    src="/rw-mansion-logo-circular.svg"
                    alt="Riviera Waterfront Mansion"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <p className="text-riviera-gold text-xs sm:text-sm tracking-widest mb-6 font-light">
                  LONG ISLAND'S PREMIERE WATERFRONT WEDDING VENUE
                </p>
                <h1 className="font-cormorant text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wider text-riviera-text mb-6 leading-[1.1]">
                  YOUR DREAM
                  <span className="block text-riviera-gold">WEDDING</span>
                  <span className="block">DESERVES</span>
                  <span className="block">PERFECTION</span>
                </h1>
                <AnswerBlock>{homePage.answer}</AnswerBlock>
                <p className="text-base sm:text-lg font-light text-riviera-text/70 mb-8 max-w-md leading-relaxed">
                  Three generations of wedding excellence on a stunning waterfront estate in Massapequa, Long Island. One wedding at a time. Your day, exclusively yours.
                </p>

                <div className="flex flex-col gap-4 max-w-md">
                  <HoverScale effect="lift">
                    <Link 
                      href="/wedding-pricing"
                      className="bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2 text-center block w-full"
                    >
                      DOWNLOAD OUR WELCOME BROCHURE →
                    </Link>
                  </HoverScale>
                  <HoverScale effect="lift">
                    <Link 
                      href="/tour"
                      className="border-2 border-riviera-gold text-riviera-gold px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-gold hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2 text-center block w-full"
                    >
                      VIRTUAL TOUR
                    </Link>
                  </HoverScale>
                </div>
              </div>
            </div>

            {/* Image Column - 65% (roughly 7/12) - Carousel of couples */}
            <div className="relative lg:col-span-7 h-[50svh] lg:h-auto order-1 lg:order-2">
              <HeroCarousel 
                images={imageConfig.hero}
                interval={6000}
                alt="Wedding couple at Riviera Waterfront Mansion in Massapequa, Long Island"
              />
              <BridalShowcaseOverlay />
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="hidden lg:block absolute lg:right-8 bottom-8 z-20">
            <a 
              href="#trust-bar" 
              className="text-riviera-text/50 text-xs tracking-widest flex flex-col items-center gap-2 hover:text-riviera-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold"
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
        <section id="trust-bar" className="bg-riviera-neutral py-12 md:py-16" aria-label="Venue highlights">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={statsRef as any} className="grid lg:grid-cols-3 gap-8 text-center">
              <div className="stat-item">
                <div className="text-5xl md:text-6xl font-light text-riviera-gold mb-3">75+</div>
                <h3 className="text-sm tracking-widest text-riviera-text mb-2">YEARS OF EXCELLENCE</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Third generation family owned since 1946
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

        {/* Live Google Reviews - Social Proof */}
        <section className="relative py-16 md:py-20 overflow-hidden bg-riviera-text" aria-labelledby="reviews-heading">
          <AnimatedSection animation="fadeInUp" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="text-center">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">REAL LONG ISLAND WEDDING REVIEWS</p>
              <h2 id="reviews-heading" className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white mb-4">
                Why Couples Choose Riviera Waterfront Mansion
              </h2>
              <p className="text-lg font-light text-white/80 max-w-2xl mx-auto">
                Join hundreds of happy couples who celebrated their dream wedding at our historic Massapequa waterfront mansion since 1946
              </p>
            </div>
          </AnimatedSection>

          <GoogleReviews />

          <AnimatedSection animation="fadeInUp" delay={0.2} className="text-center mt-12 max-w-md mx-auto" as="div">
            <HoverScale effect="lift">
              <a
                href="https://www.google.com/maps/place/Riviera+Waterfront+Mansion"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-riviera-gold text-riviera-gold px-8 py-3 text-sm font-light tracking-widest hover:bg-riviera-gold hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2 focus-visible:ring-offset-riviera-text text-center block w-full"
              >
                READ ALL REVIEWS ON GOOGLE →
              </a>
            </HoverScale>
          </AnimatedSection>
        </section>

        {/* Why Choose Us - Editorial Magazine Style with Photography */}
        <section className="relative overflow-hidden bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Image Column - Full Height */}
            <div className="relative lg:col-span-7 h-[50svh] lg:h-auto order-1 lg:order-1 overflow-hidden">
              <SlideshowImage
                images={imageConfig.homepage.whyChooseUs as string[]}
                alt="Elegant wedding ceremony at Riviera Waterfront Mansion in Massapequa, Long Island"
                sizes="(max-width: 1024px) 100vw, 58vw"
                quality={90}
                priority
                showPlaceholder
              />
            </div>

            {/* Text Column */}
            <div className="lg:col-span-5 flex items-center order-2 lg:order-2">
              <div className="px-6 sm:px-10 lg:px-12 xl:px-16 py-16 lg:py-20">
                <p className="text-riviera-gold text-sm tracking-widest mb-4">75+ YEARS OF WEDDING EXCELLENCE IN MASSAPEQUA NY</p>
                <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-riviera-text mb-8 leading-tight">
                  Why Is Riviera Waterfront Mansion The Most Trusted Long Island Wedding Venue?
                </h2>
                <p className="text-base md:text-lg font-light text-riviera-text/80 leading-relaxed mb-6">
                  We set the standards for all Long Island wedding venues to follow. As a third generation family owned and operated waterfront wedding venue since 1946, we bring unmatched experience and dedication to every celebration in Massapequa, NY.
                </p>
                <p className="text-base md:text-lg font-light text-riviera-text/80 leading-relaxed mb-6">
                  Our historic waterfront mansion is kept in pristine condition with continuous updates and renovations throughout our tenure, making this a genuinely one of a kind modern yet classic destination wedding venue on Long Island. From outdoor waterfront ceremonies to elegant ballroom receptions, our venue offers everything couples dream of.
                </p>
                <p className="text-base md:text-lg font-light text-riviera-text/80 leading-relaxed mb-8">
                  Our service and your wedding experience are second to none. Warm welcomes, constant smiles, exceptional service, and delicious Continental cuisine elevate your day to dream wedding status. Our dedicated team ensures every detail of your Massapequa waterfront wedding is flawlessly executed.
                </p>
                <div className="flex flex-col gap-4 max-w-md">
                  <Link 
                    href="/wedding-pricing"
                    className="bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2 text-center block"
                  >
                    DOWNLOAD OUR WELCOME BROCHURE →
                  </Link>
                  <a 
                    href="tel:+15165415020"
                    className="border-2 border-riviera-gold text-riviera-gold px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-gold hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2 text-center block whitespace-nowrap"
                  >
                    CALL (516) 541 5020
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Social Feed - Visual Proof */}
        <section className="bg-riviera-neutral py-20 md:py-28 overflow-hidden" aria-labelledby="social-heading">
          <div className="max-w-[1440px] mx-auto">
            <div className="px-4 sm:px-6 lg:px-8">
              <AnimatedSection animation="fadeInUp" className="text-center mb-12" as="div">
                <p className="text-riviera-gold text-sm tracking-widest mb-3">FOLLOW OUR LONG ISLAND WEDDING VENUE</p>
                <h2 id="social-heading" className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-riviera-text mb-4">
                  See Real Long Island Waterfront Weddings At Riviera Waterfront Mansion
                </h2>
                <p className="text-lg font-light text-riviera-text/70 max-w-2xl mx-auto mb-8">
                  Get a front row seat to stunning waterfront weddings at our Massapequa venue, behind the scenes setups, and must know Long Island wedding venue updates. Be inspired by real couples celebrating at our historic waterfront estate and dreamy decor.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
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
                  <span className="hidden md:inline text-riviera-text/30" aria-hidden="true">|</span>
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
          headline="Your Dream Massapequa Waterfront Wedding starts here"
          description="Ready to experience our historic Long Island venue in person? Download our welcome brochure to explore packages, amenities, and everything Riviera Waterfront Mansion has to offer. Limited 2026 and 2027 dates available."
          buttonText="DOWNLOAD OUR WELCOME BROCHURE →"
          buttonHref="/wedding-pricing"
          imageSrc={imageConfig.homepage.venue as string[]}
          imageAlt="Real couples celebrating their waterfront wedding at Riviera Waterfront Mansion in Massapequa, Long Island"
          imagePosition="left"
          background="neutral"
          imageFit="cover"
        />

        {/* Venue Features - What You Get */}
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16" as="div">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">EVERYTHING YOU NEED FOR YOUR LONG ISLAND WEDDING</p>
              <h2 id="features-heading" className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-riviera-text mb-4">
                What Does Riviera Waterfront Mansion Offer for Your Long Island Wedding?
              </h2>
              <p className="text-lg font-light text-riviera-text/70 max-w-2xl mx-auto">
                From ceremony to reception, our complete Long Island waterfront estate offers every amenity for your perfect wedding day with indoor and outdoor options
              </p>
            </AnimatedSection>

            <div ref={featuresRef as any} className="grid lg:grid-cols-3 gap-6 mb-16">
              <Link href="/tour/outdoor-ceremony" className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all block focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2 relative">
                <div className="relative aspect-video w-full overflow-hidden">
                  <SlideshowImage images={imageConfig.homepage.outdoorCeremony} alt="Outdoor waterfront ceremony" sizes="(max-width: 1024px) 100vw, 33vw" fit="contain" objectClass="group-hover:scale-105 transition-transform duration-500" />
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
              
              <Link href="/tour/indoor-ceremony" className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all block focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2 relative">
                <div className="relative aspect-video w-full overflow-hidden">
                  <SlideshowImage images={imageConfig.homepage.indoorCeremony} alt="Indoor ceremony space" sizes="(max-width: 1024px) 100vw, 33vw" fit="contain" objectClass="group-hover:scale-105 transition-transform duration-500" />
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
              
              <Link href="/tour/outdoor-cocktail" className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all block focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2 relative">
                <div className="relative aspect-video w-full overflow-hidden">
                  <SlideshowImage images={imageConfig.homepage.outdoorCocktail} alt="Waterfront cocktail area" sizes="(max-width: 1024px) 100vw, 33vw" fit="contain" objectClass="group-hover:scale-105 transition-transform duration-500" />
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
              
              <Link href="/tour/main-ballroom" className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all block focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2 relative">
                <div className="relative aspect-video w-full overflow-hidden">
                  <SlideshowImage images={imageConfig.homepage.ballroom} alt="Grand ballroom" sizes="(max-width: 1024px) 100vw, 33vw" fit="contain" objectClass="group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-riviera-gold/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-3 font-medium group-hover:text-riviera-gold transition-colors">GRAND BALLROOM</h3>
                  <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                    Water view ballroom with a large dance floor and room for up to 350 guests
                  </p>
                </div>
              </Link>
              
              <Link href="/tour/bridal-suite" className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all block focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2 relative">
                <div className="relative aspect-video w-full overflow-hidden">
                  <SlideshowImage images={imageConfig.homepage.bridal} alt="Bridal suite" sizes="(max-width: 1024px) 100vw, 33vw" fit="contain" objectClass="group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-riviera-gold/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-3 font-medium group-hover:text-riviera-gold transition-colors">BRIDAL SUITE</h3>
                  <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                    Private top floor suite with two balconies and its own restroom
                  </p>
                </div>
              </Link>
              
              <Link href="/tour/balconies" className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all block focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2 relative">
                <div className="relative aspect-video w-full overflow-hidden">
                  <SlideshowImage images={imageConfig.homepage.balconies} alt="Balcony overlook" sizes="(max-width: 1024px) 100vw, 33vw" fit="contain" objectClass="group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-riviera-gold/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-3 font-medium group-hover:text-riviera-gold transition-colors">DOUBLE BALCONIES</h3>
                  <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                    Two balconies, one over the ballroom and one outside with double waterfront views
                  </p>
                </div>
              </Link>
              
              <Link href="/tour/main-bar" className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all block focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2 relative">
                <div className="relative aspect-video w-full overflow-hidden">
                  <SlideshowImage images={imageConfig.homepage.bar} alt="Top shelf bar" sizes="(max-width: 1024px) 100vw, 33vw" fit="contain" objectClass="group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-riviera-gold/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-3 font-medium group-hover:text-riviera-gold transition-colors">TOP SHELF BARS</h3>
                  <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                    Full service indoor and outdoor bars pouring premium liquor, wine, and cocktails
                  </p>
                </div>
              </Link>
              
              <Link href="/tour/entertainment" className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all block focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2 relative">
                <div className="relative aspect-video w-full overflow-hidden">
                  <SlideshowImage images={imageConfig.homepage.entertainment} alt="Entertainment and DJ" sizes="(max-width: 1024px) 100vw, 33vw" fit="contain" objectClass="group-hover:scale-105 transition-transform duration-500" />
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
                <div className="relative aspect-video w-full overflow-hidden">
                  <SlideshowImage images={imageConfig.homepage.amenities} alt="Venue amenities" sizes="(max-width: 1024px) 100vw, 33vw" fit="contain" objectClass="group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-3 font-medium">BACKUP GENERATOR</h3>
                  <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                    Uninterrupted service guaranteed with full backup power
                  </p>
                </div>
              </div>
              
              <div className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all">
                <div className="relative aspect-video w-full overflow-hidden">
                  <SlideshowImage images={imageConfig.homepage.climate} alt="Climate controlled venue" sizes="(max-width: 1024px) 100vw, 33vw" fit="contain" objectClass="group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-3 font-medium">CLIMATE CONTROLLED</h3>
                  <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                    Air conditioned comfort throughout the venue year round
                  </p>
                </div>
              </div>
              
              <div className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all">
                <div className="relative aspect-video w-full overflow-hidden">
                  <SlideshowImage images={imageConfig.homepage.entrance} alt="Coat check service" sizes="(max-width: 1024px) 100vw, 33vw" fit="contain" objectClass="group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-3 font-medium">COAT CHECK SERVICE</h3>
                  <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                    Professional guest coat check service available
                  </p>
                </div>
              </div>
              
              <div className="feature-card border-2 border-riviera-gold overflow-hidden group hover:shadow-lg transition-all">
                <div className="relative aspect-video w-full overflow-hidden">
                  <SlideshowImage images={imageConfig.homepage.grounds} alt="Full grounds access" sizes="(max-width: 1024px) 100vw, 33vw" fit="contain" objectClass="group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-3 font-medium">FULL GROUNDS ACCESS</h3>
                  <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                    Complete access to our beautiful indoor and outdoor spaces
                  </p>
                </div>
              </div>
            </div>

            <AnimatedSection animation="fadeInUp" delay={0.3} className="text-center max-w-md mx-auto" as="div">
              <HoverScale effect="lift">
                <Link 
                  href="/tour"
                  className="bg-riviera-gold text-white px-10 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2 text-center block w-full"
                >
                  EXPLORE ALL FEATURES →
                </Link>
              </HoverScale>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqs={homePage.faqs ?? []}
          title="Frequently Asked Questions About Our Long Island Wedding Venue"
          eyebrow="YOUR QUESTIONS ANSWERED"
          background="white"
        />

        {/* Final CTA - Conversion Focused */}
        <CTASection
          eyebrow="READY TO BOOK YOUR LONG ISLAND WATERFRONT WEDDING?"
          headline="Start Planning Your Dream Massapequa Waterfront Wedding Today"
          description="Schedule a personal tour of our historic Riviera Waterfront Mansion in Massapequa, NY and experience the magic of our Long Island waterfront wedding venue for yourself. Limited wedding dates available for 2026 and 2027. Call now or submit an inquiry to check your date."
          background="dark"
          buttons={[
            {
              text: 'DOWNLOAD OUR WELCOME BROCHURE →',
              href: '/wedding-pricing',
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
      <MobileStickyCTA />

      <JsonLd
        data={pageGraph({
          path: homePage.path,
          name: homePage.title,
          description: homePage.answer,
          faqs: homePage.faqs,
        })}
      />
    </>
  );
}
