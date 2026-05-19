import Header from '../components/Header';
import Footer from '../components/Footer';
import BrochureFormEmbed from '../components/BrochureFormEmbed';
import Image from 'next/image';

export default function WeddingPricingPage() {
  return (
    <>
      <Header />

      <main id="main">
        {/* Split layout: brochure cover left, form right */}
        <section className="min-h-[calc(100dvh-80px)] grid lg:grid-cols-2">

          {/* Left — Brochure cover image */}
          <div className="relative min-h-[50vh] md:min-h-0 bg-stone-100">
            <Image
              src="/brochure-cover.png"
              alt="Riviera Waterfront Mansion Welcome Brochure — Long Island wedding venue packages and pricing in Massapequa, NY"
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              quality={90}
            />
          </div>

          {/* Right — Form gate */}
          <div className="flex flex-col justify-center px-8 py-16 md:px-12 lg:px-16 bg-white">
            <div className="max-w-md w-full mx-auto">
              <p className="text-sm tracking-widest text-riviera-gold mb-4">WEDDING PRICING</p>
              <h1 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-riviera-text mb-4 leading-tight">
                Download The Riviera Waterfront Mansion Welcome Brochure!
              </h1>
              <p className="text-base font-light text-riviera-text/70 leading-relaxed mb-8">
                Fill out your information below to gain access to our ultimate welcome brochure. This free pamphlet will give you a taste of the Riviera Waterfront Mansion wedding experience while in the comfort of your own home. Packed with packages, amenities, and much more!
              </p>

              <BrochureFormEmbed />

              <p className="mt-6 text-xs font-light text-riviera-text/40 leading-relaxed">
                Prefer to speak with someone? Call us at{' '}
                <a
                  href="tel:+15165415020"
                  className="text-riviera-gold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold"
                >
                  (516) 541 5020
                </a>
              </p>
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
                name: 'Wedding Pricing',
                item: 'https://www.rivierawaterfrontmansion.com/wedding-pricing'
              }
            ]
          })
        }}
      />
    </>
  );
}
