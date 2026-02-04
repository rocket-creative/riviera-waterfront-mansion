import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Menu & Catering | Riviera Waterfront Mansion',
  description: 'Continental cuisine crafted by our experienced culinary team. Customizable wedding menus featuring premium ingredients and exceptional service.',
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/menu'
  },
  openGraph: {
    title: 'Wedding Menu & Catering | Riviera Waterfront Mansion',
    description: 'Continental cuisine with premium ingredients and exceptional service',
    url: 'https://www.rivierawaterfrontmansion.com/menu',
  },
};

export default function MenuPage() {
  return (
    <>
      <Header />
      
      <main id="main">
        {/* Hero Section */}
        <section className="bg-riviera-neutral py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-riviera-text mb-6">
              Exceptional cuisine
            </h1>
            <p className="text-lg md:text-xl font-light text-riviera-text/70 max-w-2xl mx-auto">
              Continental dishes prepared with premium ingredients by our experienced culinary team
            </p>
          </div>
        </section>

        {/* Menu Highlights */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-6">
                  Signature dishes
                </h2>
                <p className="text-base font-light text-riviera-text/70 leading-relaxed mb-8">
                  Our guests rave about our roast duck, succulent suckling pig, and perfectly prepared steaks. Every dish is crafted with attention to detail and served with impeccable timing.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm tracking-widest text-riviera-gold mb-3">COCKTAIL HOUR</h3>
                    <ul className="text-sm font-light text-riviera-text/80 space-y-2 list-none pl-0">
                      <li>• Passed hors d'oeuvres</li>
                      <li>• Carving stations</li>
                      <li>• Fresh seafood displays</li>
                      <li>• International cheese selections</li>
                      <li>• Seasonal appetizers</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm tracking-widest text-riviera-gold mb-3">RECEPTION</h3>
                    <ul className="text-sm font-light text-riviera-text/80 space-y-2 list-none pl-0">
                      <li>• Premium beef selections</li>
                      <li>• Fresh seafood entrees</li>
                      <li>• Signature roast duck</li>
                      <li>• Roast suckling pig</li>
                      <li>• Vegetarian options available</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-6">
                  Beverage service
                </h2>
                <p className="text-base font-light text-riviera-text/70 leading-relaxed mb-6">
                  Top shelf open bar included with all packages. Our professional bartending staff serves premium liquors, wines, and craft cocktails throughout your celebration.
                </p>
                <div className="bg-riviera-neutral p-8">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-4">INCLUDED BEVERAGES</h3>
                  <div className="grid sm:grid-cols-3 gap-6 text-sm font-light text-riviera-text/80">
                    <div>
                      <p className="font-normal text-riviera-text mb-2">Premium Spirits</p>
                      <p>Top shelf liquors available throughout the evening</p>
                    </div>
                    <div>
                      <p className="font-normal text-riviera-text mb-2">Wine Selection</p>
                      <p>Curated wine list featuring reds, whites, and champagne</p>
                    </div>
                    <div>
                      <p className="font-normal text-riviera-text mb-2">Craft Cocktails</p>
                      <p>Signature drinks and classic cocktails</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-6">
                  Dietary accommodations
                </h2>
                <p className="text-base font-light text-riviera-text/70 leading-relaxed mb-6">
                  We accommodate all dietary restrictions and preferences. Vegetarian, vegan, gluten free, and kosher meals available. Our culinary team works with you to ensure every guest enjoys their meal.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-6">
                  Cultural traditions
                </h2>
                <p className="text-base font-light text-riviera-text/70 leading-relaxed">
                  We welcome and accommodate cultural traditions in your ceremony and menu. From Filipino customs to international cuisine, our experienced team helps incorporate your heritage into your celebration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-riviera-brown py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
              Customize your menu
            </h2>
            <p className="text-lg font-light mb-8 opacity-90">
              Schedule a tasting appointment to sample our cuisine and design your perfect menu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-white hover:text-riviera-text transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-riviera-brown"
              >
                REQUEST TASTING →
              </Link>
              <a 
                href="tel:+15165415020"
                className="border-2 border-white text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-white hover:text-riviera-brown transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-riviera-brown"
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
                name: 'Menu'
              }
            ]
          })
        }}
      />
    </>
  );
}
