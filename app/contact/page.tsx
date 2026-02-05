'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import InquiryForm from '../components/InquiryForm';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedSection } from '../components/AnimatedSection';
import { HoverScale } from '../components/HoverScale';
import { useScrollTriggerCleanup, useFadeInUp } from '../lib/useAnimations';
import { imageConfig } from '../lib/imageConfig';

const contactFAQs = [
  {
    question: 'What are your consultation hours?',
    answer: 'We are open for private tours and consultations Tuesday through Sunday. Hours are 11am to 8pm Tuesday through Friday, 10am to 8pm Saturday, and 10am to 7pm Sunday. Monday is by appointment only. Call 516 541 5020 to schedule your visit.'
  },
  {
    question: 'How do I schedule a tour of the venue?',
    answer: 'You can schedule a tour by calling us at 516 541 5020, emailing appointments@rivierawaterfrontmansion.com, or submitting the inquiry form on this page. We will respond within 24 hours to confirm your appointment.'
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
    question: 'Can I download pricing information before visiting?',
    answer: 'Yes! You can download our comprehensive wedding brochure with pricing, package details, and menu options. Look for the download button on this page or request it via email at appointments@rivierawaterfrontmansion.com.'
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
        <section className="relative min-h-[80vh] overflow-hidden bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh] gap-0">
            {/* Text Column */}
            <div className="lg:col-span-5 flex items-center order-2 lg:order-1 bg-white">
              <div ref={heroContentRef as any} className="px-6 sm:px-10 lg:px-12 xl:px-16 py-16 lg:py-20">
                <p className="text-riviera-gold text-xs sm:text-sm tracking-widest mb-6 font-light">
                  START YOUR WEDDING JOURNEY
                </p>
                <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light tracking-wider text-riviera-text mb-6 leading-[1.1]">
                  CONTACT
                  <span className="block text-riviera-gold">RIVIERA</span>
                  <span className="block">WATERFRONT</span>
                  <span className="block">MANSION</span>
                </h1>
                <p className="text-base sm:text-lg font-light text-riviera-text/70 mb-8 max-w-md leading-relaxed">
                  Schedule a private tour, check wedding date availability, or request information about our Massapequa waterfront venue. Limited dates available for 2026 and 2027.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <HoverScale effect="lift">
                    <a 
                      href="#inquiry-form"
                      className="bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-all text-center block"
                    >
                      INQUIRE NOW →
                    </a>
                  </HoverScale>
                  <HoverScale effect="lift">
                    <a 
                      href="tel:+15165415020"
                      className="border-2 border-riviera-gold text-riviera-gold px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-gold hover:text-white transition-all text-center block"
                    >
                      CALL (516) 541 5020
                    </a>
                  </HoverScale>
                </div>
              </div>
            </div>

            {/* Image Column - Full Height */}
            <div className="relative lg:col-span-7 h-[50vh] lg:h-auto order-1 lg:order-2 overflow-hidden">
              <Image 
                src="/images/large/_0359652-by-p.jpg"
                alt="Contact Riviera Waterfront Mansion to plan your Long Island wedding"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
                quality={90}
              />
            </div>
          </div>
        </section>

        {/* Quick Contact Info Bar */}
        <section className="bg-riviera-neutral py-10 md:py-12">
          <div className="mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
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
                  className="text-base font-light text-riviera-text/90 hover:text-riviera-gold transition-colors"
                >
                  appointments@rivierawaterfrontmansion.com
                </a>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Inquiry Options */}
        <section className="py-16 md:py-20 px-6 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-12" as="div">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">HOW CAN WE HELP?</p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text">
                Choose your inquiry type
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection animation="revealFromLeft" as="div">
                <div className="bg-riviera-neutral p-8 h-full flex flex-col">
                  <p className="text-riviera-gold text-xs tracking-widest mb-3">FOR ENGAGED COUPLES</p>
                  <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text mb-4">
                    Long Island wedding inquiries
                  </h3>
                  <p className="text-sm font-light text-riviera-text/80 mb-6 flex-grow">
                    If you are interested in hosting your waterfront wedding at Riviera Waterfront Mansion in Massapequa, NY, please use the form below or download our comprehensive Long Island wedding pricing brochure. Limited dates available for 2026 and 2027.
                  </p>
                  <HoverScale effect="lift">
                    <a 
                      href="#inquiry-form"
                      className="inline-block bg-riviera-gold text-white px-6 py-3 text-sm font-light tracking-wider hover:bg-riviera-text transition-colors"
                    >
                      WEDDING INQUIRY →
                    </a>
                  </HoverScale>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="revealFromRight" delay={0.1} as="div">
                <div className="bg-white border-2 border-riviera-neutral p-8 h-full flex flex-col">
                  <p className="text-riviera-gold text-xs tracking-widest mb-3">GENERAL QUESTIONS</p>
                  <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text mb-4">
                    Other event inquiries
                  </h3>
                  <p className="text-sm font-light text-riviera-text/80 mb-6 flex-grow">
                    If you are looking to host other special events at our Massapequa waterfront venue, we would love to hear from you. Please note: Riviera Waterfront Mansion specializes exclusively in weddings.
                  </p>
                  <HoverScale effect="lift">
                    <a 
                      href="#inquiry-form"
                      className="inline-block bg-white border-2 border-riviera-gold text-riviera-gold px-6 py-3 text-sm font-light tracking-wider hover:bg-riviera-gold hover:text-white transition-all"
                    >
                      GENERAL INQUIRY →
                    </a>
                  </HoverScale>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section id="inquiry-form" className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-riviera-neutral">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Contact Form */}
              <AnimatedSection animation="fadeInUp" delay={0.2} as="div" className="h-full">
                <div className="bg-white p-8 md:p-10 h-full flex flex-col">
                  <p className="text-riviera-gold text-xs tracking-widest mb-3">REQUEST INFORMATION</p>
                  <h2 className="font-cormorant text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-8">
                    Request your Long Island wedding date
                  </h2>
                  <InquiryForm />
                </div>
              </AnimatedSection>

              {/* Contact Information & Office Hours */}
              <AnimatedSection animation="fadeInUp" delay={0.3} as="div" className="h-full">
                <div className="flex flex-col gap-8 h-full">
                  {/* Office Hours */}
                  <div className="bg-riviera-text p-8 text-white">
                    <p className="text-riviera-gold text-xs tracking-widest mb-3">CONSULTATION HOURS</p>
                    <h3 className="font-cormorant text-2xl font-light tracking-wide mb-6">
                      Visit our Massapequa venue
                    </h3>
                    <div className="text-sm font-light leading-relaxed opacity-90 space-y-2">
                      <div className="flex justify-between">
                        <span>Monday</span>
                        <span>Appointment Only</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tuesday</span>
                        <span>11:00 am – 8:00 pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wednesday</span>
                        <span>11:00 am – 8:00 pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Thursday</span>
                        <span>11:00 am – 8:00 pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday</span>
                        <span>11:00 am – 8:00 pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 am – 8:00 pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>10:00 am – 7:00 pm</span>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <p className="text-riviera-gold text-sm">
                        Schedule your private wedding venue tour today
                      </p>
                    </div>
                  </div>

                  {/* Download Brochure */}
                  <div className="bg-white p-8 border-2 border-riviera-gold">
                    <p className="text-riviera-gold text-xs tracking-widest mb-3">FREE DOWNLOAD</p>
                    <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text mb-4">
                      Wedding brochure & pricing
                    </h3>
                    <p className="text-sm font-light text-riviera-text/70 mb-6">
                      Get detailed information about our Massapequa waterfront venue, Long Island wedding packages, menu options, and comprehensive pricing
                    </p>
                    <HoverScale effect="lift">
                      <a
                        href="/brochure.pdf"
                        download
                        className="inline-block bg-riviera-gold text-white px-6 py-3 text-sm font-light tracking-wider hover:bg-riviera-text transition-colors"
                      >
                        DOWNLOAD PDF →
                      </a>
                    </HoverScale>
                  </div>

                  {/* Quick Contact */}
                  <div className="bg-white p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-riviera-gold text-xs tracking-widest mb-3">PREFER TO CALL?</p>
                      <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text mb-4">
                        Speak with our team
                      </h3>
                      <p className="text-sm font-light text-riviera-text/70 mb-6">
                        Our friendly staff is ready to answer your questions and help you begin planning your dream Long Island waterfront wedding
                      </p>
                    </div>
                    <HoverScale effect="lift">
                      <a
                        href="tel:+15165415020"
                        className="inline-flex items-center gap-2 text-2xl font-light text-riviera-text hover:text-riviera-gold transition-colors"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        (516) 541 5020
                      </a>
                    </HoverScale>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-white">
          <div className="absolute inset-0">
            {/* In production, embed Google Maps iframe here */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <p className="text-riviera-gold text-sm tracking-widest mb-3">OUR LOCATION</p>
                <h3 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-4">
                  200 E Shore Dr, Massapequa, NY 11758
                </h3>
                <p className="text-sm font-light text-riviera-text/70 mb-6">
                  Conveniently located on Long Island, easy to reach from anywhere in the tri-state area
                </p>
                <HoverScale effect="lift">
                  <a
                    href="https://www.google.com/maps/place/Riviera+Waterfront+Mansion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-colors"
                  >
                    GET DIRECTIONS →
                  </a>
                </HoverScale>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqs={contactFAQs}
          title="Contact & tour questions"
          eyebrow="PLANNING YOUR VISIT"
          background="white"
        />

        {/* Final CTA - Explore More */}
        <CTASection
          eyebrow="EXPLORE WHILE YOU WAIT"
          headline="Continue planning your dream Long Island wedding"
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
                name: 'Contact'
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
    </>
  );
}
