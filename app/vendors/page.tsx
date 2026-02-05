'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import InlineCTA from '../components/InlineCTA';
import FAQSection from '../components/FAQSection';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedSection } from '../components/AnimatedSection';
import { HoverScale } from '../components/HoverScale';
import { useStaggerChildren, useScrollTriggerCleanup, useFadeInUp } from '../lib/useAnimations';
import { imageConfig } from '../lib/imageConfig';

const vendorsFAQs = [
  {
    question: 'Do we have to use your preferred vendors?',
    answer: 'No, you are welcome to bring your own wedding vendors. However, our preferred vendors know our Massapequa venue intimately and have consistently delivered exceptional service. They understand the unique features of our waterfront location and work seamlessly with our team.'
  },
  {
    question: 'Are your preferred vendors more expensive?',
    answer: 'No. Our preferred vendors offer competitive rates for the Long Island market. Being on our list does not inflate their pricing. They earned their spot through quality work, reliability, and professionalism, not by paying fees.'
  },
  {
    question: 'Can you recommend vendors based on our budget?',
    answer: 'Absolutely! Our banquet team can provide personalized recommendations based on your budget, wedding style, and specific needs. We have worked with all our preferred vendors for years and can match you with professionals who fit your vision and budget.'
  },
  {
    question: 'What happens if our vendor cancels?',
    answer: 'If your vendor cancels, our team can quickly connect you with alternative options from our preferred list. Because we maintain strong relationships with multiple vendors in each category, we can help resolve last minute changes smoothly.'
  },
  {
    question: 'Do you provide any vendors in house?',
    answer: 'Yes! Catering, bartending, serving staff, and venue coordination are all provided by our expert in house team. You will need to arrange your own photographer, DJ or band, florist, cake, and other specialty vendors.'
  },
  {
    question: 'How do I contact the vendors on your list?',
    answer: 'Contact information including websites, phone numbers, and emails are listed for each vendor. You can reach out directly to discuss your wedding needs, request quotes, and check their availability for your Long Island wedding date.'
  },
  {
    question: 'Can vendors visit the venue before our wedding?',
    answer: 'Yes, your vendors are welcome to visit Riviera Waterfront Mansion before your wedding for site visits, consultations, and planning. Many of our preferred vendors already know the space well from previous events.'
  },
  {
    question: 'Are there any vendor restrictions at your venue?',
    answer: 'We require all vendors to have proper insurance and licensing. Fireworks vendors must follow local regulations. Otherwise, professional vendors who respect our venue and deliver quality service are welcome.'
  }
];

const vendorCategories = [
  {
    title: 'Photography',
    icon: '📷',
    vendors: [
      { name: 'Elena Kay Photography', website: 'https://www.elenakayphotography.com', phone: '(631) 213 5013' },
      { name: 'Jovon Photography & Video', website: 'https://www.Jovonphotographyandvideo.com', phone: '(516) 922 3535' },
      { name: 'Glenmar Studio', website: 'https://www.glenmarstudio.com', phone: '(516) 484 4646' },
      { name: 'Wavelight Photography', website: 'https://wavelightphoto.com', phone: '(516) 445 6937' },
    ]
  },
  {
    title: 'DJ Entertainment',
    icon: '🎧',
    vendors: [
      { name: 'After Hours', website: 'https://www.afterhoursent.com', phone: '(631) 736 2921' },
      { name: 'Barattini Productions', website: 'https://www.BarattiniProductions.com', phone: '(631) 979 2662' },
      { name: 'Sensational Sounds', website: 'https://www.djsensationalsounds.com', phone: '(631) 864 2323' },
      { name: 'Variety Music', website: 'https://www.varietydj.com', phone: '(516) 922 2299' },
    ]
  },
  {
    title: 'Live Bands',
    icon: '🎸',
    vendors: [
      { name: 'Ready In 10', website: 'https://www.readyin10.com', phone: '(516) 317 4853' },
    ]
  },
  {
    title: 'Florist',
    icon: '💐',
    vendors: [
      { name: "Tim's Florist", website: 'https://www.timsflorist.com', phone: '(516) 541 6001' },
      { name: "Tom's Towers Flowers", phone: '(631) 422 6714' },
    ]
  },
  {
    title: 'Bakery',
    icon: '🎂',
    vendors: [
      { name: 'Batter Up Bakery', website: 'https://batterupbakeryny.com', phone: '(516) 681 4743' },
      { name: "Francesco's Bakery", website: 'https://www.francescosbakery.com', phone: '(516) 931 6821' },
    ]
  },
  {
    title: 'Lighting',
    icon: '✨',
    vendors: [
      { name: "Gal's Lights (Riviera Only)", description: 'Edison & Tulle Lighting', phone: '(516) 804 2363' },
    ]
  },
  {
    title: 'Limousines',
    icon: '🚗',
    vendors: [
      { name: 'Mark of Elegance', website: 'https://www.markofelegance.com', phone: '(516) 506 7155' },
      { name: 'Dynasty Limousine', website: 'https://www.dynastylimosli.com', phone: '(631) 587 8500' },
    ]
  },
  {
    title: 'Décor & Backdrops',
    icon: '🎨',
    vendors: [
      { name: 'Element Events', website: 'https://www.elementeventsli.com', phone: '(631) 786 7141' },
    ]
  },
  {
    title: 'Fireworks',
    icon: '🎆',
    vendors: [
      { name: 'Starfire Corporation', description: 'Charles Rappa', phone: '(631) 624 4972' },
      { name: 'Grucci Fireworks', website: 'https://www.grucci.com', phone: '(631) 286 0088' },
      { name: 'Volt Live', email: 'info@voltlive.com', phone: '1 800 606 3716' },
    ]
  },
  {
    title: 'Clergy & Officiants',
    icon: '💒',
    vendors: [
      { name: 'NY Officiants', website: 'https://www.nyofficiants.com', phone: '(516) 662 2191' },
      { name: 'Long Island Wedding Officiants', website: 'https://longislandweddingofficiants.org', email: 'joe@longislandweddingofficiants.org', phone: '(917) 863 7865' },
    ]
  },
  {
    title: 'Bridal Attire',
    icon: '👰',
    vendors: [
      { name: 'Princess Bridals', website: 'https://princessbridals.com', phone: '(516) 249 3005' },
      { name: 'Esquire Tuxedos', website: 'https://www.esquiretuxedos.com', phone: '(516) 378 6060' },
    ]
  },
  {
    title: 'Invitations',
    icon: '💌',
    vendors: [
      { name: 'Gemini Invitations', website: 'https://www.geminiinvitations.com', phone: '(347) 348 8145' },
    ]
  },
  {
    title: 'Special Services',
    icon: '⭐',
    vendors: [
      { name: 'Till Death Do Us Art (Live Painter)', description: '@Tildeathdous.art', email: 'Paintmyweddingbyelle@gmail.com', phone: '(718) 689 2686' },
      { name: 'Village Cigar Headquarters', website: 'https://www.villagecigarhq.com', phone: '(631) 307 9033' },
      { name: 'Rainbow Tents (Heater Rentals)', website: 'https://www.rainbowtents.com', phone: '(631) 665 RENT' },
    ]
  },
  {
    title: 'Hotels',
    icon: '🏨',
    vendors: [
      { name: 'Courtyard Marriott', description: '2 Marriott Plaza, Farmingdale, NY 11735', phone: '(631) 927 6910' },
    ]
  },
];

export default function VendorsPage() {
  useScrollTriggerCleanup();
  const heroContentRef = useFadeInUp({ delay: 0.3, duration: 1.2 });
  const categoriesRef = useStaggerChildren('.vendor-category', { stagger: 0.1, duration: 0.8 });

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
                  TRUSTED WEDDING PROFESSIONALS
                </p>
                <h1 className="font-cormorant text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wider text-riviera-text mb-6 leading-[1.1]">
                  PREFERRED
                  <span className="block text-riviera-gold">WEDDING</span>
                  <span className="block">VENDORS</span>
                </h1>
                <p className="text-base sm:text-lg font-light text-riviera-text/70 mb-8 max-w-md leading-relaxed">
                  Our hand selected wedding professionals have earned the Riviera seal of approval. These trusted partners will help bring your Long Island waterfront wedding vision to life.
                </p>
                <HoverScale effect="lift">
                  <a 
                    href="#vendors-list"
                    className="bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-all text-center block max-w-md w-full"
                  >
                    EXPLORE VENDORS →
                  </a>
                </HoverScale>
              </div>
            </div>

            {/* Image Column - Full Height */}
            <div className="relative lg:col-span-7 h-[50vh] lg:h-auto order-1 lg:order-2 overflow-hidden">
              <Image 
                src="/images/large/_0359671-by-p.jpg"
                alt="Preferred wedding vendors at Riviera Waterfront Mansion Long Island wedding venue"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
                quality={90}
              />
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-riviera-neutral py-10 md:py-12">
          <div className="mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <AnimatedSection animation="fadeInUp" delay={0}>
                <div className="text-4xl md:text-5xl font-light text-riviera-gold mb-2">14+</div>
                <h3 className="text-xs tracking-widest text-riviera-text mb-1">VENDOR CATEGORIES</h3>
                <p className="text-xs font-light text-riviera-text/70">Complete wedding services</p>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={0.1}>
                <div className="text-4xl md:text-5xl font-light text-riviera-gold mb-2">30+</div>
                <h3 className="text-xs tracking-widest text-riviera-text mb-1">TRUSTED PARTNERS</h3>
                <p className="text-xs font-light text-riviera-text/70">Vetted by our team</p>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={0.2}>
                <div className="text-4xl md:text-5xl font-light text-riviera-gold mb-2">75+</div>
                <h3 className="text-xs tracking-widest text-riviera-text mb-1">YEARS EXPERIENCE</h3>
                <p className="text-xs font-light text-riviera-text/70">Family owned expertise</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-20 px-6 sm:px-8 lg:px-12 bg-white">
          <AnimatedSection animation="fadeInUp" className="max-w-3xl mx-auto text-center" as="div">
            <p className="text-riviera-gold text-sm tracking-widest mb-4">CREATING YOUR PERFECT DAY</p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-6">
              Building your dream wedding team
            </h2>
            <p className="text-base md:text-lg font-light text-riviera-text/70 leading-relaxed">
              These professionals have been hand picked by The Riviera at Massapequa for their exceptional service, reliability, and expertise. Each vendor has proven themselves at our venue and understands the unique beauty of waterfront weddings. All vendors are listed in alphabetical order within their categories.
            </p>
          </AnimatedSection>
        </section>

        {/* Vendors List */}
        <section id="vendors-list" className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-riviera-neutral">
          <div ref={categoriesRef as any} className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {vendorCategories.map((category, catIndex) => (
                <div 
                  key={category.title} 
                  className="vendor-category bg-white p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{category.icon}</span>
                    <h2 className="font-cormorant text-2xl md:text-3xl font-light tracking-wide text-riviera-text">
                      {category.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    {category.vendors.map((vendor, vendorIndex) => (
                      <div 
                        key={vendor.name}
                        className="border-b border-riviera-neutral/50 pb-4 last:border-b-0 last:pb-0"
                      >
                        <h3 className="text-base font-light text-riviera-text mb-1">{vendor.name}</h3>
                        {'description' in vendor && vendor.description && (
                          <p className="text-sm text-riviera-text/60 mb-1">{vendor.description}</p>
                        )}
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                          {'website' in vendor && vendor.website && (
                            <a 
                              href={vendor.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-riviera-gold hover:underline"
                            >
                              Website →
                            </a>
                          )}
                          {'email' in vendor && vendor.email && (
                            <a 
                              href={`mailto:${vendor.email}`}
                              className="text-riviera-gold hover:underline"
                            >
                              Email
                            </a>
                          )}
                          {vendor.phone && (
                            <a 
                              href={`tel:${vendor.phone.replace(/[^0-9]/g, '')}`}
                              className="text-riviera-text/70 hover:text-riviera-text"
                            >
                              {vendor.phone}
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid Page CTA - Vendor Questions */}
        <InlineCTA
          eyebrow="QUESTIONS ABOUT VENDORS?"
          headline="Our team is here to help build your dream wedding team"
          description="For personalized vendor recommendations tailored to your wedding vision, budget, and style, contact our experienced banquet department. We have worked with all our preferred vendors for years and can guide you to the perfect match."
          buttonText="GET RECOMMENDATIONS →"
          buttonHref="/contact"
          imageSrc={imageConfig.homepage.venue}
          imageAlt="Beautiful wedding reception setup at Riviera Waterfront Mansion"
          imagePosition="right"
          background="white"
        />

        {/* FAQ Section */}
        <FAQSection 
          faqs={vendorsFAQs}
          title="Wedding vendor questions"
          eyebrow="YOUR VENDOR QUESTIONS ANSWERED"
          background="neutral"
        />

        {/* Final CTA - Start Planning */}
        <CTASection
          eyebrow="READY TO START PLANNING?"
          headline="Request your Long Island wedding date"
          description="Contact our banquet department to learn more about our preferred vendors, get personalized recommendations, check wedding date availability, and schedule a tour of our Massapequa waterfront venue. Limited dates for 2026 and 2027."
          background="dark"
          buttons={[
            {
              text: 'CONTACT US →',
              href: '/contact',
              intent: 'schedule',
            },
            {
              text: 'EXPLORE VENUE',
              href: '/tour',
              intent: 'tour',
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
                name: 'Preferred Vendors'
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
            mainEntity: vendorsFAQs.map(faq => ({
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
