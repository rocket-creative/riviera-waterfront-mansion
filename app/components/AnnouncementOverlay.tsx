'use client';

/**
 * AnnouncementOverlay — master reusable announcement card
 *
 * Sits over the hero carousel as a floating frosted-glass card.
 * Toggle it on/off via the `enabled` prop in the config below.
 * To swap announcements, edit ANNOUNCEMENT_CONFIG — the component
 * design never needs to change.
 *
 * ─── HOW TO UPDATE ────────────────────────────────────────────
 *  1. Set `enabled: true` to show the card, `false` to hide it.
 *  2. Fill in eyebrow, title, titleAccent, dateLabel, etc.
 *  3. Set ctaHref to any internal route or external URL.
 *  4. collapsedLabel is the pill text shown after the user closes.
 * ──────────────────────────────────────────────────────────────
 */

export interface AnnouncementConfig {
  /** Master on/off switch — set false to fully remove the overlay */
  enabled: boolean;
  /** Gold uppercase eyebrow, e.g. "UPCOMING EVENT" */
  eyebrow: string;
  /** Main title (plain portion) */
  title: string;
  /** Italic gold accent appended to title */
  titleAccent: string;
  /** Primary date line, e.g. "WEDNESDAY, APRIL 22" */
  dateLabel: string;
  /** Secondary time + location line */
  timeLocation: string;
  /** Large Cormorant word in bottom-left, e.g. "FREE" or "NEW" */
  badgeWord: string;
  /** Small label beneath the badge word, e.g. "ADMISSION" */
  badgeSublabel: string;
  /** Button text */
  ctaText: string;
  /** Internal route or external URL for the button */
  ctaHref: string;
  /** Text shown in the collapsed pill after user dismisses */
  collapsedLabel: string;
}

// ─── EDIT THIS OBJECT TO CHANGE THE ANNOUNCEMENT ──────────────
export const ANNOUNCEMENT_CONFIG: AnnouncementConfig = {
  enabled: true,

  eyebrow:       'UPCOMING EVENT',
  title:         'Spring Bridal ',
  titleAccent:   'Showcase!',
  dateLabel:     'WEDNESDAY, APRIL 22',
  timeLocation:  '6:00 PM – 9:00 PM · 200 E Shore Dr, Massapequa NY',
  badgeWord:     'FREE',
  badgeSublabel: 'ADMISSION',
  ctaText:       'SIGN UP HERE →',
  ctaHref:       '/spring-bridal-showcase',
  collapsedLabel: 'SPRING SHOWCASE',
};
// ──────────────────────────────────────────────────────────────

import { useState } from 'react';
import Link from 'next/link';

interface Props {
  config?: AnnouncementConfig;
}

export default function AnnouncementOverlay({ config = ANNOUNCEMENT_CONFIG }: Props) {
  const [isVisible, setIsVisible] = useState(true);

  // Master kill-switch
  if (!config.enabled) return null;

  const isExternal = config.ctaHref.startsWith('http');

  // ── Collapsed pill ──────────────────────────────────────────
  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="absolute top-3 right-3 sm:top-5 sm:right-5 z-30 group flex items-center gap-2
                   backdrop-blur-2xl bg-white/95 border border-gray-200/60
                   text-riviera-text px-3 sm:px-4 py-2 sm:py-2.5
                   text-[10px] sm:text-xs tracking-widest font-light
                   hover:bg-white transition-all shadow-lg"
        aria-label={`View ${config.collapsedLabel}`}
      >
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-riviera-gold animate-pulse" />
        {config.collapsedLabel}
        <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
      </button>
    );
  }

  // ── Full card ───────────────────────────────────────────────
  return (
    <div className="absolute inset-x-0 top-0 z-20 pointer-events-none
                    px-3 sm:px-5 lg:px-8
                    pt-3 sm:pt-5 lg:pt-7">
      <div className="relative pointer-events-auto">

        {/* Frosted glass background */}
        <div className="absolute inset-0 backdrop-blur-2xl bg-white/95 border border-gray-200/60 shadow-2xl" />

        {/* Close */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 z-10
                     text-riviera-text/40 hover:text-riviera-text transition-colors p-1"
          aria-label="Close announcement"
        >
          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M1 1l10 10M11 1L1 11" />
          </svg>
        </button>

        <div className="relative px-5 sm:px-7 lg:px-10 py-5 sm:py-7 lg:py-8 flex flex-col">

          {/* Row 1 — eyebrow */}
          <p className="text-riviera-gold text-[9px] sm:text-[10px] tracking-[0.28em] font-light mb-2 sm:mb-3">
            {config.eyebrow}
          </p>

          {/* Row 2 — title */}
          <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-light text-riviera-text tracking-wide leading-tight mb-2 sm:mb-3 pr-6">
            {config.title}
            <span className="italic text-riviera-gold">{config.titleAccent}</span>
          </h2>

          {/* Row 3 — date & time */}
          <div className="border-t border-dashed border-gray-300 pt-3 sm:pt-4 mb-3 sm:mb-4">
            <p className="text-riviera-text text-[10px] sm:text-xs tracking-[0.2em] font-light">
              {config.dateLabel}
            </p>
            <p className="text-riviera-text/55 text-[10px] sm:text-xs tracking-[0.15em] font-light mt-0.5 leading-relaxed">
              {config.timeLocation}
            </p>
          </div>

          {/* Row 4 — badge word + CTA */}
          <div className="border-t border-dashed border-gray-300 pt-3 sm:pt-5 flex items-center gap-4 sm:gap-6">

            {/* Col 1: badge word stacked */}
            <div className="flex-1 min-w-0">
              <p className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-light text-riviera-text leading-none tracking-wide">
                {config.badgeWord}
              </p>
              <p
                className="text-riviera-text/45 text-[9px] sm:text-[10px] font-light mt-0.5 w-full"
                style={{ letterSpacing: '1.1em' }}
              >
                {config.badgeSublabel}
              </p>
            </div>

            {/* Col 2: CTA button */}
            <div className="shrink-0">
              {isExternal ? (
                <a
                  href={config.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-riviera-gold text-white
                             px-4 sm:px-6 py-3 sm:py-4
                             text-[10px] sm:text-[11px] font-light tracking-widest
                             hover:bg-riviera-text transition-all text-center whitespace-nowrap"
                >
                  {config.ctaText}
                </a>
              ) : (
                <Link
                  href={config.ctaHref}
                  className="block bg-riviera-gold text-white
                             px-4 sm:px-6 py-3 sm:py-4
                             text-[10px] sm:text-[11px] font-light tracking-widest
                             hover:bg-riviera-text transition-all text-center whitespace-nowrap"
                >
                  {config.ctaText}
                </Link>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
