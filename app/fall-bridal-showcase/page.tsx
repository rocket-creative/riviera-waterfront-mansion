import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResponsiveFillImage from '../components/ResponsiveFillImage';
import EventbriteWidget from '../components/EventbriteWidget';
import JsonLd from '../components/JsonLd';
import { altForImage, elenaKayFallbackSrc, elenaKaySrcSet, isElenaKayPhoto } from '../lib/elenaKay2026';
import { pageGraph } from '../lib/schema';
import { absoluteUrl, venue } from '../lib/venueFacts';
import Link from 'next/link';

const HERO_SRC = '/images/showcase/fall-bridal-rainbow-ceremony.jpg';
const HERO_ALT = 'Outdoor wedding ceremony at sunset under a rainbow at Riviera Waterfront Mansion';

const description =
  'Free Fall Bridal Showcase at Riviera Waterfront Mansion on Thursday, November 19, 2026, 6:30–8:30 PM. In person at 200 E Shore Dr, Massapequa, NY.';

const EVENTBRITE_EVENT_ID = '2003982880742';

const previewPhotos: { src: string; label: string; w: number; h: number }[] = [
  { src: '/images/2026/w1600/pycior-lawn-cupola.webp', label: 'The Couples', w: 1600, h: 2400 },
  { src: '/images/2026/w2400/spano-waterfront-sunset.webp', label: 'The Grounds', w: 2400, h: 1600 },
  { src: '/images/2026/w2400/pycior-ballroom-couple.webp', label: 'The Ballroom', w: 2400, h: 1600 },
];

const galleryPhotos: { src: string; w: number; h: number }[] = [
  { src: HERO_SRC, w: 767, h: 1024 },
  { src: '/images/2026/w2400/morrone-vows.webp', w: 2400, h: 1600 },
  { src: '/images/2026/w2400/pycior-bay-couple.webp', w: 2400, h: 1600 },
  { src: '/images/2026/w2400/pycior-bridal-party.webp', w: 2400, h: 1600 },
  { src: '/images/2026/w2400/pycior-mansion-facade.webp', w: 2400, h: 1600 },
  { src: '/images/2026/w2400/morrone-first-look.webp', w: 2400, h: 1600 },
  { src: '/images/large/_0359671-by-p.jpg', w: 1920, h: 2880 },
  { src: '/images/large/_1058724-jj-p.jpg', w: 1920, h: 1280 },
  { src: '/images/large/_1059409-jj-p.jpg', w: 1920, h: 1280 },
  { src: '/images/large/_0359652-by-p.jpg', w: 1920, h: 2880 },
  { src: '/images/large/_0350091-by-p.jpg', w: 1920, h: 1280 },
  { src: '/images/large/_0359665-by-p.jpg', w: 1920, h: 2880 },
  { src: '/images/large/_0359695-by-p.jpg', w: 1920, h: 2880 },
  { src: '/images/large/_0359733-by-p.jpg', w: 1920, h: 1280 },
  { src: '/images/tour/outdoor-ceremony/DJI_0003-mc-d-420d930c-1920w.jpg', w: 1920, h: 1080 },
  { src: '/images/tour/outdoor-ceremony/DJI_0016-mc-d-1c988480-1920w.jpg', w: 1920, h: 1080 },
  { src: '/images/tour/main-ballroom/CAB-0836-mc-d-3e752c5c-1920w.jpg', w: 1920, h: 1080 },
  { src: '/images/tour/balconies/bal-1920w.jpg', w: 1440, h: 810 },
  { src: '/images/tour/bridal-suite/_CRQ4695-b4b5b277-1920w.jpg', w: 1920, h: 1080 },
  { src: '/images/large/_0359684-by-p.jpg', w: 1920, h: 2880 },
  { src: '/images/large/_0359729-by-p.jpg', w: 1920, h: 2880 },
];

function FittedPhoto({
  src,
  alt,
  w,
  h,
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
  sizes: string;
  priority?: boolean;
}) {
  const described = altForImage(src, alt);
  const frame = 'block w-full h-auto group-hover:scale-[1.03] transition-transform duration-700 ease-out';

  if (isElenaKayPhoto(src)) {
    return (
      // Pre-sized files already match the breakpoints, so this does not go through the optimizer again.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={elenaKayFallbackSrc(src)}
        srcSet={elenaKaySrcSet(src)}
        sizes={sizes}
        alt={described}
        width={w}
        height={h}
        className={frame}
        decoding="async"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={described}
      width={w}
      height={h}
      sizes={sizes}
      priority={priority}
      className={frame}
    />
  );
}

export default function FallBridalShowcase() {
  return (
    <>
      <Header />

      <main id="main">
        {/* Photo hero — ceremony image is the background; type sits in the original showcase card */}
        <section className="relative flex items-center justify-center overflow-hidden bg-[#1c2430] min-h-[92svh] px-4 sm:px-6 py-14 sm:py-16 lg:py-20">
          <div className="absolute inset-0">
            <ResponsiveFillImage
              src={HERO_SRC}
              alt={HERO_ALT}
              className="object-cover object-[center_38%]"
              sizes="(max-width: 1440px) 100vw, 1440px"
              priority
            />
            <div className="absolute inset-0 bg-black/25" />
          </div>

          <div className="relative z-10 w-full max-w-3xl bg-white/95 backdrop-blur-md shadow-2xl px-5 sm:px-12 py-10 sm:py-14 text-center">
            <p className="text-riviera-gold text-[10px] sm:text-xs tracking-[0.3em] mb-5 sm:mb-6 font-light">
              RIVIERA WATERFRONT MANSION PRESENTS
            </p>

            <h1 className="font-cormorant font-light tracking-wide leading-none
                           text-[clamp(2.75rem,9vw,5.5rem)]">
              <span className="block text-riviera-text">Fall Bridal</span>
              <span className="block italic text-riviera-gold">Showcase</span>
            </h1>

            <div className="flex items-center gap-4 sm:gap-6 justify-center mt-7 sm:mt-8 mb-5 sm:mb-6">
              <div className="flex-1 max-w-[80px] sm:max-w-[120px] h-px bg-riviera-neutral" />
              <p className="text-riviera-text text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.2em] font-light whitespace-nowrap">
                THURSDAY, NOVEMBER 19 · 6:30–8:30 PM
              </p>
              <div className="flex-1 max-w-[80px] sm:max-w-[120px] h-px bg-riviera-neutral" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
              <span className="text-riviera-text/55 text-xs tracking-widest font-light">
                200 E SHORE DR · MASSAPEQUA, NY
              </span>
              <span className="border border-riviera-gold text-[10px] tracking-[0.25em] font-light px-4 py-1.5">
                <span className="text-riviera-gold">FREE</span>
                <span className="text-riviera-text/50"> ADMISSION</span>
              </span>
            </div>

            <p className="text-riviera-text/70 font-light leading-relaxed text-sm sm:text-base max-w-xl mx-auto">
              Get ready to find all the bridal inspiration you need to make your big day totally unforgettable.
            </p>
          </div>
        </section>

        {/* Portrait beside two landscapes, each frame matching the photo */}
        <section className="bg-white pt-8 sm:pt-10 pb-4">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,8fr)_minmax(0,9fr)] gap-3 sm:gap-4">
              <figure className="group">
                <div className="overflow-hidden bg-stone-100">
                  <FittedPhoto
                    src={previewPhotos[0].src}
                    alt={previewPhotos[0].label}
                    w={previewPhotos[0].w}
                    h={previewPhotos[0].h}
                    sizes="(max-width: 1024px) 100vw, 480px"
                    priority
                  />
                </div>
                <figcaption className="text-riviera-text/45 text-[9px] sm:text-[10px] tracking-[0.2em] font-light mt-2 text-center">
                  {previewPhotos[0].label.toUpperCase()}
                </figcaption>
              </figure>
              <div className="grid gap-3 sm:gap-4 content-start">
                {previewPhotos.slice(1).map(({ src, label, w, h }) => (
                  <figure key={label} className="group">
                    <div className="overflow-hidden bg-stone-100">
                      <FittedPhoto
                        src={src}
                        alt={label}
                        w={w}
                        h={h}
                        sizes="(max-width: 1024px) 100vw, 640px"
                      />
                    </div>
                    <figcaption className="text-riviera-text/45 text-[9px] sm:text-[10px] tracking-[0.2em] font-light mt-2 text-center">
                      {label.toUpperCase()}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="bg-white pt-14 sm:pt-20 lg:pt-28 pb-12 sm:pb-16 lg:pb-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

            <div>
              <p className="text-riviera-gold text-xs tracking-[0.25em] mb-5 font-light">
                EVENT DETAILS
              </p>
              <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-riviera-text mb-8 leading-tight">
                Your Dream Day<br />Starts Here
              </h2>
              <p className="text-riviera-text/65 font-light leading-relaxed mb-10 text-base">
                Join us for the Fall Bridal Showcase at 200 East Shore Drive on Thursday, November 19, 2026, from 6:30 to 8:30 PM Eastern. Admission is free. This in-person evening is a chance to explore the latest trends and ideas for your wedding in a relaxed, friendly setting. Whether you are just starting to plan or putting on the finishing touches, come see what&apos;s new this fall.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  { label: 'DATE',     value: 'Thursday, November 19, 2026' },
                  { label: 'TIME',      value: '6:30 PM – 8:30 PM Eastern' },
                  { label: 'LOCATION',  value: '200 East Shore Drive\nMassapequa, NY 11758' },
                  { label: 'ADMISSION', value: 'Free' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-6 pb-5 border-b border-riviera-neutral/60 last:border-0 last:pb-0">
                    <span className="text-riviera-gold text-xs tracking-widest w-24 pt-0.5 shrink-0">
                      {label}
                    </span>
                    <span className="text-riviera-text font-light text-sm leading-relaxed whitespace-pre-line">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-riviera-neutral/40 p-6">
                <p className="text-riviera-gold text-xs tracking-widest mb-4 font-light">HIGHLIGHTS</p>
                <ul className="space-y-2">
                  {[
                    'Bridal inspiration for a day you will remember',
                    'The latest trends and ideas for your wedding',
                    'A relaxed, friendly evening at the waterfront mansion',
                    'Useful if you are just starting to plan',
                    'Just as helpful when you are finishing the details',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-riviera-text/70 text-sm font-light">
                      <span className="text-riviera-gold mt-1.5 text-xs">◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="text-riviera-gold text-xs tracking-[0.25em] mb-5 font-light">
                SECURE YOUR SPOT
              </p>
              <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-riviera-text mb-8 leading-tight">
                Register Now —<br />It&apos;s Free
              </h2>
              <div className="border border-riviera-neutral">
                <EventbriteWidget eventId={EVENTBRITE_EVENT_ID} />
              </div>
              <p className="text-riviera-text/40 text-xs font-light mt-4 tracking-wide">
                Powered by Eventbrite · Free admission · 6:30–8:30 PM
              </p>
              <a
                href="https://www.eventbrite.com/e/fall-bridal-showcase-tickets-2003982880742?aff=oddtdtcreator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-riviera-gold text-xs font-light tracking-widest hover:text-riviera-text transition-colors"
              >
                VIEW ON EVENTBRITE →
              </a>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="bg-riviera-neutral/30 py-12 sm:py-16 lg:py-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="text-center mb-8 sm:mb-14">
              <p className="text-riviera-gold text-xs tracking-[0.25em] mb-4 font-light">THE VENUE</p>
              <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-riviera-text leading-tight">
                See Where The Magic Happens
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
              {galleryPhotos.map(({ src, h, w }, i) => (
                <figure
                  key={`${src}-${i}`}
                  className="group relative aspect-[3/2] overflow-hidden bg-stone-100"
                >
                  <ResponsiveFillImage
                    src={src}
                    alt={i === 0 ? HERO_ALT : `Riviera Waterfront Mansion — wedding photo ${i + 1}`}
                    className={`object-cover group-hover:scale-105 transition-transform duration-700 ease-out ${
                      h > w ? 'object-[center_32%]' : 'object-center'
                    }`}
                    sizes="(max-width: 1024px) 50vw, 360px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-riviera-gold/0 group-hover:bg-riviera-gold/10 transition-colors duration-500" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Venue teaser strip */}
        <section className="bg-white py-12 lg:py-20 border-t border-riviera-neutral/50">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 text-center">
            {[
              { stat: '1',   label: 'WEDDING PER DAY',       sub: 'Exclusively yours' },
              { stat: '75+', label: 'YEARS OF EXCELLENCE',   sub: 'Three generations' },
              { stat: '350', label: 'GUEST CAPACITY',        sub: 'Minimum 150' },
            ].map(({ stat, label, sub }) => (
              <div key={label}>
                <p className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-light text-riviera-gold mb-1 sm:mb-2">{stat}</p>
                <p className="text-riviera-text text-[9px] sm:text-xs tracking-widest font-light mb-0.5 sm:mb-1 leading-tight">{label}</p>
                <p className="text-riviera-text/40 text-[9px] sm:text-xs font-light tracking-wide hidden sm:block">{sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-riviera-text py-14 sm:py-20 text-center px-5 sm:px-6">
          <p className="text-riviera-gold text-xs tracking-[0.25em] mb-5 font-light">QUESTIONS?</p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-white mb-3 leading-tight">
            We&apos;d Love to Hear From You
          </h2>
          <p className="text-white/50 font-light text-sm mb-10 tracking-wide">
            200 East Shore Drive · Massapequa, NY 11758
          </p>
          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-riviera-gold text-white px-10 py-4 text-xs font-light tracking-widest hover:bg-white hover:text-riviera-text transition-all"
            >
              CONTACT US →
            </Link>
            <Link
              href="/"
              className="border border-white/30 text-white/70 px-10 py-4 text-xs font-light tracking-widest hover:border-white hover:text-white transition-all"
            >
              ← BACK TO HOME
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <JsonLd
        data={pageGraph({
          path: '/fall-bridal-showcase',
          name: 'Fall Bridal Showcase',
          description,
          crumbs: [
            { name: 'Home', path: '/' },
            { name: 'Fall Bridal Showcase', path: '/fall-bridal-showcase' },
          ],
          extra: [
            {
              '@type': 'Event',
              '@id': `${absoluteUrl('/fall-bridal-showcase')}#event`,
              name: 'Fall Bridal Showcase',
              description,
              startDate: '2026-11-19T18:30:00-05:00',
              endDate: '2026-11-19T20:30:00-05:00',
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              eventStatus: 'https://schema.org/EventScheduled',
              offers: {
                '@type': 'Offer',
                name: 'Fall Bridal Showcase admission',
                description: 'Admission to the Fall Bridal Showcase. Wedding pricing at this high-end Long Island waterfront venue is quoted in a private proposal.',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
                url: `https://www.eventbrite.com/e/fall-bridal-showcase-tickets-${EVENTBRITE_EVENT_ID}`,
              },
              image: absoluteUrl(HERO_SRC),
              url: absoluteUrl('/fall-bridal-showcase'),
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
