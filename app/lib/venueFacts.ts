export const SITE_URL = 'https://www.rivierawaterfrontmansion.com';

export const venue = {
  name: 'Riviera Waterfront Mansion',
  id: `${SITE_URL}/#venue`,
  websiteId: `${SITE_URL}/#website`,
  url: SITE_URL,
  description:
    'Premier waterfront wedding venue in Massapequa, NY. Historic mansion, stunning water views, grand ballroom, indoor and outdoor ceremonies. Family owned since 1946. 150 to 350 guests.',
  logo: `${SITE_URL}/rw-mansion-logo-circular.svg`,
  image: `${SITE_URL}/og-image.jpg`,
  email: 'appointments@rivierawaterfrontmansion.com',
  telephone: '+15165415020',
  telephoneDisplay: '(516) 541 5020',
  streetAddress: '200 E Shore Dr',
  addressLocality: 'Massapequa',
  addressRegion: 'NY',
  postalCode: '11758',
  addressCountry: 'US',
  latitude: 40.6644,
  longitude: -73.4711,
  priceRange: '$$$',
  servesCuisine: 'Continental',
  guestMin: 150,
  guestMax: 350,
  foundingYear: 1946,
  consultationDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  consultationOpens: '11:00',
  consultationCloses: '19:00',
  weddingDays: 'Thursday through Sunday',
  sameAs: [
    'https://www.instagram.com/rivierawaterfrontmansion/',
    'https://www.facebook.com/rivierawaterfrontmansion',
    'https://www.tiktok.com/@rivierawaterfrontmansion',
    'https://www.google.com/maps/place/Riviera+Waterfront+Mansion',
  ],
};

export function absoluteUrl(path: string) {
  if (path === '/') return SITE_URL;
  return `${SITE_URL}${path}`;
}
