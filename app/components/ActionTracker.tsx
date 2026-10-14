'use client';

import { useEffect } from 'react';
import {
  actionFromHref,
  captureVisit,
  isSubmitConfirmation,
  leadFormOrigin,
  readSubmittedContact,
  trackAction,
  type FormPerson,
} from '../lib/track-action';

function isEventbriteFrame(frame: HTMLIFrameElement): boolean {
  if (frame.closest('[id*="eventbrite" i]')) return true;
  const src = frame.getAttribute('src') ?? '';
  return /eventbrite\.com/i.test(src) || /eventbrite/i.test(frame.id);
}

export default function ActionTracker() {
  useEffect(() => {
    captureVisit();

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href) return;
      const match = actionFromHref(href);
      if (match) trackAction(match.action, match.detail);
    };

    let pendingContact: FormPerson | null = null;
    let pendingTimer = 0;
    const onMessage = (event: MessageEvent) => {
      if (!leadFormOrigin(event.origin)) return;
      const contact = readSubmittedContact(event.data);
      if (contact) {
        pendingContact = contact;
        window.clearTimeout(pendingTimer);
        pendingTimer = window.setTimeout(() => {
          pendingContact = null;
        }, 1500);
        return;
      }
      if (isSubmitConfirmation(event.data) && pendingContact) {
        trackAction('form', 'submit', pendingContact);
        pendingContact = null;
        window.clearTimeout(pendingTimer);
      }
    };

    let overEventbrite = false;
    const onPointerOver = (event: PointerEvent) => {
      const target = event.target;
      overEventbrite = target instanceof HTMLIFrameElement && isEventbriteFrame(target);
    };
    const onPointerOut = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof HTMLIFrameElement && isEventbriteFrame(target)) {
        overEventbrite = false;
      }
    };
    const onBlur = () => {
      if (!overEventbrite) return;
      trackAction('eventbrite', 'click');
    };

    document.addEventListener('click', onClick, true);
    window.addEventListener('message', onMessage);
    document.addEventListener('pointerover', onPointerOver, true);
    document.addEventListener('pointerout', onPointerOut, true);
    window.addEventListener('blur', onBlur);

    return () => {
      window.clearTimeout(pendingTimer);
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('message', onMessage);
      document.removeEventListener('pointerover', onPointerOver, true);
      document.removeEventListener('pointerout', onPointerOut, true);
      window.removeEventListener('blur', onBlur);
    };
  }, []);

  return null;
}
