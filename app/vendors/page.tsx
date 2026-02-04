import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Long Island Wedding Vendors | Riviera Waterfront Mansion Massapequa NY',
  description: 'Trusted Long Island wedding vendors for Massapequa waterfront weddings including photographers, videographers, florists, DJs, live entertainment, and more. All vendors carry proper insurance and deliver exceptional service for your special day.',
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/vendors'
  },
  openGraph: {
    title: 'Long Island Wedding Vendors | Riviera Waterfront Mansion',
    description: 'Trusted Long Island wedding vendors for photography, videography, florals, entertainment, and more for Massapequa waterfront weddings',
    url: 'https://www.rivierawaterfrontmansion.com/vendors',
  },
};

export default function VendorsPage() {
  return (
    <>
      <Header />
      
      <main id="main">
        {/* Hero Section */}
        <section className="bg-riviera-neutral py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-riviera-text mb-6">
              Long Island wedding vendors for your Massapequa waterfront celebration
            </h1>
            <p className="text-lg md:text-xl font-light text-riviera-text/70 max-w-2xl mx-auto">
              Trusted Long Island wedding professionals who know our Riviera Waterfront Mansion venue inside and out, delivering exceptional results for your special day
            </p>
          </div>
        </section>

        {/* Vendor Policy */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-riviera-neutral p-8 md:p-12 mb-16">
              <h2 className="font-cormorant text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-6">
                Long Island wedding vendor requirements at our Massapequa venue
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-base font-light text-riviera-text/70 leading-relaxed mb-4">
                  All outside wedding vendors working at our Long Island waterfront venue must carry proper liability insurance and provide proof of coverage before your wedding day. This requirement protects you, our historic Massapequa venue, and ensures professional standards are maintained for all Riviera Waterfront Mansion celebrations.
                </p>
                <p className="text-base font-light text-riviera-text/70 leading-relaxed">
                  We welcome your choice of Long Island wedding vendors and are happy to work with professionals you already know and trust. Our preferred vendor list features experienced professionals who know our waterfront space intimately and consistently deliver outstanding service for Massapequa weddings, but you are free to bring your own vendors who meet our insurance requirements.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="font-cormorant text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-6">
                  Long Island wedding entertainment: DJs and live bands
                </h2>
                <p className="text-base font-light text-riviera-text/70 leading-relaxed mb-6">
                  Live music and professional DJs are welcome at our Massapequa waterfront wedding venue. Our grand ballroom features excellent acoustics and a professional entertainment setup area that accommodates live bands, DJ equipment, and full audio visual systems for your Long Island wedding reception.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-riviera-neutral p-6">
                    <h3 className="text-sm tracking-widest text-riviera-gold mb-3">LONG ISLAND WEDDING DJ SERVICES</h3>
                    <p className="text-sm font-light text-riviera-text/80">
                      Professional DJ setup area with optimal positioning for sound and lighting in our Massapequa waterfront ballroom
                    </p>
                  </div>
                  <div className="border border-riviera-neutral p-6">
                    <h3 className="text-sm tracking-widest text-riviera-gold mb-3">LIVE WEDDING BANDS</h3>
                    <p className="text-sm font-light text-riviera-text/80">
                      Spacious entertainment area accommodating full live bands and musical ensembles for Long Island wedding receptions
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-cormorant text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-6">
                  Long Island wedding photography and videography at our waterfront venue
                </h2>
                <p className="text-base font-light text-riviera-text/70 leading-relaxed mb-6">
                  Our Massapequa waterfront location offers countless stunning photo and video opportunities for Long Island wedding photographers and videographers. From dramatic sunset ceremonies to elegant architectural details, wedding photographers consistently praise our historic venue for its diverse and beautiful shooting locations both indoors and outdoors.
                </p>
                <div className="bg-riviera-neutral p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-4">STUNNING LONG ISLAND WEDDING PHOTO LOCATIONS</h3>
                  <ul className="text-sm font-light text-riviera-text/80 space-y-2 list-none pl-0">
                    <li>• Breathtaking Massapequa waterfront views with dramatic sunset backdrops</li>
                    <li>• Elegant interior spaces with classic architectural details</li>
                    <li>• Grand staircase for timeless wedding portraits</li>
                    <li>• Private balconies overlooking the water for romantic couple photos</li>
                    <li>• Beautifully landscaped grounds perfect for outdoor wedding photography</li>
                    <li>• Luxurious bridal suite with abundant natural light for getting ready photos</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-cormorant text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-6">
                  Long Island wedding floral design and decor services
                </h2>
                <p className="text-base font-light text-riviera-text/70 leading-relaxed mb-6">
                  Bring your Long Island wedding vision to life with professional florists and wedding decorators experienced at our Massapequa venue. Our elegant waterfront spaces complement any wedding style from classic and traditional to contemporary and modern. Work with trusted Long Island floral designers who understand how to enhance our historic venue's natural beauty.
                </p>
              </div>

              <div>
                <h2 className="font-cormorant text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-6">
                  Additional Long Island wedding services at our venue
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="border border-riviera-neutral p-6">
                    <h3 className="text-sm tracking-widest text-riviera-text mb-3">WEDDING CEREMONY OFFICIANTS</h3>
                    <p className="text-sm font-light text-riviera-text/70">
                      Religious and civil ceremony officiants welcome at our Massapequa waterfront venue for your Long Island wedding
                    </p>
                  </div>
                  <div className="border border-riviera-neutral p-6">
                    <h3 className="text-sm tracking-widest text-riviera-text mb-3">BRIDAL HAIR & MAKEUP</h3>
                    <p className="text-sm font-light text-riviera-text/70">
                      Use our spacious bridal suite for wedding day hair and makeup preparation with your Long Island beauty team
                    </p>
                  </div>
                  <div className="border border-riviera-neutral p-6">
                    <h3 className="text-sm tracking-widest text-riviera-text mb-3">WEDDING TRANSPORTATION</h3>
                    <p className="text-sm font-light text-riviera-text/70">
                      Ample parking for Long Island wedding guests with optional valet service available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-riviera-gold py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide mb-6">
              Need Long Island wedding vendor recommendations?
            </h2>
            <p className="text-lg font-light mb-8 opacity-90">
              Our experienced Riviera Waterfront Mansion team can connect you with trusted Long Island wedding professionals who deliver exceptional results at our Massapequa venue
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-riviera-text px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-riviera-gold"
            >
              CONTACT US →
            </Link>
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
                name: 'Vendors'
              }
            ]
          })
        }}
      />
    </>
  );
}
