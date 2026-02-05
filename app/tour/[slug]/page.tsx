import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTourImages, getTourPreview } from '../../lib/imageConfig';
import { AnimatedSection } from '../../components/AnimatedSection';
import { HoverScale } from '../../components/HoverScale';
import TourDetailClient from './TourDetailClient';

const tourSections = {
  'entrance-lobby': {
    title: 'Entrance Lobby',
    description: 'Welcome your Long Island wedding guests in our grand entrance lobby at Riviera Waterfront Mansion, featuring elegant architecture and refined details that set the tone for your Massapequa waterfront celebration from the moment guests arrive.',
  },
  'bridal-suite': {
    title: 'Bridal Suite',
    description: 'Prepare for your special day in our luxurious Long Island wedding bridal suite. Private preparation space with ample room for your entire wedding party, complete with dedicated restroom facilities, natural lighting, and elegant amenities at our Massapequa venue.',
  },
  'indoor-ceremony': {
    title: 'Indoor Ceremony Space',
    description: 'Exchange vows in our elegant indoor Long Island wedding ceremony space. Perfect for any season, with beautiful natural light, sophisticated ambiance, and seating for your guests at our historic Massapequa waterfront venue.',
  },
  'outdoor-ceremony': {
    title: 'Outdoor Waterfront Ceremony',
    description: 'Say "I do" with breathtaking Massapequa waterfront views as your backdrop. Our outdoor Long Island wedding ceremony area offers an unforgettable setting overlooking the water with stunning sunset views for your special moment.',
  },
  'indoor-cocktail': {
    title: 'Indoor Cocktail Hour',
    description: 'Sophisticated indoor cocktail space with stunning waterfront views at our Long Island venue. Your wedding guests will enjoy premium top shelf beverages and gourmet hors d\'oeuvres in an elegant Massapequa setting with professional bar service.',
  },
  'outdoor-cocktail': {
    title: 'Outdoor Cocktail Hour',
    description: 'Entertain your Long Island wedding guests on our stunning Massapequa waterfront patio. Fresh air, beautiful water views, and top shelf open bar service create the perfect atmosphere for your cocktail hour reception.',
  },
  'main-ballroom': {
    title: 'Grand Waterfront Ballroom',
    description: 'Our grand Long Island wedding ballroom features soaring ceilings, crystal chandeliers, and floor to ceiling windows showcasing breathtaking Massapequa waterfront views. The elegant centerpiece of your reception with spacious dance floor and room for up to 350 guests.',
  },
  'sweetheart-table': {
    title: 'Bride & Groom Table',
    description: 'Your head table takes center stage in our Massapequa waterfront ballroom. Elegantly positioned with the perfect view of your Long Island wedding guests and the dance floor for your special celebration.',
  },
  'guest-seating': {
    title: 'Wedding Guest Reception Seating',
    description: 'Beautifully arranged Long Island wedding reception seating with attention to every detail. Elegant table settings and comfortable spacing for your guests at our Massapequa waterfront venue with accommodations for up to 350 guests.',
  },
  'dancefloor': {
    title: 'Spacious Dancefloor',
    description: 'Spacious dance floor at the heart of our Long Island wedding ballroom. Plenty of room for you and your Massapequa waterfront wedding guests to celebrate and dance throughout the night.',
  },
  'entertainment': {
    title: 'DJ & Live Band Setup Area',
    description: 'Professional Long Island wedding entertainment space with optimal acoustics at our Massapequa venue. Accommodates DJs, live bands, and full audio visual setups for your reception celebration.',
  },
  'main-bar': {
    title: 'Top Shelf Bar',
    description: 'Full service Long Island wedding bar featuring premium top shelf liquors, craft cocktails, fine wines, and professional bartending staff to keep your Massapequa waterfront celebration flowing throughout your five hour open bar.',
  },
  'balconies': {
    title: 'Waterfront Balconies',
    description: 'Elegant balconies overlooking the dance floor and offering stunning Massapequa waterfront views. Perfect for intimate moments and spectacular Long Island wedding photography opportunities.',
  },
  'photo-locations': {
    title: 'Wedding Photo Locations',
    description: 'Countless stunning Long Island wedding photography opportunities throughout our Massapequa waterfront grounds. From breathtaking water views to elegant architectural details, your wedding photographer will have endless beautiful options for timeless portraits.',
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const section = tourSections[slug as keyof typeof tourSections];
  
  if (!section) {
    return {};
  }

  return {
    title: `${section.title} | Long Island Wedding Venue Tour | Riviera Waterfront Mansion`,
    description: section.description,
    alternates: {
      canonical: `https://www.rivierawaterfrontmansion.com/tour/${slug}`
    },
    openGraph: {
      title: `${section.title} | Riviera Waterfront Mansion`,
      description: section.description,
      url: `https://www.rivierawaterfrontmansion.com/tour/${slug}`,
      siteName: 'Riviera Waterfront Mansion',
      locale: 'en_US',
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(tourSections).map((slug) => ({
    slug,
  }));
}

export default async function TourSectionPage({ params }: Props) {
  const { slug } = await params;
  const section = tourSections[slug as keyof typeof tourSections];

  if (!section) {
    notFound();
  }

  const allSlugs = Object.keys(tourSections);
  const currentIndex = allSlugs.indexOf(slug);
  const previousSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;
  const images = getTourImages(slug);

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
                src={getTourPreview(slug)}
                alt={`${section.title} at Riviera Waterfront Mansion Long Island wedding venue in Massapequa, NY`}
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
                quality={90}
              />
            </div>

            {/* Text Column */}
            <div className="lg:col-span-5 flex items-center order-2 lg:order-2 bg-white">
              <div className="px-6 sm:px-10 lg:px-12 xl:px-16 py-16 lg:py-20">
                {/* Breadcrumb */}
                <nav className="mb-6" aria-label="Breadcrumb">
                  <ol className="flex items-center gap-2 text-sm">
                    <li>
                      <Link 
                        href="/" 
                        className="text-riviera-text/60 hover:text-riviera-gold transition-colors"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="text-riviera-text/40">/</li>
                    <li>
                      <Link 
                        href="/tour" 
                        className="text-riviera-text/60 hover:text-riviera-gold transition-colors"
                      >
                        Tour
                      </Link>
                    </li>
                    <li className="text-riviera-text/40">/</li>
                    <li className="text-riviera-text" aria-current="page">{section.title}</li>
                  </ol>
                </nav>

                <p className="text-riviera-gold text-xs sm:text-sm tracking-widest mb-6 font-light">
                  VIRTUAL TOUR
                </p>
                <h1 className="font-cormorant text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wider text-riviera-text mb-6 leading-[1.1]">
                  {section.title}
                </h1>
                <p className="text-base sm:text-lg font-light text-riviera-text/70 mb-8 max-w-md leading-relaxed">
                  {section.description}
                </p>
                <HoverScale effect="lift">
                  <a 
                    href="#photo-gallery"
                    className="bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-all text-center block"
                  >
                    VIEW PHOTOS →
                  </a>
                </HoverScale>
              </div>
            </div>
          </div>
        </section>

        {/* Photography Gallery - Magazine Style, Asymmetric Layouts */}
        <section id="photo-gallery" className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-riviera-neutral">
          <AnimatedSection animation="fadeInUp" className="text-center mb-12" as="div">
            <p className="text-riviera-gold text-sm tracking-widest mb-3">PHOTO GALLERY</p>
            <h2 className="font-cormorant text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-riviera-text">
              Explore the {section.title.toLowerCase()}
            </h2>
          </AnimatedSection>

          <TourDetailClient images={images} sectionTitle={section.title} />
        </section>

        {/* Navigation Between Sections */}
        <section className="py-12 px-6 sm:px-8 lg:px-12 bg-riviera-neutral">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
              <div className="flex-1">
                {previousSlug && (
                  <Link
                    href={`/tour/${previousSlug}`}
                    className="group flex items-center gap-3 text-riviera-text hover:text-riviera-gold transition-colors"
                  >
                    <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <div>
                      <div className="text-xs tracking-widest text-riviera-gold mb-1">PREVIOUS</div>
                      <div className="text-sm font-light">{tourSections[previousSlug as keyof typeof tourSections].title}</div>
                    </div>
                  </Link>
                )}
              </div>
              
              <HoverScale effect="lift">
                <Link
                  href="/tour"
                  className="bg-riviera-text text-white px-6 py-3 text-sm font-light tracking-widest hover:bg-riviera-gold transition-colors"
                >
                  VIEW ALL SPACES
                </Link>
              </HoverScale>

              <div className="flex-1 flex justify-end">
                {nextSlug && (
                  <Link
                    href={`/tour/${nextSlug}`}
                    className="group flex items-center gap-3 text-riviera-text hover:text-riviera-gold transition-colors"
                  >
                    <div className="text-right">
                      <div className="text-xs tracking-widest text-riviera-gold mb-1">NEXT</div>
                      <div className="text-sm font-light">{tourSections[nextSlug as keyof typeof tourSections].title}</div>
                    </div>
                    <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Book Tour */}
        <CTASection
          eyebrow="READY TO BOOK YOUR LONG ISLAND WATERFRONT WEDDING?"
          headline="Experience our venue in person"
          description="Contact Riviera Waterfront Mansion today to check wedding date availability and schedule an in person tour of our historic Massapequa venue. See the spaces you have just explored come to life and envision your perfect celebration."
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
                name: 'Tour',
                item: 'https://www.rivierawaterfrontmansion.com/tour'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: section.title
              }
            ]
          })
        }}
      />
    </>
  );
}
