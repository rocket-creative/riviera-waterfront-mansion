import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTourImages } from '../../lib/imageConfig';

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
    title: `${section.title} | Riviera Waterfront Mansion`,
    description: section.description,
    alternates: {
      canonical: `https://www.rivierawaterfrontmansion.com/tour/${slug}`
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

  return (
    <>
      <Header />
      
      <main id="main">
        {/* Hero Section */}
        <section className="bg-riviera-neutral py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm">
                <li>
                  <Link 
                    href="/" 
                    className="text-riviera-text/60 hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-riviera-text/40">/</li>
                <li>
                  <Link 
                    href="/tour" 
                    className="text-riviera-text/60 hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold"
                  >
                    Tour
                  </Link>
                </li>
                <li className="text-riviera-text/40">/</li>
                <li className="text-riviera-text" aria-current="page">{section.title}</li>
              </ol>
            </nav>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-riviera-text mb-6">
              {section.title}
            </h1>
            <p className="text-lg font-light text-riviera-text/70 leading-relaxed">
              {section.description}
            </p>
          </div>
        </section>

        {/* Photography Gallery - Magazine Style, Asymmetric Layouts */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Editorial grid with varying sizes */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {getTourImages(slug).map((imagePath, index) => {
                // Create asymmetric, editorial layouts - some images larger than others
                const isLarge = index === 0 || index === 3;
                const isMedium = index === 1 || index === 4;
                
                return (
                  <div 
                    key={imagePath}
                    className={`
                      relative overflow-hidden
                      ${isLarge ? 'col-span-2 row-span-2 aspect-[16/10]' : ''}
                      ${isMedium ? 'col-span-1 aspect-[4/5]' : ''}
                      ${!isLarge && !isMedium ? 'col-span-1 aspect-square' : ''}
                    `}
                  >
                    <Image 
                      src={imagePath}
                      alt={`${section.title} at Riviera Waterfront Mansion wedding venue in Massapequa, Long Island`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      quality={85}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-riviera-neutral">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
              <div>
                {previousSlug && (
                  <Link
                    href={`/tour/${previousSlug}`}
                    className="group flex items-center gap-2 text-riviera-text hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
                  >
                    <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <div>
                      <div className="text-xs tracking-wider text-riviera-text/60 mb-1">PREVIOUS</div>
                      <div className="text-sm font-light">{tourSections[previousSlug as keyof typeof tourSections].title}</div>
                    </div>
                  </Link>
                )}
              </div>
              
              <Link
                href="/tour"
                className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
              >
                VIEW ALL
              </Link>

              <div>
                {nextSlug && (
                  <Link
                    href={`/tour/${nextSlug}`}
                    className="group flex items-center gap-2 text-riviera-text hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
                  >
                    <div className="text-right">
                      <div className="text-xs tracking-wider text-riviera-text/60 mb-1">NEXT</div>
                      <div className="text-sm font-light">{tourSections[nextSlug as keyof typeof tourSections].title}</div>
                    </div>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-riviera-gold py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
              Ready to book your Long Island waterfront wedding date?
            </h2>
            <p className="text-lg font-light mb-8 opacity-90">
              Contact Riviera Waterfront Mansion today to check wedding date availability and schedule an in person tour of our historic Massapequa venue
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-riviera-text px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-riviera-gold text-center"
              >
                CONTACT US →
              </Link>
              <a 
                href="tel:+15165415020"
                className="border-2 border-white text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-white hover:text-riviera-gold transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-riviera-gold text-center"
              >
                CALL (516) 541 5020
              </a>
            </div>
          </div>
        </section>
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
