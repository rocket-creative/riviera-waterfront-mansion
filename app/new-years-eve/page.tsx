import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventbriteWidget from '../components/EventbriteWidget';
import EventCountdown from '../components/EventCountdown';
import NyeStickyBar from '../components/NyeStickyBar';
import JsonLd from '../components/JsonLd';
import { NYE_EVENT } from '../lib/nyeEvent';
import { pageGraph } from '../lib/schema';
import { absoluteUrl, venue } from '../lib/venueFacts';


const features = [
  {
    title: 'Live Entertainment',
    body: 'After Hours Entertainment featuring MC Switch & DJ Billy, with a live saxophonist and drummer.',
  },
  {
    title: 'Exquisite Dining',
    body: 'An elaborate dinner buffet followed by a decadent Viennese dessert hour.',
  },
  {
    title: 'Midnight Celebration',
    body: 'An unforgettable countdown, incredible music, and dancing as we ring in 2027!',
  },
];

const details = [
  { label: 'DATE', value: NYE_EVENT.dateLabel },
  { label: 'TIME', value: NYE_EVENT.timeLabel },
  { label: 'LOCATION', value: 'Riviera Waterfront Mansion\n200 East Shore Drive\nMassapequa, NY 11758' },
  { label: 'ADMISSION', value: `$${NYE_EVENT.price} per guest + Eventbrite fees` },
  {
    label: `GROUPS OF ${NYE_EVENT.groupMinimum}+`,
    value: `$${NYE_EVENT.groupPrice} per guest + Eventbrite fees`,
  },
  { label: 'AGE', value: '21+ only' },
  { label: 'PARKING', value: 'Valet parking provided' },
  { label: 'POLICY', value: 'All ticket sales are final. No refunds.' },
];

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4" aria-hidden="true">
      <span className="h-px w-16 sm:w-24 bg-riviera-neutral" />
      <span className="text-riviera-gold text-xs">◆</span>
      <span className="h-px w-16 sm:w-24 bg-riviera-neutral" />
    </div>
  );
}

export default function NewYearsEvePage() {
  return (
    <>
      <Header />

      <main id="main" className="bg-white text-riviera-text">
        {/* Hero: the client's cover art carries the event name, so the heading beside it does not repeat it */}
        <section className="relative overflow-hidden bg-[#150b26] text-white">
          {/* Same purple as the homepage banner, taken from the client's gala art */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#4a2180_0%,_transparent_65%)] opacity-70"
          />
          <div className="relative max-w-[1400px] mx-auto lg:px-10 lg:py-14 xl:py-16 grid lg:grid-cols-12 lg:gap-12 xl:gap-16 items-center">
            <div className="lg:col-span-7">
              <Image
                src={NYE_EVENT.coverSrc}
                alt={NYE_EVENT.coverAlt}
                width={NYE_EVENT.coverWidth}
                height={NYE_EVENT.coverHeight}
                sizes="(max-width: 1024px) 100vw, (max-width: 1400px) 58vw, 790px"
                priority
                className="block w-full h-auto lg:border lg:border-[#e9c98a]/40 lg:shadow-2xl"
              />
            </div>

            <div className="lg:col-span-5 px-6 sm:px-10 lg:px-0 pt-9 sm:pt-10 lg:pt-0 pb-14 sm:pb-16 lg:pb-0 text-center lg:text-left">
              <p className="text-[#e9c98a] text-xs sm:text-sm tracking-widest font-light mb-5">
                {NYE_EVENT.name.toUpperCase()} · WELCOME {NYE_EVENT.welcomeYear}
              </p>
              {/* Sized from the column width so the headline always holds one line */}
              <h1 className="font-cormorant font-light tracking-wide leading-[1.05] whitespace-nowrap text-white text-[clamp(1.75rem,8.4vw,3.5rem)] lg:text-[clamp(2.25rem,3.6vw,3.5rem)]">
                {NYE_EVENT.tagline}
              </h1>

              <p className="mt-6 text-xs sm:text-sm tracking-[0.2em] font-light text-white/90">
                THURSDAY, DECEMBER 31, 2026
                <span className="text-white/40" aria-hidden="true"> · </span>
                8:00 PM – 12:30 AM
              </p>
              <p className="mt-1.5 text-[10px] sm:text-xs tracking-[0.2em] font-light text-white/60">
                RIVIERA WATERFRONT MANSION · MASSAPEQUA, NY
              </p>

              <EventCountdown
                to={NYE_EVENT.startDate}
                label="Time until the gala"
                tone="dark"
                className="justify-center lg:justify-start mt-7 sm:mt-8"
              />

              <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="#tickets"
                  className="bg-[#e9c98a] text-[#150b26] px-6 sm:px-8 py-4 text-xs tracking-widest whitespace-nowrap font-normal hover:bg-white transition-colors text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  GET TICKETS · ${NYE_EVENT.price} →
                </a>
                <a
                  href="#evening"
                  className="border border-[#e9c98a]/60 text-[#e9c98a] px-6 sm:px-8 py-4 text-xs tracking-widest whitespace-nowrap font-light hover:bg-[#e9c98a] hover:text-[#150b26] transition-colors text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  THE EVENING
                </a>
              </div>
              <p className="mt-4 text-[11px] sm:text-xs font-light text-white/60">
                Groups of {NYE_EVENT.groupMinimum}+ are ${NYE_EVENT.groupPrice} per guest. Eventbrite fees apply. 21+ only.
              </p>
            </div>
          </div>
        </section>

        {/* The evening */}
        <section id="evening" className="scroll-mt-24 bg-riviera-text text-white">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 md:pt-20 lg:pt-24">
            <p className="text-riviera-gold text-xs tracking-[0.25em] font-light mb-5">
              WELCOME {NYE_EVENT.welcomeYear}
            </p>
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white md:whitespace-nowrap">
              Don&apos;t Settle for an Ordinary Celebration
            </h2>
          </div>
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 lg:pt-8 pb-16 md:pb-20 lg:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <p className="text-white/70 font-light leading-relaxed text-base mb-4">
                This New Year&apos;s Eve, join us for an extraordinary evening at the stunning Riviera
                Waterfront Mansion!
              </p>
              <p className="text-white/70 font-light leading-relaxed text-base mb-10">
                Experience a night of elegance, incredible entertainment, exquisite dining, and
                unforgettable moments as we welcome 2027 in spectacular style.
              </p>

              <p className="text-riviera-gold text-xs tracking-[0.25em] font-light mb-5">
                THE EVENING FEATURES
              </p>
              <ul className="space-y-4">
                {features.map(({ title, body }) => (
                  <li key={title} className="bg-white/5 border border-white/10 px-6 py-5 flex gap-4">
                    <span className="w-1 bg-riviera-gold shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="font-cormorant text-2xl font-light text-white mb-1">{title}</h3>
                      <p className="text-white/70 font-light text-sm sm:text-base leading-relaxed">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href="#tickets"
                className="inline-block mt-10 bg-riviera-gold text-white px-6 sm:px-8 py-4 text-xs font-light tracking-widest whitespace-nowrap hover:bg-white hover:text-riviera-text transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                RESERVE YOUR TICKETS →
              </a>
            </div>

            <figure className="lg:col-span-5 max-w-md mx-auto w-full">
              <Image
                src={NYE_EVENT.flyerSrc}
                alt={NYE_EVENT.flyerAlt}
                width={NYE_EVENT.flyerWidth}
                height={NYE_EVENT.flyerHeight}
                sizes="(max-width: 1024px) 90vw, 448px"
                className="block w-full h-auto shadow-2xl"
              />
            </figure>
          </div>
        </section>

        {/* Tickets: details beside the embedded Eventbrite checkout */}
        <section id="tickets" className="scroll-mt-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-riviera-gold text-xs tracking-[0.25em] font-light mb-4">TICKETS</p>
              <h2 className="font-cormorant text-4xl lg:text-5xl font-light leading-tight text-riviera-text mb-5">
                Grab Your Tickets
              </h2>
              <Divider />
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <p className="text-riviera-gold text-xs tracking-[0.25em] font-light mb-6">EVENT DETAILS</p>
                <dl>
                  {details.map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex gap-5 py-4 border-b border-riviera-neutral/60 first:pt-0 last:border-0"
                    >
                      <dt className="text-riviera-gold text-xs tracking-widest w-28 pt-0.5 shrink-0">
                        {label}
                      </dt>
                      <dd className="text-riviera-text font-light text-sm leading-relaxed whitespace-pre-line">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="border border-riviera-neutral">
                  <EventbriteWidget eventId={NYE_EVENT.eventbriteId} height={560} />
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                  <p className="text-riviera-text/40 text-xs font-light tracking-wide">
                    Secure checkout powered by Eventbrite
                  </p>
                  <a
                    href={NYE_EVENT.eventbriteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-riviera-gold text-xs font-light tracking-widest hover:text-riviera-text transition-colors"
                  >
                    OPEN ON EVENTBRITE →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing push, in the same dark block the other pages end on */}
        <section className="bg-riviera-text text-center px-6 sm:px-8 py-16 sm:py-24">
          <p className="text-riviera-gold text-xs tracking-[0.25em] font-light mb-5">
            ONE NIGHT · {NYE_EVENT.dateLabel.toUpperCase()}
          </p>
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-white mb-8">
            <span className="md:whitespace-nowrap">Don&apos;t Be the One Hearing About It</span>{' '}
            <span className="block lg:inline italic text-riviera-gold whitespace-nowrap">the Next Day</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#tickets"
              className="bg-riviera-gold text-white px-10 py-4 text-xs font-light tracking-widest hover:bg-white hover:text-riviera-text transition-all"
            >
              GET TICKETS · ${NYE_EVENT.price} →
            </a>
            <Link
              href="/contact"
              className="border border-white/30 text-white/70 px-10 py-4 text-xs font-light tracking-widest hover:border-white hover:text-white transition-all"
            >
              QUESTIONS? CONTACT US
            </Link>
          </div>
          <p className="mt-6 text-[11px] sm:text-xs font-light tracking-[0.15em] text-white/50">
            21+ ONLY · VALET PARKING PROVIDED · ALL TICKET SALES ARE FINAL
          </p>
        </section>
      </main>

      <Footer />

      <NyeStickyBar targetId="tickets" price={NYE_EVENT.price} />

      <JsonLd
        data={pageGraph({
          path: NYE_EVENT.path,
          name: `${NYE_EVENT.name}: ${NYE_EVENT.tagline}`,
          description: NYE_EVENT.description,
          crumbs: [
            { name: 'Home', path: '/' },
            { name: "New Year's Eve Gala", path: NYE_EVENT.path },
          ],
          extra: [
            {
              '@type': 'Event',
              '@id': `${absoluteUrl(NYE_EVENT.path)}#event`,
              name: `${NYE_EVENT.name}: ${NYE_EVENT.tagline}`,
              description: NYE_EVENT.description,
              startDate: NYE_EVENT.startDate,
              endDate: NYE_EVENT.endDate,
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              eventStatus: 'https://schema.org/EventScheduled',
              typicalAgeRange: '21-',
              offers: [
                {
                  '@type': 'Offer',
                  name: 'Individual admission',
                  price: NYE_EVENT.price,
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                  url: NYE_EVENT.eventbriteUrl,
                },
                {
                  '@type': 'Offer',
                  name: `Group admission, ${NYE_EVENT.groupMinimum} or more guests`,
                  price: NYE_EVENT.groupPrice,
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                  url: NYE_EVENT.eventbriteUrl,
                  eligibleQuantity: {
                    '@type': 'QuantitativeValue',
                    minValue: NYE_EVENT.groupMinimum,
                  },
                },
              ],
              image: [absoluteUrl(NYE_EVENT.coverSrc), absoluteUrl(NYE_EVENT.flyerSrc)],
              url: absoluteUrl(NYE_EVENT.path),
              performer: {
                '@type': 'MusicGroup',
                name: 'After Hours Entertainment',
              },
              location: {
                '@type': 'Place',
                name: venue.name,
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: venue.streetAddress,
                  addressLocality: venue.addressLocality,
                  addressRegion: venue.addressRegion,
                  postalCode: venue.postalCode,
                  addressCountry: venue.addressCountry,
                },
              },
              organizer: { '@id': venue.id },
            },
          ],
        })}
      />
    </>
  );
}
