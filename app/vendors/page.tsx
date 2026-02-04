import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preferred Vendors | Riviera Waterfront Mansion',
  description: 'Trusted wedding vendors including photographers, florists, DJs, and entertainment. All vendors carry proper insurance and deliver exceptional service.',
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/vendors'
  },
  openGraph: {
    title: 'Preferred Vendors | Riviera Waterfront Mansion',
    description: 'Trusted wedding vendors for photography, florals, entertainment, and more',
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-riviera-text mb-6">
              Preferred vendors
            </h1>
            <p className="text-lg md:text-xl font-light text-riviera-text/70 max-w-2xl mx-auto">
              Trusted professionals who know our venue and deliver exceptional results
            </p>
          </div>
        </section>

        {/* Vendor Policy */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-riviera-neutral p-8 md:p-12 mb-16">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-6">
                Vendor requirements
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-base font-light text-riviera-text/70 leading-relaxed mb-4">
                  All outside vendors must carry proper liability insurance and provide proof of coverage. This protects you, our venue, and ensures professional standards.
                </p>
                <p className="text-base font-light text-riviera-text/70 leading-relaxed">
                  We welcome your choice of vendors and are happy to work with professionals you trust. Our preferred vendor list features those who know our space well and consistently deliver outstanding service.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-6">
                  Entertainment
                </h2>
                <p className="text-base font-light text-riviera-text/70 leading-relaxed mb-6">
                  Live music and DJs are welcome. Our ballroom acoustics and professional setup area accommodate bands, DJs, and full audio/visual equipment.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-riviera-neutral p-6">
                    <h3 className="text-sm tracking-widest text-riviera-gold mb-3">DJ SERVICES</h3>
                    <p className="text-sm font-light text-riviera-text/80">
                      Professional DJ setup area with optimal positioning for sound and lighting
                    </p>
                  </div>
                  <div className="border border-riviera-neutral p-6">
                    <h3 className="text-sm tracking-widest text-riviera-gold mb-3">LIVE BANDS</h3>
                    <p className="text-sm font-light text-riviera-text/80">
                      Spacious stage area accommodating full bands and musical ensembles
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-6">
                  Photography & videography
                </h2>
                <p className="text-base font-light text-riviera-text/70 leading-relaxed mb-6">
                  Our waterfront location offers countless stunning photo opportunities. From sunset ceremonies to architectural details, photographers love our venue.
                </p>
                <div className="bg-riviera-neutral p-6">
                  <h3 className="text-sm tracking-widest text-riviera-text mb-4">PHOTO LOCATIONS</h3>
                  <ul className="text-sm font-light text-riviera-text/80 space-y-2 list-none pl-0">
                    <li>• Waterfront views and sunset backdrops</li>
                    <li>• Elegant interior spaces</li>
                    <li>• Grand staircase</li>
                    <li>• Balconies overlooking the water</li>
                    <li>• Landscaped grounds</li>
                    <li>• Bridal suite with natural light</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-6">
                  Floral & decor
                </h2>
                <p className="text-base font-light text-riviera-text/70 leading-relaxed mb-6">
                  Bring your vision to life with professional florists and decorators. Our elegant spaces complement any style from classic to contemporary.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-6">
                  Additional services
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="border border-riviera-neutral p-6">
                    <h3 className="text-sm tracking-widest text-riviera-text mb-3">CEREMONY OFFICIANTS</h3>
                    <p className="text-sm font-light text-riviera-text/70">
                      Religious and civil ceremony officiants welcome
                    </p>
                  </div>
                  <div className="border border-riviera-neutral p-6">
                    <h3 className="text-sm tracking-widest text-riviera-text mb-3">HAIR & MAKEUP</h3>
                    <p className="text-sm font-light text-riviera-text/70">
                      Use our bridal suite for preparation
                    </p>
                  </div>
                  <div className="border border-riviera-neutral p-6">
                    <h3 className="text-sm tracking-widest text-riviera-text mb-3">TRANSPORTATION</h3>
                    <p className="text-sm font-light text-riviera-text/70">
                      Ample parking and valet available
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
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
              Need vendor recommendations?
            </h2>
            <p className="text-lg font-light mb-8 opacity-90">
              Our experienced team can connect you with trusted professionals
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
