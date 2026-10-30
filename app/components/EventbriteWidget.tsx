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

export default function EventbriteWidget({ eventId }: { eventId: string }) {
  const initialized = useRef(false);
  const containerId = `eventbrite-widget-container-${eventId}`;

  const handleScriptLoad = () => {
    if (initialized.current) return;
    if (typeof window !== 'undefined' && window.EBWidgets) {
      initialized.current = true;
      window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId,
        iframeContainerId: containerId,
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
        id={containerId}
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
