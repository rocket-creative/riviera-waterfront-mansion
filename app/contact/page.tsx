'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import InquiryForm from '../components/InquiryForm';
import Link from 'next/link';
import { AnimatedSection } from '../components/AnimatedSection';
import { HoverScale } from '../components/HoverScale';
import { useScrollTriggerCleanup } from '../lib/useAnimations';

export default function ContactPage() {
  useScrollTriggerCleanup();

  return (
    <>
      <Header />
      
      <main id="main">
        {/* Hero Section */}
        <section className="bg-riviera-neutral py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" className="max-w-4xl mx-auto text-center" as="div">
            <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-riviera-text mb-6">
              Start planning your Long Island waterfront wedding
            </h1>
            <p className="text-lg md:text-xl font-light text-riviera-text/70 max-w-2xl mx-auto mb-6">
              Contact Riviera Waterfront Mansion in Massapequa to schedule a private venue tour, check wedding date availability, or request Long Island wedding information. Limited dates available.
            </p>
            <div className="bg-white p-6 max-w-md mx-auto border border-riviera-neutral">
              <h2 className="text-sm tracking-widest text-riviera-gold mb-4">OFFICE HOURS</h2>
              <div className="text-sm font-light text-riviera-text/80 space-y-1">
                <p><strong>Monday:</strong> Appointment Only</p>
                <p><strong>Tuesday:</strong> 11:00 am – 8:00 pm</p>
                <p><strong>Wednesday:</strong> 11:00 am – 8:00 pm</p>
                <p><strong>Thursday:</strong> 11:00 am – 8:00 pm</p>
                <p><strong>Friday:</strong> 11:00 am – 8:00 pm</p>
                <p><strong>Saturday:</strong> 10:00 am – 8:00 pm</p>
                <p><strong>Sunday:</strong> 10:00 am – 7:00 pm</p>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Inquiry Options */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <AnimatedSection animation="revealFromLeft" as="div">
                <div className="bg-riviera-neutral p-8 h-full">
                  <h2 className="text-2xl font-light tracking-wide text-riviera-text mb-4">
                    Long Island wedding inquiries
                  </h2>
                  <p className="text-sm font-light text-riviera-text/80 mb-6">
                    If you are interested in hosting your waterfront wedding at Riviera Waterfront Mansion in Massapequa, NY, please use the form below or download our comprehensive Long Island wedding pricing brochure. Limited dates available for 2026 and 2027.
                  </p>
                  <HoverScale effect="lift">
                    <Link 
                      href="/contact#form"
                      className="inline-block bg-riviera-gold text-white px-6 py-3 text-sm font-light tracking-wider hover:bg-riviera-dark-brown transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold"
                    >
                      INQUIRE HERE →
                    </Link>
                  </HoverScale>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="revealFromRight" delay={0.1} as="div">
                <div className="bg-white border border-riviera-neutral p-8 h-full">
                  <h2 className="text-2xl font-light tracking-wide text-riviera-text mb-4">
                    Other event inquiries at our Long Island venue
                  </h2>
                  <p className="text-sm font-light text-riviera-text/80 mb-6">
                    If you are looking to host other special events at our Massapequa waterfront venue, we would love to hear from you. Please note: Riviera Waterfront Mansion specializes exclusively in weddings.
                  </p>
                  <HoverScale effect="lift">
                    <Link 
                      href="/contact#form"
                      className="inline-block bg-white border-2 border-riviera-gold text-riviera-gold px-6 py-3 text-sm font-light tracking-wider hover:bg-riviera-gold hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold"
                    >
                      INQUIRE HERE →
                    </Link>
                  </HoverScale>
                </div>
              </AnimatedSection>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <AnimatedSection animation="fadeInUp" delay={0.2} as="div">
                <div id="form">
                  <h2 className="font-cormorant text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-8">
                    Request your Long Island wedding date
                  </h2>
                  <InquiryForm />
                </div>
              </AnimatedSection>

              {/* Contact Information */}
              <AnimatedSection animation="fadeInUp" delay={0.3} as="div">
                <div>
                  <h2 className="font-cormorant text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-8">
                    Visit our Massapequa waterfront wedding venue
                  </h2>
                
                <div className="space-y-8 mb-12">
                  <div>
                    <h3 className="text-sm tracking-widest text-riviera-gold mb-3">LOCATION</h3>
                    <address className="not-italic text-base font-light text-riviera-text/80 leading-relaxed">
                      200 E Shore Dr<br />
                      Massapequa, NY 11758
                    </address>
                  </div>

                  <div>
                    <h3 className="text-sm tracking-widest text-riviera-gold mb-3">PHONE</h3>
                    <a 
                      href="tel:+15165415020" 
                      className="text-base font-light text-riviera-text/80 hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold"
                    >
                      (516) 541 5020
                    </a>
                  </div>

                  <div>
                    <h3 className="text-sm tracking-widest text-riviera-gold mb-3">WEDDING CONSULTATION HOURS</h3>
                    <div className="text-sm font-light text-riviera-text/80 leading-relaxed">
                      <p>Monday: Appointment only</p>
                      <p>Tuesday: 11:00 am to 7:00 pm</p>
                      <p>Wednesday: 11:00 am to 7:00 pm</p>
                      <p>Thursday: 11:00 am to 7:00 pm</p>
                      <p>Friday: 11:00 am to 7:00 pm</p>
                      <p>Saturday: 11:00 am to 7:00 pm</p>
                      <p>Sunday: 11:00 am to 7:00 pm</p>
                      <p className="mt-2 text-riviera-gold">Schedule your private Long Island wedding venue tour today</p>
                    </div>
                  </div>
                </div>

                <div className="bg-riviera-neutral p-8">
                  <h3 className="font-cormorant text-lg font-light tracking-wide text-riviera-text mb-4">
                    Download our Long Island wedding brochure
                  </h3>
                  <p className="text-sm font-light text-riviera-text/70 mb-6">
                    Get detailed information about our Massapequa waterfront venue, Long Island wedding packages, menu options, and comprehensive pricing for Riviera Waterfront Mansion
                  </p>
                  <HoverScale effect="lift">
                    <a
                      href="/brochure.pdf"
                      download
                      className="inline-block bg-riviera-gold text-white px-6 py-3 text-sm font-light tracking-wider hover:bg-riviera-dark-brown transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
                    >
                      DOWNLOAD PDF →
                    </a>
                  </HoverScale>
                </div>
              </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-riviera-neutral py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-cormorant text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-8 text-center">
              Conveniently located Massapequa waterfront venue, easy to reach from anywhere on Long Island
            </h2>
            <div className="aspect-video bg-white border border-riviera-neutral/50">
              {/* Map placeholder - In production, embed Google Maps */}
              <div className="w-full h-full flex items-center justify-center text-riviera-text/40">
                <p className="text-sm">Map: 200 E Shore Dr, Massapequa, NY 11758</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
