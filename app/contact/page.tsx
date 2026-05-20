'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import Link from 'next/link';
import MobileStickyCTA from '../components/MobileStickyCTA';
import Image from 'next/image';
import SlideshowImage from '../components/SlideshowImage';
import { AnimatedSection } from '../components/AnimatedSection';
import { HoverScale } from '../components/HoverScale';
import { useScrollTriggerCleanup, useFadeInUp } from '../lib/useAnimations';
import { imageConfig } from '../lib/imageConfig';

const contactFAQs = [
  {
    question: 'What are your consultation hours?',
    answer: 'We are open for private tours and consultations Tuesday through Sunday, 11:00 AM to 7:00 PM. Call 516 541 5020 to schedule your visit.'
  },
  {
    question: 'How do I schedule a tour of the venue?',
    answer: 'You can schedule a tour by calling us at 516 541 5020 or emailing appointments@rivierawaterfrontmansion.com. We will respond within 24 hours to confirm your appointment.'
  },
  {
    question: 'Do I need an appointment to visit?',
    answer: 'Yes, we require appointments for all tours and consultations. Since we host only one wedding at a time, we want to ensure our full attention is on you during your visit. This allows us to provide a personalized, unhurried experience.'
  },
  {
    question: 'How long does a venue tour take?',
    answer: 'Plan for approximately 60 to 90 minutes for your tour and consultation. This gives you time to explore all our indoor and outdoor spaces, discuss your wedding vision, review menu options, and ask questions about our Long Island waterfront venue.'
  },
  {
    question: 'Can we tour the venue during an event?',
    answer: 'While we occasionally accommodate tours during setup, we prefer to schedule visits when no events are taking place. This ensures you can fully experience the space and have our complete attention without distractions.'
  },
  {
    question: 'Where is Riviera Waterfront Mansion located?',
    answer: 'We are located at 200 E Shore Dr, Massapequa, NY 11758. Our Long Island waterfront venue is conveniently accessible from anywhere in the tri state area with ample complimentary parking on site.'
  },
  {
    question: 'What should I bring to my tour?',
    answer: 'Bring your guest count estimate, preferred wedding date or season, and any specific questions or must haves for your celebration. If you are ready to book, we will provide all necessary paperwork during your visit.'
  },
  {
    question: 'Can I get wedding information before visiting?',
    answer: 'Yes! You can download our comprehensive wedding brochure with package details, menu options, and venue information at rivierawaterfrontmansion.com/wedding-pricing, or reach us directly at appointments@rivierawaterfrontmansion.com.'
  }
];

export default function ContactPage() {
  useScrollTriggerCleanup();
  const heroContentRef = useFadeInUp({ delay: 0.3, duration: 1.2 });

  return (
    <>
      <Header />
      
      <main id="main">
        {/* Hero Section - Editorial 2-Column Layout */}
        <section className="relative min-h-dvh overflow-hidden bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-dvh gap-0">
            {/* Text Column */}
            <div className="lg:col-span-5 flex items-center order-2 lg:order-1 bg-white">
              <div ref={heroContentRef as any} className="px-6 sm:px-10 lg:px-12 xl:px-16 py-16 lg:py-20">
                <p className="text-riviera-gold text-xs sm:text-sm tracking-widest mb-6 font-light">
                  START YOUR WEDDING JOURNEY
                </p>
                <h1 className="font-cormorant text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wider text-riviera-text mb-6 leading-[1.1]">
                  CONTACT
                  <span className="block text-riviera-gold">RIVIERA</span>
                  <span className="block">WATERFRONT</span>
                  <span className="block">MANSION</span>
                </h1>
                <p className="text-base sm:text-lg font-light text-riviera-text/70 mb-8 max-w-md leading-relaxed">
                  Schedule a private tour, check wedding date availability, or request information about our Massapequa waterfront venue. Limited dates available for 2026 and 2027.
                </p>
                <div className="flex flex-col gap-4 max-w-md">
                  <HoverScale effect="lift">
                    <Link 
                      href="/wedding-pricing"
                      className="bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-all text-center block w-full"
                    >
                      DOWNLOAD OUR WELCOME BROCHURE →
                    </Link>
                  </HoverScale>
                  <HoverScale effect="lift">
                    <a 
                      href="tel:+15165415020"
                      className="border-2 border-riviera-gold text-riviera-gold px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-gold hover:text-white transition-all text-center block w-full whitespace-nowrap"
                    >
                      CALL (516) 541 5020
                    </a>
                  </HoverScale>
                </div>
              </div>
            </div>

            {/* Image Column - Full Height */}
            <div className="relative lg:col-span-7 h-[50svh] lg:h-auto order-1 lg:order-2 overflow-hidden">
              <SlideshowImage
                images={imageConfig.pageHeroes.contact as string[]}
                alt="Contact Riviera Waterfront Mansion to plan your Long Island wedding"
                fit="cover"
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                quality={90}
                showPlaceholder
              />
            </div>
          </div>
        </section>

        {/* Quick Contact Info Bar */}
        <section className="bg-riviera-neutral py-10 md:py-12" aria-label="Contact information">
          <div className="mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-3 gap-8 text-center">
              <AnimatedSection animation="fadeInUp" delay={0}>
                <h3 className="text-xs tracking-widest text-riviera-gold mb-2">LOCATION</h3>
                <address className="not-italic text-base font-light text-riviera-text/90">
                  200 E Shore Dr<br />
                  Massapequa, NY 11758
                </address>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={0.1}>
                <h3 className="text-xs tracking-widest text-riviera-gold mb-2">PHONE</h3>
                <a 
                  href="tel:+15165415020" 
                  className="text-base font-light text-riviera-text/90 hover:text-riviera-gold transition-colors"
                >
                  (516) 541 5020
                </a>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={0.2}>
                <h3 className="text-xs tracking-widest text-riviera-gold mb-2">EMAIL</h3>
                <a 
                  href="mailto:appointments@rivierawaterfrontmansion.com" 
                  className="text-base font-light text-riviera-text/90 hover:text-riviera-gold transition-colors break-all"
                >
                  appointments@rivierawaterfrontmansion.com
                </a>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Wedding Brochure Redirect */}
        <section className="py-16 md:py-20 px-6 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-12" as="div">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">PLANNING YOUR WEDDING?</p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text">
                Start With Our Welcome Brochure
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={0.1} as="div">
              <div className="bg-riviera-neutral p-10 md:p-14 text-center max-w-3xl mx-auto">
                <p className="text-riviera-gold text-xs tracking-widest mb-4">FOR ENGAGED COUPLES</p>
                <h3 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-6 leading-tight">
                  Download The Riviera Waterfront Mansion Welcome Brochure
                </h3>
                <p className="text-base font-light text-riviera-text/70 leading-relaxed mb-8 max-w-xl mx-auto">
                  Discover our wedding packages, amenities, venue spaces, and more — all in one place. Download our free welcome brochure to explore the full Riviera Waterfront Mansion experience from the comfort of your own home.
                </p>
                <HoverScale effect="lift">
                  <Link
                    href="/wedding-pricing"
                    className="bg-riviera-gold text-white px-10 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-colors text-center inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2"
                  >
                    DOWNLOAD OUR WELCOME BROCHURE →
                  </Link>
                </HoverScale>
              </div>
            </AnimatedSection>

            {/* Non-wedding divider */}
            <div className="mt-16 text-center">
              <p className="text-riviera-text/50 text-sm font-light tracking-wide">
                For all non-wedding inquiries, please reach out to us below.
              </p>
              <div className="mt-4 w-16 h-px bg-riviera-gold/40 mx-auto" />
            </div>
          </div>
        </section>

        {/* Direct Contact Section */}
        <section id="get-in-touch" className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-riviera-neutral" aria-labelledby="contact-heading">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-12" as="div">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">GET IN TOUCH</p>
              <h2 id="contact-heading" className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-4">
                Reach Our Team Directly
              </h2>
              <p className="text-base font-light text-riviera-text/70 max-w-xl mx-auto">
                For non-wedding questions, or to speak with our team about your visit, call or email us anytime during office hours.
              </p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              {/* Email Card */}
              <AnimatedSection animation="revealFromLeft" as="div">
                <a
                  href="mailto:appointments@rivierawaterfrontmansion.com"
                  className="group bg-white p-8 md:p-10 h-full flex flex-col hover:bg-riviera-gold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2"
                >
                  <p className="text-riviera-gold group-hover:text-white text-xs tracking-widest mb-4 transition-colors">EMAIL US</p>
                  <h3 className="font-cormorant text-2xl md:text-3xl font-light tracking-wide text-riviera-text group-hover:text-white mb-4 leading-tight break-all transition-colors">
                    appointments@rivierawaterfrontmansion.com
                  </h3>
                  <p className="text-sm font-light text-riviera-text/70 group-hover:text-white/90 mb-6 flex-grow transition-colors">
                    We respond to every inquiry within 24 hours during business days.
                  </p>
                  <span className="text-xs tracking-widest text-riviera-text group-hover:text-white font-light transition-colors">
                    SEND AN EMAIL →
                  </span>
                </a>
              </AnimatedSection>

              {/* Phone Card */}
              <AnimatedSection animation="revealFromRight" delay={0.1} as="div">
                <a
                  href="tel:+15165415020"
                  className="group bg-riviera-text p-8 md:p-10 h-full flex flex-col hover:bg-riviera-gold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2"
                >
                  <p className="text-riviera-gold group-hover:text-white text-xs tracking-widest mb-4 transition-colors">CALL US</p>
                  <h3 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white mb-4 leading-tight">
                    (516) 541 5020
                  </h3>
                  <p className="text-sm font-light text-white/80 mb-6 flex-grow">
                    Speak with our team Tuesday through Sunday, 11:00 AM to 7:00 PM.
                  </p>
                  <span className="text-xs tracking-widest text-white font-light">
                    CALL NOW →
                  </span>
                </a>
              </AnimatedSection>
            </div>

            {/* Office Hours */}
            <AnimatedSection animation="fadeInUp" delay={0.2} as="div">
              <div className="bg-white p-8 md:p-10 text-center">
                <p className="text-riviera-gold text-xs tracking-widest mb-3">CONSULTATION HOURS</p>
                <h3 className="font-cormorant text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-4">
                  Visit Our Massapequa Venue By Appointment
                </h3>
                <p className="text-base font-light text-riviera-text/70 mb-2">
                  Tuesday through Sunday, 11:00 AM to 7:00 PM
                </p>
                <p className="text-sm font-light text-riviera-text/50">
                  Closed Monday. Appointments required for all venue tours.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Map Section */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-riviera-neutral">
          {/* Google Maps Embed */}
          <div className="absolute inset-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.8995934891676!2d-73.47327!3d40.664396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e9de0a9d7d7d7d%3A0x7d7d7d7d7d7d7d7d!2sRiviera%20Waterfront%20Mansion!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) contrast(90%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Riviera Waterfront Mansion Location Map"
            />
          </div>
          
          {/* Overlay Content */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/40 flex items-center justify-center">
            <div className="text-center px-6 max-w-2xl">
              <AnimatedSection animation="fadeInUp" as="div">
                <p className="text-riviera-gold text-xs sm:text-sm tracking-widest mb-4 font-light">OUR LOCATION</p>
                <h3 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-riviera-text mb-4">
                  200 E Shore Dr, Massapequa, NY 11758
                </h3>
                <p className="text-sm md:text-base font-light text-riviera-text/70 mb-8 leading-relaxed">
                  Conveniently located on Long Island, easy to reach from anywhere in the tri-state area
                </p>
                <HoverScale effect="lift">
                  <a
                    href="https://www.google.com/maps/place/Riviera+Waterfront+Mansion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-all shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2 text-center block max-w-md mx-auto"
                  >
                    GET DIRECTIONS →
                  </a>
                </HoverScale>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqs={contactFAQs}
          title="Contact & Tour Questions"
          eyebrow="PLANNING YOUR VISIT"
          background="white"
        />

        {/* Final CTA - Explore More */}
        <CTASection
          eyebrow="EXPLORE WHILE YOU WAIT"
          headline="Continue Planning Your Dream Long Island Wedding"
          description="Take a virtual tour of our stunning Massapequa waterfront venue, explore our chef inspired Continental menu, or discover our hand selected wedding vendors while you wait to visit us in person."
          background="dark"
          buttons={[
            {
              text: 'EXPLORE VIRTUAL TOUR →',
              href: '/tour',
              intent: 'tour',
            },
            {
              text: 'VIEW WEDDING MENU',
              href: '/menu',
              intent: 'menu',
            },
          ]}
        />
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
                name: 'Contact',
                item: 'https://www.rivierawaterfrontmansion.com/contact'
              }
            ]
          })
        }}
      />
      {/* JSON-LD LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://www.rivierawaterfrontmansion.com/#organization',
            name: 'Riviera Waterfront Mansion',
            url: 'https://www.rivierawaterfrontmansion.com/contact',
            telephone: '+15165415020',
            email: 'appointments@rivierawaterfrontmansion.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '200 E Shore Dr',
              addressLocality: 'Massapequa',
              addressRegion: 'NY',
              postalCode: '11758',
              addressCountry: 'US'
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '11:00',
                closes: '19:00'
              }
            ]
          })
        }}
      />
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: contactFAQs.map(faq => ({
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
      <MobileStickyCTA />
    </>
  );
}
