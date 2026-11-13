import Image from 'next/image';
import Link from 'next/link';
import EventCountdown from './EventCountdown';
import ExpiresAt from './ExpiresAt';
import { isEventLive } from '../lib/eventWindow';
import { NYE_EVENT } from '../lib/nyeEvent';

/**
 * Homepage promotion for the New Year's Eve gala.
 * NyeHomeStrip sits above the hero; NyeHomeBand is the full feature block.
 * Both disappear when NYE_EVENT.enabled is false, and automatically once the event ends.
 */

export function NyeHomeStrip() {
  if (!isEventLive(NYE_EVENT.enabled, NYE_EVENT.endDate)) return null;

  return (
    <ExpiresAt endsAt={NYE_EVENT.endDate}>
    <Link
      href={NYE_EVENT.path}
      className="group block bg-[linear-gradient(90deg,#6a4b16_0%,#8f6a26_22%,#b38c3e_50%,#8f6a26_78%,#6a4b16_100%)] text-white [text-shadow:0_1px_2px_rgba(60,38,5,0.55)] px-4 py-3 sm:py-3.5 hover:brightness-105 transition-[filter] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2a1050]"
    >
      <span className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center">
        <span className="text-xs sm:text-sm md:text-base font-bold tracking-[0.14em]">
          NEW YEAR&apos;S EVE GALA
        </span>
        <span className="hidden md:inline text-sm md:text-base font-semibold tracking-[0.1em]">
          THURSDAY, DECEMBER 31
        </span>
        <span className="hidden sm:inline text-xs sm:text-sm md:text-base font-semibold tracking-[0.1em]">
          TICKETS ${NYE_EVENT.price}
        </span>
        <span className="bg-[#3a1670] text-white [text-shadow:none] px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-xs font-bold tracking-[0.14em] whitespace-nowrap group-hover:bg-[#2a1050] transition-colors">
          <span className="sm:hidden">TICKETS ${NYE_EVENT.price} →</span>
          <span className="hidden sm:inline">GET TICKETS →</span>
        </span>
      </span>
    </Link>
    </ExpiresAt>
  );
}

export function NyeHomeBand() {
  if (!isEventLive(NYE_EVENT.enabled, NYE_EVENT.endDate)) return null;

  return (
    <ExpiresAt endsAt={NYE_EVENT.endDate}>
    <section
      aria-labelledby="nye-home-heading"
      className="group relative overflow-hidden bg-[#150b26] text-white"
    >
      {/* Purple from the client's gala art, used here only so the promotion stands apart from the page */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#4a2180_0%,_transparent_65%)] opacity-70"
      />
      {/* The whole banner is one tap target. The two buttons sit above it and keep their own links. */}
      <Link
        href={NYE_EVENT.path}
        aria-label={`${NYE_EVENT.name}, ${NYE_EVENT.tagline}. View details and tickets.`}
        className="absolute inset-0 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#e9c98a]"
      />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 md:py-20 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7 overflow-hidden border border-[#e9c98a]/40 shadow-2xl">
          <Image
            src={NYE_EVENT.coverSrc}
            alt={NYE_EVENT.coverAlt}
            width={NYE_EVENT.coverWidth}
            height={NYE_EVENT.coverHeight}
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="block w-full h-auto group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
        </div>

        <div className="lg:col-span-5 text-center lg:text-left">
          <p className="text-[#e9c98a] text-[10px] sm:text-xs tracking-[0.3em] font-light mb-4">
            THURSDAY, DECEMBER 31 · 8:00 PM – 12:30 AM
          </p>
          <h2
            id="nye-home-heading"
            className="font-cormorant font-light tracking-wide leading-[1.1] whitespace-nowrap mb-4 text-[clamp(1.5rem,7.2vw,2.75rem)] lg:text-[clamp(1.75rem,2.7vw,2.5rem)]"
          >
            Welcome {NYE_EVENT.welcomeYear}{' '}
            <span className="italic text-[#e9c98a]">at the Riviera</span>
          </h2>
          <p className="text-white/75 font-light leading-relaxed text-sm sm:text-base max-w-md mx-auto lg:mx-0 mb-7">
            A New Year&apos;s Eve gala with a live DJ, saxophonist and drummer, an elaborate dinner
            buffet, a Viennese dessert hour, and a midnight countdown as we ring in 2027.
          </p>

          <EventCountdown
            to={NYE_EVENT.startDate}
            label="Time until the gala"
            size="sm"
            tone="dark"
            className="justify-center lg:justify-start mb-8"
          />

          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Link
              href={`${NYE_EVENT.path}#tickets`}
              className="relative z-20 bg-[#e9c98a] text-[#150b26] px-6 sm:px-8 py-4 text-xs tracking-widest whitespace-nowrap font-normal hover:bg-white transition-colors text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              GET TICKETS · ${NYE_EVENT.price} →
            </Link>
            <Link
              href={NYE_EVENT.path}
              className="relative z-20 border border-[#e9c98a]/60 text-[#e9c98a] px-6 sm:px-8 py-4 text-xs tracking-widest whitespace-nowrap font-light hover:bg-[#e9c98a] hover:text-[#150b26] transition-colors text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              EVENT DETAILS
            </Link>
          </div>
          <p className="mt-5 text-[10px] sm:text-xs tracking-[0.15em] font-light text-white/50">
            21+ ONLY · VALET PARKING PROVIDED
          </p>
        </div>
      </div>
    </section>
    </ExpiresAt>
  );
}
