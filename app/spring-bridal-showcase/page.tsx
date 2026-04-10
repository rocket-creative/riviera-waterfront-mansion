'use client';

import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

declare global {
  interface Window {
    EBWidgets: {
      createWidget: (options: Record<string, unknown>) => void;
    };
  }
}

const galleryPhotos = [
  { src: '/images/large/_0359671-by-p.jpg',  span: 'lg:col-span-2 lg:row-span-2' },
  { src: '/images/large/_1058724-jj-p.jpg',  span: '' },
  { src: '/images/large/_1059409-jj-p.jpg',  span: '' },
  { src: '/images/large/_0359652-by-p.jpg',  span: '' },
  { src: '/images/large/_0350091-by-p.jpg',  span: '' },
  { src: '/images/large/_0359665-by-p.jpg',  span: 'lg:col-span-2' },
  { src: '/images/large/_0359695-by-p.jpg',  span: '' },
  { src: '/images/large/_0359733-by-p.jpg',  span: '' },
  { src: '/images/tour/outdoor-ceremony/DJI_0003-mc-d-420d930c-1920w.jpg',  span: '' },
  { src: '/images/tour/outdoor-ceremony/DJI_0016-mc-d-1c988480-1920w.jpg',  span: '' },
  { src: '/images/tour/main-ballroom/CAB-0836-mc-d-3e752c5c-1920w.jpg',     span: 'lg:col-span-2 lg:row-span-2' },
  { src: '/images/tour/balconies/bal-1920w.jpg',                             span: '' },
  { src: '/images/tour/bridal-suite/_CRQ4695-b4b5b277-1920w.jpg',           span: '' },
  { src: '/images/large/_0359684-by-p.jpg',  span: '' },
  { src: '/images/large/_0359729-by-p.jpg',  span: '' },
];

function EventbriteWidget() {
  const initialized = useRef(false);

  const handleScriptLoad = () => {
    if (initialized.current) return;
    if (typeof window !== 'undefined' && window.EBWidgets) {
      initialized.current = true;
      window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '1984985517116',
        iframeContainerId: 'eventbrite-widget-container-1984985517116',
        iframeContainerHeight: 425,
        onOrderComplete: () => console.log('Order complete!'),
      });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.EBWidgets && !initialized.current) {
      handleScriptLoad();
    }
  });

  return (
    <>
      <div
        id="eventbrite-widget-container-1984985517116"
        className="min-h-[425px] w-full"
      />
      <Script
        src="https://www.eventbrite.com/static/widgets/eb_widgets.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
    </>
  );
}

export default function SpringBridalShowcase() {
  return (
    <>
      <Header />

      <main>
        {/* Text Hero */}
        <section className="bg-white pt-16 sm:pt-20 lg:pt-14 pb-0">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 text-center">

            {/* Eyebrow */}
            <p className="text-riviera-gold text-[10px] sm:text-xs tracking-[0.3em] mb-6 sm:mb-8 lg:mb-4 font-light">
              RIVIERA WATERFRONT MANSION PRESENTS
            </p>

            {/* Title */}
            <h1 className="font-cormorant font-light text-riviera-text tracking-wide leading-none mb-2 sm:mb-3
                           text-[clamp(3rem,12vw,8rem)]">
              Spring Bridal
            </h1>
            <h1 className="font-cormorant font-light italic text-riviera-gold tracking-wide leading-none
                           text-[clamp(3rem,12vw,8rem)]">
              Showcase
            </h1>

            {/* Thin rule */}
            <div className="flex items-center gap-4 sm:gap-6 justify-center mt-8 sm:mt-10 lg:mt-6 mb-6 sm:mb-8 lg:mb-5">
              <div className="flex-1 max-w-[120px] sm:max-w-[180px] h-px bg-riviera-neutral" />
              <p className="text-riviera-text text-[10px] sm:text-xs tracking-[0.2em] font-light whitespace-nowrap">
                WEDNESDAY, APRIL 22 · 6 PM – 9 PM
              </p>
              <div className="flex-1 max-w-[120px] sm:max-w-[180px] h-px bg-riviera-neutral" />
            </div>

            {/* Location + Free badge row */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-12 sm:mb-16 lg:mb-8">
              <span className="text-riviera-text/55 text-xs tracking-widest font-light">
                200 E SHORE DR · MASSAPEQUA, NY
              </span>
              <span className="border border-riviera-gold text-[10px] tracking-[0.25em] font-light px-4 py-1.5">
                <span className="text-riviera-gold">FREE</span>
                <span className="text-riviera-text/50"> ADMISSION</span>
              </span>
            </div>
          </div>

          {/* Three preview images flush below hero text */}
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-3">
              {[
                { src: '/images/large/_0359671-by-p.jpg',                                    label: 'The Couples' },
                { src: '/images/tour/outdoor-ceremony/DJI_0003-mc-d-420d930c-1920w.jpg',    label: 'The Grounds' },
                { src: '/images/tour/main-ballroom/CAB-0836-mc-d-3e752c5c-1920w.jpg',       label: 'The Ballroom' },
              ].map(({ src, label }) => (
                <div key={label} className="group">
                  <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                    <Image
                      src={src}
                      alt={label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 400px"
                      priority
                    />
                  </div>
                  <p className="text-riviera-text/45 text-[9px] sm:text-[10px] tracking-[0.2em] font-light mt-2 text-center">
                    {label.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Details + Widget */}
        <section className="bg-white pt-14 sm:pt-20 lg:pt-28 pb-12 sm:pb-16 lg:pb-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

            {/* Event Info */}
            <div>
              <p className="text-riviera-gold text-xs tracking-[0.25em] mb-5 font-light">
                EVENT DETAILS
              </p>
              <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-riviera-text mb-8 leading-tight">
                Your dream day<br />starts here
              </h2>
              <p className="text-riviera-text/65 font-light leading-relaxed mb-10 text-base">
                Explore the latest bridal trends, meet Long Island&apos;s top wedding vendors, and find inspiration for your perfect day at our stunning waterfront estate. Whether you&apos;re just beginning to plan or adding finishing touches, the Spring Bridal Showcase has something for every bride-to-be.
              </p>

              {/* Details list */}
              <div className="space-y-5 mb-10">
                {[
                  { label: 'DATE',      value: 'Wednesday, April 22, 2026' },
                  { label: 'TIME',      value: '6:00 PM – 9:00 PM' },
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

              {/* Highlights */}
              <div className="bg-riviera-neutral/40 p-6">
                <p className="text-riviera-gold text-xs tracking-widest mb-4 font-light">HIGHLIGHTS</p>
                <ul className="space-y-2">
                  {[
                    'Meet and connect with curated local vendors',
                    'Explore the mansion and its breathtaking waterfront grounds',
                    'Discover bridal trends and décor inspiration',
                    'Enjoy a relaxed, friendly atmosphere',
                    '3 hours of wedding planning in one evening',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-riviera-text/70 text-sm font-light">
                      <span className="text-riviera-gold mt-1.5 text-xs">◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Eventbrite Widget */}
            <div>
              <p className="text-riviera-gold text-xs tracking-[0.25em] mb-5 font-light">
                SECURE YOUR SPOT
              </p>
              <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-riviera-text mb-8 leading-tight">
                Register now —<br />it&apos;s free
              </h2>
              <div className="border border-riviera-neutral">
                <EventbriteWidget />
              </div>
              <p className="text-riviera-text/40 text-xs font-light mt-4 tracking-wide">
                Powered by Eventbrite · Free admission · Limited capacity
              </p>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="bg-riviera-neutral/30 py-12 sm:py-16 lg:py-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="text-center mb-8 sm:mb-14">
              <p className="text-riviera-gold text-xs tracking-[0.25em] mb-4 font-light">THE VENUE</p>
              <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-riviera-text leading-tight">
                See where the magic happens
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-1.5 sm:gap-2 md:gap-3 auto-rows-[260px] lg:auto-rows-[240px]">
              {galleryPhotos.map(({ src, span }, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden group ${span}`}
                >
                  <Image
                    src={src}
                    alt={`Riviera Waterfront Mansion — wedding photo ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {/* Hover shimmer */}
                  <div className="absolute inset-0 bg-riviera-gold/0 group-hover:bg-riviera-gold/10 transition-colors duration-500" />
                </div>
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
            We&apos;d love to hear from you
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
    </>
  );
}
