import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTourImages, getTourHero } from '../../lib/imageConfig';
import { AnimatedSection } from '../../components/AnimatedSection';
import { HoverScale } from '../../components/HoverScale';
import TourDetailClient from './TourDetailClient';

const tourSections = {
  'entrance-lobby': {
    title: 'Entrance Lobby',
    description: 'Our grand entrance lobby is where your guests arrive and get their first look at the mansion. Warm wood, soft lighting, and plenty of room to greet everyone as they come in.',
  },
  'bridal-suite': {
    title: 'Bridal Suite',
    description: 'A private suite where you and your wedding party get ready. It takes up the entire top floor and opens onto two balconies, one overlooking the ballroom and one outside. Comes with its own restroom and great natural light.',
  },
  'indoor-ceremony': {
    title: 'Indoor Ceremony Space',
    description: 'A beautiful indoor spot to say your vows, ready for any season or weather. Plenty of natural light and comfortable seating for your guests.',
  },
  'outdoor-ceremony': {
    title: 'Outdoor Waterfront Ceremony',
    description: 'Say your vows right on the water. Our outdoor ceremony area looks out over the bay and is especially stunning at sunset.',
  },
  'indoor-cocktail': {
    title: 'Indoor Cocktail Hour',
    description: 'An indoor cocktail space with water views, full bar service, and room for guests to relax and mingle before the reception.',
  },
  'outdoor-cocktail': {
    title: 'Outdoor Cocktail Hour',
    description: 'A waterfront patio for cocktail hour, with fresh air, open water views, and full bar service. A relaxed spot for guests to gather before dinner.',
  },
  'main-ballroom': {
    title: 'Grand Waterfront Ballroom',
    description: 'Our main ballroom is the heart of the reception. High ceilings, chandeliers, and big windows looking out over the water, with a large dance floor and room for up to 350 guests.',
  },
  'sweetheart-table': {
    title: 'Bride & Groom Table',
    description: 'Your table sits front and center in the ballroom, with a clear view of your guests and the dance floor all night long.',
  },
  'guest-seating': {
    title: 'Wedding Guest Reception Seating',
    description: 'Comfortable, beautifully set tables with room for up to 350 guests, arranged so everyone has a good view of the celebration.',
  },
  'dancefloor': {
    title: 'Spacious Dancefloor',
    description: 'A large dance floor right in the middle of the ballroom, with plenty of space for you and your guests to dance all night.',
  },
  'entertainment': {
    title: 'DJ & Live Band Setup Area',
    description: 'A dedicated space for your DJ or live band, with great sound and room for a full setup. Bring whoever you like to keep the party going.',
  },
  'main-bar': {
    title: 'Top Shelf Bar',
    description: 'A full service bar pouring premium liquor, wine, and cocktails, staffed by our bartenders throughout your five hour open bar.',
  },
  'balconies': {
    title: 'Double Balconies',
    description: 'We have two balconies: one inside that overlooks the ballroom, and one outside with double waterfront views. Both make for great photos and quiet moments away from the crowd.',
  },
  'photo-locations': {
    title: 'Wedding Photo Locations',
    description: 'Beautiful photo spots all over the grounds, from the water and gardens to the architecture inside. Your photographer will have plenty to work with.',
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

  const descriptionTrimmed = section.description.length > 160
    ? section.description.slice(0, 157) + '...'
    : section.description;

  return {
    title: `${section.title} | Riviera Waterfront Mansion`,
    description: descriptionTrimmed,
    alternates: {
      canonical: `https://www.rivierawaterfrontmansion.com/tour/${slug}`
    },
    openGraph: {
      title: `${section.title} | Riviera Waterfront Mansion`,
      description: descriptionTrimmed,
      url: `https://www.rivierawaterfrontmansion.com/tour/${slug}`,
      siteName: 'Riviera Waterfront Mansion',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: 'https://www.rivierawaterfrontmansion.com/og-tour.jpg',
          width: 1200,
          height: 630,
          alt: `${section.title} at Riviera Waterfront Mansion Long Island wedding venue`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${section.title} | Riviera Waterfront Mansion`,
      description: descriptionTrimmed,
      images: ['https://www.rivierawaterfrontmansion.com/og-tour.jpg'],
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
        <section className="relative min-h-dvh overflow-hidden bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-dvh gap-0">
            {/* Image Column - Full Height */}
            <div className="relative lg:col-span-7 h-[50svh] lg:h-auto order-1 lg:order-1 overflow-hidden">
              <Image 
                src={getTourHero(slug)}
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
                    className="bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-all text-center block max-w-md w-full"
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
              Explore Our {section.title}
            </h2>
          </AnimatedSection>

          <TourDetailClient images={images} sectionTitle={section.title} />
        </section>

        {/* Navigation Between Sections */}
        <section className="py-12 px-6 sm:px-8 lg:px-12 bg-riviera-neutral">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            {/* VIEW ALL SPACES — full width centered on mobile, inline on lg */}
            <div className="flex justify-center">
              <HoverScale effect="lift">
                <Link
                  href="/tour"
                  className="bg-riviera-text text-white px-6 py-3 text-sm font-light tracking-widest hover:bg-riviera-gold transition-colors"
                >
                  VIEW ALL SPACES
                </Link>
              </HoverScale>
            </div>

            {/* PREVIOUS / NEXT row */}
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
          headline="Experience Our Venue in Person"
          description="Contact Riviera Waterfront Mansion today to check wedding date availability and schedule an in person tour of our historic Massapequa venue. See the spaces you have just explored come to life and envision your perfect celebration."
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
                name: section.title,
                item: `https://www.rivierawaterfrontmansion.com/tour/${slug}`
              }
            ]
          })
        }}
      />
    </>
  );
}
