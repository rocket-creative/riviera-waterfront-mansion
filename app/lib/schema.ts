import { absoluteUrl, venue } from './venueFacts';

export type Faq = {
  question: string;
  answer: string;
};

export type Crumb = {
  name: string;
  path: string;
};

export function venueEntity() {
  return {
    '@type': ['EventVenue', 'LocalBusiness'],
    '@id': venue.id,
    name: venue.name,
    url: venue.url,
    description: venue.description,
    logo: venue.logo,
    image: venue.image,
    email: venue.email,
    telephone: venue.telephone,
    priceRange: venue.priceRange,
    servesCuisine: venue.servesCuisine,
    maximumAttendeeCapacity: venue.guestMax,
    foundingDate: String(venue.foundingYear),
    address: {
      '@type': 'PostalAddress',
      streetAddress: venue.streetAddress,
      addressLocality: venue.addressLocality,
      addressRegion: venue.addressRegion,
      postalCode: venue.postalCode,
      addressCountry: venue.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: venue.latitude,
      longitude: venue.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: venue.consultationDays,
        opens: venue.consultationOpens,
        closes: venue.consultationCloses,
      },
    ],
    sameAs: venue.sameAs,
  };
}

export function websiteEntity() {
  return {
    '@type': 'WebSite',
    '@id': venue.websiteId,
    name: venue.name,
    url: venue.url,
    publisher: { '@id': venue.id },
  };
}

export function webPage({
  path,
  name,
  description,
  pageType = 'WebPage',
}: {
  path: string;
  name: string;
  description: string;
  pageType?: string;
}) {
  return {
    '@type': pageType,
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { '@id': venue.websiteId },
    about: { '@id': venue.id },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.ai-answer'],
    },
  };
}

export function breadcrumb(items: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPage(faqs: Faq[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function placeInVenue({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    '@type': 'Place',
    '@id': `${absoluteUrl(path)}#place`,
    name,
    description,
    url: absoluteUrl(path),
    containedInPlace: { '@id': venue.id },
  };
}

export function menuEntity(
  sections: { name: string; description: string }[],
) {
  return {
    '@type': 'Menu',
    '@id': `${absoluteUrl('/menu')}#menu`,
    name: 'Riviera Waterfront Mansion Wedding Menu',
    url: absoluteUrl('/menu'),
    hasMenuSection: sections.map((section) => ({
      '@type': 'MenuSection',
      name: section.name,
      description: section.description,
    })),
  };
}

export function pageGraph({
  path,
  name,
  description,
  pageType,
  crumbs,
  faqs,
  extra = [],
}: {
  path: string;
  name: string;
  description: string;
  pageType?: string;
  crumbs?: Crumb[];
  faqs?: Faq[];
  extra?: object[];
}) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      venueEntity(),
      websiteEntity(),
      webPage({ path, name, description, pageType }),
      ...(crumbs?.length ? [breadcrumb(crumbs)] : []),
      ...(faqs?.length ? [faqPage(faqs)] : []),
      ...extra,
    ],
  };
}
