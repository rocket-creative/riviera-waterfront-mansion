import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const tourSections = {
  'entrance-lobby': {
    title: 'Entrance Lobby',
    description: 'Welcome your guests in our grand entrance lobby, featuring elegant architecture and refined details that set the tone for your celebration.',
  },
  'bridal-suite': {
    title: 'Bridal Suite',
    description: 'Prepare for your special day in our luxurious bridal suite. Private space with ample room for your wedding party, complete with dedicated restroom facilities.',
  },
  'indoor-ceremony': {
    title: 'Indoor Ceremony',
    description: 'Exchange vows in our elegant indoor ceremony space. Perfect for any season, with beautiful natural light and sophisticated ambiance.',
  },
  'outdoor-ceremony': {
    title: 'Outdoor Ceremony',
    description: 'Say "I do" with breathtaking waterfront views as your backdrop. Our outdoor ceremony area offers an unforgettable setting overlooking the water.',
  },
  'indoor-cocktail': {
    title: 'Indoor Cocktail Hour',
    description: 'Sophisticated indoor cocktail space with waterfront views. Your guests will enjoy premium beverages and hors d\'oeuvres in an elegant setting.',
  },
  'outdoor-cocktail': {
    title: 'Outdoor Cocktail Hour',
    description: 'Entertain your guests on our stunning waterfront patio. Fresh air, beautiful views, and top shelf bar service create the perfect atmosphere.',
  },
  'main-ballroom': {
    title: 'Main Ballroom',
    description: 'Our grand ballroom features soaring ceilings, crystal chandeliers, and floor to ceiling windows showcasing waterfront views. The centerpiece of your reception.',
  },
  'sweetheart-table': {
    title: 'Bride & Groom Table',
    description: 'Your head table takes center stage in our ballroom. Elegantly positioned with the perfect view of your guests and the dance floor.',
  },
  'guest-seating': {
    title: 'Main Guest Seating',
    description: 'Beautifully arranged reception seating with attention to every detail. Elegant table settings and comfortable spacing for your guests.',
  },
  'dancefloor': {
    title: 'Dancefloor',
    description: 'Spacious dance floor at the heart of the ballroom. Plenty of room for you and your guests to celebrate throughout the night.',
  },
  'entertainment': {
    title: 'DJ & Band Setup',
    description: 'Professional entertainment space with optimal acoustics. Accommodates DJs, live bands, and full audio/visual setups.',
  },
  'main-bar': {
    title: 'Main Bar',
    description: 'Full service bar featuring top shelf liquors, craft cocktails, and professional bartending staff to keep your celebration flowing.',
  },
  'balconies': {
    title: 'Balconies',
    description: 'Elegant balconies overlooking the dance floor and offering stunning water views. Perfect for intimate moments and spectacular photos.',
  },
  'photo-locations': {
    title: 'Photo Locations',
    description: 'Countless stunning photography opportunities throughout our grounds. From waterfront views to architectural details, your photographer will have endless options.',
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

        {/* Gallery Placeholder */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-[4/3] bg-riviera-neutral" />
              ))}
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
              Ready to book your date?
            </h2>
            <p className="text-lg font-light mb-8 opacity-90">
              Contact us today to check availability and schedule an in person tour
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-riviera-text px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-riviera-gold"
              >
                CONTACT US →
              </Link>
              <a 
                href="tel:+15165415020"
                className="border-2 border-white text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-white hover:text-riviera-gold transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-riviera-gold"
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
