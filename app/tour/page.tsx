'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import InlineCTA from '../components/InlineCTA';
import FAQSection from '../components/FAQSection';
import Link from 'next/link';
import Image from 'next/image';
import { getTourPreview, imageConfig } from '../lib/imageConfig';
import { AnimatedSection } from '../components/AnimatedSection';
import { HoverScale } from '../components/HoverScale';
import { useStaggerChildren, useScrollTriggerCleanup, useFadeInUp } from '../lib/useAnimations';

const tourFAQs = [
  {
    question: 'Can I see all areas of the venue during a tour?',
    answer: 'Yes! During your in person tour, you will see the grand entrance lobby, bridal suite, indoor and outdoor ceremony spaces, cocktail areas, grand ballroom with dance floor, bars, balconies, and all waterfront photography locations. We show you every space available for your Long Island wedding.'
  },
  {
    question: 'How does the virtual tour compare to an in person visit?',
    answer: 'Our virtual tour offers a comprehensive view of all our spaces, but nothing compares to experiencing our Massapequa waterfront venue in person. We encourage you to schedule a private tour to see the stunning water views, feel the ambiance, and envision your perfect wedding day.'
  },
  {
    question: 'What indoor spaces are available?',
    answer: 'Indoor spaces include a grand entrance lobby, luxury bridal suite with two balconies, elegant indoor ceremony space, indoor cocktail reception area, and our magnificent grand ballroom with waterfront views. All spaces are climate controlled year round.'
  },
  {
    question: 'What outdoor spaces can we use?',
    answer: 'Outdoor spaces include a stunning waterfront ceremony area overlooking the water, outdoor cocktail reception space, waterfront balconies for photos, and full access to our beautiful landscaped grounds. Perfect for Long Island outdoor weddings and photography.'
  },
  {
    question: 'Can we take photos everywhere on the property?',
    answer: 'Absolutely! You and your photographer have complete access to all indoor and outdoor areas including waterfront locations, gardens, balconies, the grand staircase, and all architectural details. Our venue provides countless stunning Long Island wedding photo opportunities.'
  },
  {
    question: 'Is the entire venue ours for the day?',
    answer: 'Yes! We host only one wedding at a time, so the entire Riviera Waterfront Mansion is exclusively yours. All spaces, grounds, and amenities are available for your private use throughout your celebration.'
  },
  {
    question: 'Are ceremony and reception in the same location?',
    answer: 'Yes, both ceremony and reception take place at our Massapequa waterfront venue. Guests can enjoy cocktail hour while we flip the ceremony space, or you can use our separate outdoor ceremony area and indoor reception spaces.'
  },
  {
    question: 'What makes your venue unique?',
    answer: 'Our historic waterfront mansion has been family owned for over 75 years, offering one wedding at a time for complete exclusivity, stunning water views from multiple spaces, both indoor and outdoor options, and three generations of wedding expertise. We set the standard for Long Island wedding venues.'
  }
];

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
  useScrollTriggerCleanup();
  const gridRef = useStaggerChildren('.tour-card', { stagger: 0.08, duration: 0.9 });
  const heroContentRef = useFadeInUp({ delay: 0.3, duration: 1.2 });

  return (
    <>
      <Header />
      
      <main id="main">
        {/* Hero Section - Editorial 2-Column Layout */}
        <section className="relative min-h-[80vh] overflow-hidden bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh] gap-0">
            {/* Image Column - Full Height */}
            <div className="relative lg:col-span-7 h-[50vh] lg:h-auto order-1 lg:order-1 overflow-hidden">
              <Image 
                src="/images/large/_DSC8868sa-p.jpg"
                alt="Stunning virtual tour of Riviera Waterfront Mansion Long Island wedding venue in Massapequa NY"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
                quality={90}
              />
            </div>

            {/* Text Column */}
            <div className="lg:col-span-5 flex items-center order-2 lg:order-2 bg-white">
              <div ref={heroContentRef as any} className="px-6 sm:px-10 lg:px-12 xl:px-16 py-16 lg:py-20">
                <p className="text-riviera-gold text-xs sm:text-sm tracking-widest mb-6 font-light">
                  EXPLORE OUR MASSAPEQUA WATERFRONT VENUE
                </p>
                <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light tracking-wider text-riviera-text mb-6 leading-[1.1]">
                  VIRTUAL TOUR
                  <span className="block text-riviera-gold">OF RIVIERA</span>
                  <span className="block">WATERFRONT</span>
                  <span className="block">MANSION</span>
                </h1>
                <p className="text-base sm:text-lg font-light text-riviera-text/70 mb-8 max-w-md leading-relaxed">
                  Step inside our stunning Long Island waterfront wedding venue. Explore every corner from the grand entrance to the elegant reception spaces and discover why couples choose Riviera for their dream wedding.
                </p>
                <HoverScale effect="lift">
                  <a 
                    href="#tour-gallery"
                    className="bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-all text-center block"
                  >
                    START EXPLORING →
                  </a>
                </HoverScale>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar - Quick Stats */}
        <section className="bg-riviera-neutral py-10 md:py-12">
          <div className="mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <AnimatedSection animation="fadeInUp" delay={0}>
                <div className="text-4xl md:text-5xl font-light text-riviera-gold mb-2">14</div>
                <h3 className="text-xs tracking-widest text-riviera-text mb-1">STUNNING SPACES</h3>
                <p className="text-xs font-light text-riviera-text/70">Indoor and outdoor venues to explore</p>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={0.1}>
                <div className="text-4xl md:text-5xl font-light text-riviera-gold mb-2">350</div>
                <h3 className="text-xs tracking-widest text-riviera-text mb-1">GUEST CAPACITY</h3>
                <p className="text-xs font-light text-riviera-text/70">Spacious waterfront estate for grand celebrations</p>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={0.2}>
                <div className="text-4xl md:text-5xl font-light text-riviera-gold mb-2">360°</div>
                <h3 className="text-xs tracking-widest text-riviera-text mb-1">WATERFRONT VIEWS</h3>
                <p className="text-xs font-light text-riviera-text/70">Stunning vistas from every angle</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Tour Grid - Photography First Gallery */}
        <section id="tour-gallery" className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-white">
          <AnimatedSection animation="fadeInUp" className="text-center mb-12" as="div">
            <p className="text-riviera-gold text-sm tracking-widest mb-3">EXPLORE EVERY SPACE</p>
            <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-riviera-text mb-4">
              Discover our Long Island waterfront wedding venue
            </h2>
            <p className="text-lg font-light text-riviera-text/70 max-w-2xl mx-auto">
              Click on any space below to view the full photo gallery and learn more about each area of our historic Massapequa mansion
            </p>
          </AnimatedSection>

          <div ref={gridRef as any} className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {tourSections.map((section, index) => (
              <div key={section.slug} className="tour-card">
                <Link
                  href={`/tour/${section.slug}`}
                  className="group relative overflow-hidden block aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
                >
                  {/* Photo does the heavy lifting */}
                  <div className="relative w-full h-full overflow-hidden">
                    <Image 
                      src={getTourPreview(section.slug)}
                      alt={`${section.title} at Riviera Waterfront Mansion Long Island wedding venue in Massapequa, NY`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      quality={80}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 transition-opacity group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                    <p className="text-riviera-gold text-xs tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      VIEW GALLERY
                    </p>
                    <h2 className="font-cormorant text-lg md:text-xl font-light tracking-wide text-white mb-1 group-hover:text-riviera-gold transition-colors">
                      {section.title}
                    </h2>
                    <p className="text-xs md:text-sm font-light text-white/80 line-clamp-2">
                      {section.description}
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-riviera-gold rounded-full p-1.5">
                      <svg 
                        className="w-4 h-4 text-white" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Mid Page CTA - After Gallery */}
        <InlineCTA
          eyebrow="VISIT OUR VENUE"
          headline="Nothing compares to seeing our Long Island venue in person"
          description="While our virtual tour offers a glimpse of our stunning Massapequa waterfront spaces, we invite you to experience the magic of Riviera Waterfront Mansion firsthand. Schedule a private tour, meet our team, and envision your perfect wedding day."
          buttonText="BOOK A TOUR →"
          buttonHref="/contact"
          imageSrc={imageConfig.hero[0]}
          imageAlt="Stunning waterfront wedding ceremony at Riviera Waterfront Mansion in Massapequa, Long Island"
          imagePosition="left"
          background="neutral"
        />

        {/* FAQ Section */}
        <FAQSection 
          faqs={tourFAQs}
          title="Virtual tour & venue questions"
          eyebrow="YOUR VENUE QUESTIONS ANSWERED"
          background="neutral"
        />

        {/* Final CTA - Book Tour */}
        <CTASection
          eyebrow="READY TO BEGIN YOUR WEDDING JOURNEY?"
          headline="Experience our Long Island waterfront wedding venue in person"
          description="Contact Riviera Waterfront Mansion today to schedule a private tour and discover why we are Long Island's premiere waterfront wedding venue since 1947. Available Tuesday through Sunday with personalized consultations."
          background="dark"
          buttons={[
            {
              text: 'SCHEDULE A VISIT →',
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
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: tourFAQs.map(faq => ({
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
