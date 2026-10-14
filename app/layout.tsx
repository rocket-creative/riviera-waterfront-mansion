import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Lato } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import CookieConsent from './components/CookieConsent';
import ActionTracker from './components/ActionTracker';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rivierawaterfrontmansion.com'),
  title: 'Long Island Wedding Venue | Riviera Waterfront Mansion',
  description: 'Premier waterfront wedding venue in Massapequa, NY. Historic mansion, stunning water views, grand ballroom, indoor and outdoor ceremonies. Family owned since 1946. 150 to 350 guests.',
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com'
  },
  openGraph: {
    title: 'Long Island Wedding Venue | Riviera Waterfront Mansion',
    description: 'Premier waterfront wedding venue in Massapequa, NY. Historic mansion, stunning water views, grand ballroom, indoor and outdoor ceremonies. Family owned since 1946.',
    url: 'https://www.rivierawaterfrontmansion.com',
    siteName: 'Riviera Waterfront Mansion',
    images: [
      {
        url: 'https://www.rivierawaterfrontmansion.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Riviera Waterfront Mansion Long Island waterfront wedding venue at sunset in Massapequa NY'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Long Island Wedding Venue | Riviera Waterfront Mansion',
    description: 'Premier waterfront wedding venue in Massapequa, NY. Historic mansion, water views, grand ballroom, indoor and outdoor ceremonies. Family owned since 1946.',
    images: ['https://www.rivierawaterfrontmansion.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
  category: 'Wedding Venue',
  classification: 'Wedding Venue, Event Space, Banquet Hall',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${cormorant.variable} ${lato.variable}`}>
      <body className="antialiased bg-[#F5F3F0] font-lato">
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:p-4 focus:z-50 focus-visible:ring-2 focus-visible:ring-riviera-gold"
        >
          Skip to main content
        </a>
        
        {/* Magazine-style container */}
        <div className="min-h-dvh">
          <div className="max-w-[1440px] mx-auto bg-white min-h-dvh shadow-sm">
            {children}
          </div>
        </div>

        {/* Cookie consent banner */}
        <CookieConsent />
        <ActionTracker />

        {/* Meta Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '749068014796740');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=749068014796740&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* AdRoll */}
        <Script id="adroll-pixel" strategy="afterInteractive">
          {`
            adroll_adv_id = "3AZZLWS27FCYJHOKAPC7V5";
            adroll_pix_id = "AN5NJBRRRJG4BH7BDEZ2U5";
            adroll_version = "2.0";
            (function(w, d, e, o, a) {
                w.adroll_tag_source = w.adroll_tag_source || "manual";
                w.__adroll_loaded = true;
                w.adroll = w.adroll || [];
                w.adroll.f = [ 'setProperties', 'identify', 'track', 'identify_email', 'get_cookie' ];
                var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id + "/roundtrip.js";
                for (a = 0; a < w.adroll.f.length; a++) {
                    w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function(n) {
                        return function() { w.adroll.push([ n, arguments ]) }
                    })(w.adroll.f[a])
                }
                e = d.createElement('script');
                o = d.getElementsByTagName('script')[0];
                e.async = 1;
                e.src = roundtripUrl;
                o.parentNode.insertBefore(e, o);
            })(window, document);
            adroll.track("pageView");
          `}
        </Script>
      </body>
    </html>
  );
}
