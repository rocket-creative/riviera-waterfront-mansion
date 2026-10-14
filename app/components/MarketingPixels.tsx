'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { hasMarketingConsent, onConsentChange } from '../lib/consent';

/**
 * Meta and AdRoll load only after the visitor accepts marketing cookies,
 * and only once the page is idle.
 */
export default function MarketingPixels() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (hasMarketingConsent()) {
      setAllowed(true);
    }
    return onConsentChange((consent) => {
      if (consent.marketing) setAllowed(true);
    });
  }, []);

  if (!allowed) return null;

  return (
    <>
      <Script id="facebook-pixel" strategy="lazyOnload">
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
      <Script id="adroll-pixel" strategy="lazyOnload">
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
    </>
  );
}
