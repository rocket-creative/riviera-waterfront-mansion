'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import { trackAction } from '../lib/track-action';

declare global {
  interface Window {
    EBWidgets: {
      createWidget: (options: Record<string, unknown>) => void;
    };
  }
}

export default function EventbriteWidget() {
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
        onOrderComplete: () => trackAction('eventbrite', 'order_complete'),
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
        strategy="lazyOnload"
        onLoad={handleScriptLoad}
      />
    </>
  );
}
