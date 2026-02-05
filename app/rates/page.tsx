'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import RatesCalendar from '../components/RatesCalendar';
import { AnimatedSection } from '../components/AnimatedSection';
import { HoverScale } from '../components/HoverScale';
import Link from 'next/link';
import Image from 'next/image';

const ratesFAQs = [
  {
    question: 'How much does a wedding at Riviera Waterfront Mansion cost?',
    answer: 'Wedding packages at Riviera start at $150 pp++ for 2027. Pricing varies by day of week and season. All wedding days require a minimum of 150 guests. Thursday and Sunday weddings start at $150 pp++, Friday at $180 pp++, and Saturday at $216 pp++. Busy season months (May through November) have a 20% increase. Contact us for a personalized quote based on your date and guest count.'
  },
  {
    question: 'What is included in a Riviera wedding package?',
    answer: 'Our all inclusive packages include outdoor ceremony setup, cocktail hour with passed hors d\'oeuvres, gourmet continental dinner service, premium open bar (5+ hours), professional wait staff, linens and table settings, dedicated event coordinator, and exclusive use of the venue for your celebration. You may bring your own DJ, photographer, and florist.'
  },
  {
    question: 'Does Riviera offer payment plans for weddings?',
    answer: 'Yes, Riviera Waterfront Mansion offers flexible payment plans to help you budget for your celebration. Deposits secure your date, with remaining payments spread over scheduled milestones leading up to your wedding. Our team will work with you to create a payment timeline that fits your needs.'
  },
  {
    question: 'How far in advance should I book my wedding date at Riviera?',
    answer: 'Popular Saturday dates in peak season (May through October) book 12 to 18 months in advance. For the most date flexibility, we recommend reaching out 12+ months before your preferred date. Thursday, Friday, and Sunday dates often have more availability with shorter lead times. Check our calendar or contact us to see current availability.'
  },
  {
    question: 'Are there discounts for off peak wedding dates?',
    answer: 'Yes! Our non busy months (January, February, March, April, and December) offer lower per person pricing without the 20% seasonal increase. Thursday and Sunday weddings also provide significant savings compared to Saturday events. Contact us to discuss budget friendly date options that still deliver a beautiful Riviera celebration.'
  },
  {
    question: 'What does "++" mean?',
    answer: '"++" indicates that standard tax and service are additional. Your detailed proposal will show how tax and service are applied to your total.'
  },
  {
    question: 'Do you ever host more than one event per day?',
    answer: 'No. Riviera Waterfront Mansion is a one event per day venue. Once a date is reserved, that day is closed to any other event.'
  },
  {
    question: 'What if my guest count changes?',
    answer: 'We understand that final guest counts can shift. Your contract will list the agreed minimum, and final billing is based on your guaranteed guest count provided closer to the event date.'
  }
];

export default function RatesPage() {
  return (
    <>
      <Header />
      
      <main id="main">
        {/* Hero Section - Editorial 2-Column Layout */}
        <section className="relative min-h-[80vh] overflow-hidden bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh] gap-0">
            {/* Text Column */}
            <div className="lg:col-span-5 flex items-center order-2 lg:order-1 bg-white">
              <div className="px-6 sm:px-10 lg:px-12 xl:px-16 py-16 lg:py-20">
                <p className="text-riviera-gold text-xs sm:text-sm tracking-widest mb-6 font-light">
                  2027 AVAILABILITY
                </p>
                <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light tracking-wider text-riviera-text mb-6 leading-[1.1]">
                  2027 Rates &
                  <span className="block text-riviera-gold">Availability</span>
                </h1>
                <p className="text-base sm:text-lg font-light text-riviera-text/70 mb-8 max-w-md leading-relaxed">
                  Transparent, date based pricing for your Riviera wedding. We know that clear, upfront pricing makes planning easier.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <HoverScale effect="lift">
                    <Link 
                      href="/contact"
                      className="bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 text-center block"
                    >
                      CHECK MY DATE →
                    </Link>
                  </HoverScale>
                  <HoverScale effect="lift">
                    <a 
                      href="tel:+15165415020"
                      className="border-2 border-riviera-gold text-riviera-gold px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-gold hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 text-center block"
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
                src="/images/large/_DSC5114aa-port-2.jpg"
                alt="Elegant wedding reception at Riviera Waterfront Mansion grand ballroom in Massapequa, Long Island"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
                quality={90}
              />
            </div>
          </div>
        </section>

        {/* Pricing Overview */}
        <section className="py-20 md:py-28 px-6 sm:px-8 lg:px-12 bg-riviera-neutral">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16" as="div">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">HOW OUR PRICING WORKS</p>
              <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-riviera-text mb-4">
                Simple, transparent pricing
              </h2>
              <p className="text-lg font-light text-riviera-text/70 max-w-2xl mx-auto">
                Our 2027 rates are designed to be simple and predictable, based on per person pricing starting at $150 pp++. We book weddings Wednesday through Sunday.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <AnimatedSection animation="fadeInUp" delay={0.1} as="div">
                <div className="bg-white p-8 text-center border-2 border-riviera-gold/20">
                  <div className="text-4xl font-light text-riviera-gold mb-4">$150 pp<sup>++</sup></div>
                  <h3 className="text-xs tracking-widest text-riviera-text mb-3">THURSDAY & SUNDAY</h3>
                  <p className="text-sm font-light text-riviera-text/70">
                    150 guest minimum
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={0.2} as="div">
                <div className="bg-white p-8 text-center border-2 border-riviera-gold/20">
                  <div className="text-4xl font-light text-riviera-gold mb-4">$180 pp<sup>++</sup></div>
                  <h3 className="text-xs tracking-widest text-riviera-text mb-3">FRIDAY</h3>
                  <p className="text-sm font-light text-riviera-text/70">
                    150 guest minimum
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={0.3} as="div">
                <div className="bg-white p-8 text-center border-2 border-riviera-gold/20">
                  <div className="text-4xl font-light text-riviera-gold mb-4">$216 pp<sup>++</sup></div>
                  <h3 className="text-xs tracking-widest text-riviera-text mb-3">SATURDAY</h3>
                  <p className="text-sm font-light text-riviera-text/70">
                    150 guest minimum
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={0.4} as="div">
                <div className="bg-white p-8 text-center border-2 border-riviera-gold/20">
                  <div className="text-5xl font-light text-riviera-gold mb-4">+20%</div>
                  <h3 className="text-xs tracking-widest text-riviera-text mb-3">BUSY SEASON</h3>
                  <p className="text-sm font-light text-riviera-text/70">
                    May through November
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fadeInUp" delay={0.5} as="div">
              <div className="bg-riviera-gold/10 border border-riviera-gold/30 p-6 text-center">
                <p className="text-sm font-light text-riviera-text/80 leading-relaxed">
                  <strong className="font-normal text-riviera-text">Riviera Waterfront Mansion wedding packages start at $150 pp++ for 2027</strong>, with all inclusive pricing that covers ceremony, cocktail hour, reception, catering, and bar service. We book weddings Wednesday through Sunday. Pricing varies by day of week and season, with busy months (May through November) reflecting a 20% increase. Payment plans and flexible deposits are available.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Interactive Calendar */}
        <section className="py-20 md:py-28 px-6 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16" as="div">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">2027 CALENDAR</p>
              <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-riviera-text mb-4">
                Explore 2027 dates & starting rates
              </h2>
              <p className="text-lg font-light text-riviera-text/70 max-w-2xl mx-auto">
                Click any available date to see the starting per person rate, the guest minimum for that day, and an estimated total based on your guest count
              </p>
            </AnimatedSection>

            <RatesCalendar />
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 md:py-28 px-6 sm:px-8 lg:px-12 bg-riviera-neutral">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16" as="div">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">WHAT&apos;S INCLUDED</p>
              <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-riviera-text mb-4">
                When you reserve your date
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection animation="fadeInUp" delay={0.1} as="div">
                <div className="bg-white p-8 border border-riviera-gold/20">
                  <div className="flex items-start gap-4">
                    <div className="text-riviera-gold text-2xl flex-shrink-0">✓</div>
                    <div>
                      <h3 className="text-sm tracking-wider text-riviera-text mb-2 font-medium">EXCLUSIVE USE OF THE VENUE</h3>
                      <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                        Complete access to the mansion and grounds for the duration of your event
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={0.15} as="div">
                <div className="bg-white p-8 border border-riviera-gold/20">
                  <div className="flex items-start gap-4">
                    <div className="text-riviera-gold text-2xl flex-shrink-0">✓</div>
                    <div>
                      <h3 className="text-sm tracking-wider text-riviera-text mb-2 font-medium">INDOOR & OUTDOOR CEREMONY OPTIONS</h3>
                      <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                        Beautiful ceremony spaces with weather contingency planning
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={0.2} as="div">
                <div className="bg-white p-8 border border-riviera-gold/20">
                  <div className="flex items-start gap-4">
                    <div className="text-riviera-gold text-2xl flex-shrink-0">✓</div>
                    <div>
                      <h3 className="text-sm tracking-wider text-riviera-text mb-2 font-medium">PRIVATE BRIDAL SUITE & GROOM&apos;S QUARTERS</h3>
                      <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                        Elegant preparation spaces for your wedding party
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={0.25} as="div">
                <div className="bg-white p-8 border border-riviera-gold/20">
                  <div className="flex items-start gap-4">
                    <div className="text-riviera-gold text-2xl flex-shrink-0">✓</div>
                    <div>
                      <h3 className="text-sm tracking-wider text-riviera-text mb-2 font-medium">ELEGANT BALLROOM RECEPTION</h3>
                      <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                        Professional service staff and customizable floor plans
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={0.3} as="div">
                <div className="bg-white p-8 border border-riviera-gold/20">
                  <div className="flex items-start gap-4">
                    <div className="text-riviera-gold text-2xl flex-shrink-0">✓</div>
                    <div>
                      <h3 className="text-sm tracking-wider text-riviera-text mb-2 font-medium">WATERFRONT GARDENS & DOCK ACCESS</h3>
                      <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                        Manicured grounds perfect for stunning portraits
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={0.35} as="div">
                <div className="bg-white p-8 border border-riviera-gold/20">
                  <div className="flex items-start gap-4">
                    <div className="text-riviera-gold text-2xl flex-shrink-0">✓</div>
                    <div>
                      <h3 className="text-sm tracking-wider text-riviera-text mb-2 font-medium">VENDOR COORDINATION</h3>
                      <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
                        Work with your chosen vendors for a seamless event flow
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqs={ratesFAQs}
          title="Common questions about rates & booking"
          eyebrow="QUESTIONS ANSWERED"
          background="white"
        />

        {/* Final CTA */}
        <CTASection
          eyebrow="READY TO RESERVE YOUR 2027 DATE?"
          headline="Let's plan your dream Massapequa waterfront wedding"
          description="Schedule a personal tour of our historic Riviera Waterfront Mansion and experience the magic of our Long Island waterfront wedding venue for yourself. Limited wedding dates available for 2027. Call now or submit an inquiry to check your date."
          background="dark"
          buttons={[
            {
              text: 'REQUEST MY PROPOSAL →',
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
    </>
  );
}
