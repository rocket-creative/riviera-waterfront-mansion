'use client';

import Script from 'next/script';

export default function BrochureFormEmbed() {
  return (
    <>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/ZSeDofIIiZDZHB5AcMqt"
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
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
