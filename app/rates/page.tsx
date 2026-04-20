import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import MobileStickyCTA from '../components/MobileStickyCTA';
import FAQSection from '../components/FAQSection';

const includedItems = [
  'Exclusive use of the mansion and all grounds for the entire event',
  'Indoor and outdoor ceremony options',
  'Private bridal suite for the wedding party',
  'Elegant grand ballroom reception with professional service staff',
  'Customizable floor plans and event timeline guidance',
  'Manicured waterfront gardens and gazebo for photos',
  "Professional Maitre'D to orchestrate your ceremony and reception",
  'Bridal attendant for the couple throughout the day',
  'Five hour top shelf open bar',
  'Chef inspired Continental cuisine: cocktail hour and plated dinner',
  'Tables, linens, and full setup',
  'Backup generator for uninterrupted service',
  'Climate controlled facilities',
  'One event at a time — the entire venue is exclusively yours',
];

const faqs = [
  {
    question: 'Do you host more than one event at a time?',
    answer:
      'No. Riviera Waterfront Mansion hosts one wedding at a time. Once your date is reserved, the entire venue is exclusively yours for the duration of your event.',
  },
  {
    question: 'What days of the week do you host weddings?',
    answer: 'We host weddings Thursday through Sunday.',
  },
  {
    question: 'What is the guest minimum?',
    answer:
      'Our minimum is 150 guests. Our grand ballroom accommodates up to 350 guests.',
  },
  {
    question: 'What does pricing include?',
    answer:
      'All packages include cocktail hour, plated reception dinner, five hour top shelf open bar, and full use of the venue and grounds. All pricing is plus a 22% admin fee and NYS tax.',
  },
  {
    question: 'How do I get pricing?',
    answer:
      'Contact our team to schedule a private tour and receive a personalized proposal for your date.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Contact us directly for details on our policies and payment schedule.',
  },
];

export default function RatesPage() {
  return (
    <>
      <Header />

      <main id="main">

        {/* Hero Section */}
        <section className="bg-riviera-neutral py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-riviera-text mb-6">
              Rates and availability for your Long Island waterfront wedding
            </h1>
            <p className="text-lg md:text-xl font-light text-riviera-text/70 max-w-2xl mx-auto">
              Every Riviera Waterfront Mansion wedding is priced based on your chosen date, guest count, and menu selections. Contact us for a personalized proposal.
            </p>
          </div>
        </section>

        {/* Important Notice Bar */}
        <section className="bg-riviera-gold py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="font-cormorant text-2xl md:text-3xl font-light tracking-wide mb-3">
              Limited 2026 and 2027 wedding dates remaining
            </p>
            <p className="text-sm font-light tracking-widest opacity-90 mb-3">
              CALL TUESDAY THROUGH SUNDAY TO CHECK AVAILABILITY FOR YOUR DATE
            </p>
            <a
              href="tel:+15165415020"
              className="text-lg font-light tracking-wide underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-riviera-gold"
            >
              (516) 541 5020
            </a>
          </div>
        </section>

        {/* How Pricing Works */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-6">
                How our Long Island wedding pricing works
              </h2>
              <div className="max-w-3xl">
                <p className="text-base font-light text-riviera-text/70 leading-relaxed">
                  All packages include cocktail hour, plated reception dinner, Continental cuisine, and a five hour top shelf open bar. All pricing is plus a 22% admin fee and NYS tax. Contact us for a personalized proposal.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-0 border border-riviera-neutral">
              <div className="p-8 border-b lg:border-b-0 lg:border-r border-riviera-neutral">
                <h3 className="text-xs tracking-widest text-riviera-gold mb-4">AVAILABLE DAYS</h3>
                <p className="font-cormorant text-xl font-light text-riviera-text mb-2">
                  Thursday through Sunday
                </p>
                <p className="text-sm font-light text-riviera-text/60 leading-relaxed">
                  We host weddings four days a week to ensure each couple receives our full attention and service.
                </p>
              </div>
              <div className="p-8 border-b lg:border-b-0 lg:border-r border-riviera-neutral">
                <h3 className="text-xs tracking-widest text-riviera-gold mb-4">GUEST COUNT</h3>
                <p className="font-cormorant text-xl font-light text-riviera-text mb-2">
                  150 to 350 guests
                </p>
                <p className="text-sm font-light text-riviera-text/60 leading-relaxed">
                  A 150 guest minimum is required. Our grand ballroom accommodates up to 350 guests.
                </p>
              </div>
              <div className="p-8">
                <h3 className="text-xs tracking-widest text-riviera-gold mb-4">PRICING</h3>
                <p className="font-cormorant text-xl font-light text-riviera-text mb-2">
                  Contact us for current rates
                </p>
                <p className="text-sm font-light text-riviera-text/60 leading-relaxed">
                  Personalized proposals available. Contact us to receive current rates for your date.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="bg-riviera-neutral py-16 md:py-24 px-4 sm:px-6 lg:px-8" aria-labelledby="included-heading">
          <div className="max-w-5xl mx-auto">
            <h2 id="included-heading" className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-4">
              {"What's included with every Riviera Waterfront Mansion wedding"}
            </h2>
            <p className="text-base font-light text-riviera-text/70 mb-10 max-w-2xl">
              Every Riviera Waterfront Mansion wedding includes full access to the mansion, the grounds, and our complete team of wedding professionals.
            </p>
            <ul className="grid lg:grid-cols-2 gap-x-12 gap-y-4">
              {includedItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-riviera-gold mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base font-light text-riviera-text/80 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          faqs={faqs}
          title="Frequently asked questions about rates and availability"
          eyebrow="RATES & AVAILABILITY"
          background="white"
        />

        {/* Final CTA */}
        <section className="bg-riviera-text py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-6">
              Ready to check your date at Riviera Waterfront Mansion?
            </h2>
            <p className="text-base font-light opacity-70 mb-10 max-w-xl mx-auto">
              Schedule a private tour and speak with our team about availability, pricing, and everything your wedding day will include.
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-white hover:text-riviera-text transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2 focus-visible:ring-offset-riviera-text"
              >
                BOOK A TOUR &rarr;
              </Link>
              <a
                href="tel:+15165415020"
                className="inline-block border border-white/40 text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-white hover:text-riviera-text transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-riviera-text"
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
                item: 'https://www.rivierawaterfrontmansion.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Rates',
                item: 'https://www.rivierawaterfrontmansion.com/rates',
              },
            ],
          }),
        }}
      />
      {/* JSON-LD FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <MobileStickyCTA />
    </>
  );
}
