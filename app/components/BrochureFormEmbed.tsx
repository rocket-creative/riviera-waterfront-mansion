'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

const FORM_SRC = 'https://api.leadconnectorhq.com/widget/form/ZSeDofIIiZDZHB5AcMqt';

export default function BrochureFormEmbed() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const show = () => setSrc(FORM_SRC);
    const id = window.requestIdleCallback(show, { timeout: 2000 });
    return () => window.cancelIdleCallback(id);
  }, []);

  return (
    <>
      {src ? (
        <iframe
          src={src}
          style={{ width: '100%', height: '1025px', border: 'none', borderRadius: 0 }}
          id="inline-ZSeDofIIiZDZHB5AcMqt"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Pricing Pamphlet Capture Form"
          data-height="1025"
          data-layout-iframe-id="inline-ZSeDofIIiZDZHB5AcMqt"
          data-form-id="ZSeDofIIiZDZHB5AcMqt"
          title="Pricing Pamphlet Capture Form"
        />
      ) : (
        <div className="w-full bg-riviera-neutral" style={{ height: '1025px' }} aria-hidden="true" />
      )}
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}
