import { absoluteUrl, venue } from './venueFacts';
import type { Faq } from './schema';

export type AiPage = {
  path: string;
  title: string;
  summary: string;
  answer: string;
  faqs?: Faq[];
};

export const homeFaqs: Faq[] = [
  {
    question: 'How many guests can Riviera Waterfront Mansion accommodate?',
    answer: 'Our Long Island waterfront venue can accommodate 150 to 350 guests for your wedding celebration. We require a minimum of 150 guests and offer flexible seating arrangements in our grand ballroom to suit your specific needs.',
  },
  {
    question: 'Do you host multiple weddings on the same day?',
    answer: 'Riviera Waterfront Mansion hosts only one wedding at a time, ensuring your day is completely exclusive. You and your guests have full private access to our entire Massapequa waterfront facility, grounds, and all amenities.',
  },
  {
    question: 'What is included in your Long Island wedding packages?',
    answer: 'Our wedding packages include a five hour top shelf open bar, chef inspired Continental cuisine with cocktail hour and plated dinner, full venue access, bridal suite, professional staff, tables and linens, backup generator, climate control, and more. Contact us for complete package details and pricing.',
  },
  {
    question: 'Do you offer both indoor and outdoor ceremony options?',
    answer: 'Yes! We offer a stunning outdoor waterfront ceremony area with breathtaking water views, as well as a beautiful indoor ceremony space for any weather conditions. Both options are included with your wedding package.',
  },
  {
    question: 'How far in advance should we book our wedding date?',
    answer: 'We recommend booking 12 to 18 months in advance to secure your preferred date, especially for peak wedding season from May through October. However, we sometimes have availability for shorter notice weddings. Contact us to check current date availability for 2026 and 2027.',
  },
  {
    question: 'Can we bring our own vendors?',
    answer: 'Yes, you can bring your own photographer, DJ, florist, and other vendors. We just ask that every outside vendor carries their own insurance. We are also happy to share our list of trusted vendors who know our venue well.',
  },
  {
    question: 'Do you offer wedding tastings?',
    answer: 'Yes! Our food tastings are exclusively for our booked couples. This special event gives you the opportunity not only to sample our menu selections, but also to enjoy time on the dance floor before your big day. Invitations are sent via email to our RWMansion couples.',
  },
  {
    question: 'Is there parking available at the venue?',
    answer: 'Riviera Waterfront Mansion offers professional valet parking service for all guests. Our dedicated valet team takes care of every vehicle so your guests can focus entirely on celebrating.',
  },
];

export const contactFaqs: Faq[] = [
  {
    question: 'What are your consultation hours?',
    answer: 'We are open for private tours and consultations Tuesday through Sunday, 11:00 AM to 7:00 PM. Call 516 541 5020 to schedule your visit.',
  },
  {
    question: 'How do I schedule a tour of the venue?',
    answer: 'You can schedule a tour by calling us at 516 541 5020 or emailing appointments@rivierawaterfrontmansion.com. We will respond within 24 hours to confirm your appointment.',
  },
  {
    question: 'Do I need an appointment to visit?',
    answer: 'Yes, we require appointments for all tours and consultations. Since we host only one wedding at a time, we want to ensure our full attention is on you during your visit. This allows us to provide a personalized, unhurried experience.',
  },
  {
    question: 'How long does a venue tour take?',
    answer: 'Plan for approximately 60 to 90 minutes for your tour and consultation. This gives you time to explore all our indoor and outdoor spaces, discuss your wedding vision, review menu options, and ask questions about our Long Island waterfront venue.',
  },
  {
    question: 'Can we tour the venue during an event?',
    answer: 'While we occasionally accommodate tours during setup, we prefer to schedule visits when no events are taking place. This ensures you can fully experience the space and have our complete attention without distractions.',
  },
  {
    question: 'Where is Riviera Waterfront Mansion located?',
    answer: 'We are located at 200 E Shore Dr, Massapequa, NY 11758. Our Long Island waterfront venue is conveniently accessible from anywhere in the tri state area with ample complimentary parking on site.',
  },
  {
    question: 'What should I bring to my tour?',
    answer: 'Bring your guest count estimate, preferred wedding date or season, and any specific questions or must haves for your celebration. If you are ready to book, we will provide all necessary paperwork during your visit.',
  },
  {
    question: 'Can I get wedding information before visiting?',
    answer: 'Yes! You can download our comprehensive wedding brochure with package details, menu options, and venue information at rivierawaterfrontmansion.com/wedding-pricing, or reach us directly at appointments@rivierawaterfrontmansion.com.',
  },
];

export const tourFaqs: Faq[] = [
  {
    question: 'Can I see all areas of the venue during a tour?',
    answer: 'Yes! During your in person tour, you will see the grand entrance lobby, bridal suite, indoor and outdoor ceremony spaces, cocktail areas, grand ballroom with dance floor, bars, balconies, and all waterfront photography locations. We show you every space available for your Long Island wedding.',
  },
  {
    question: 'How does the virtual tour compare to an in person visit?',
    answer: 'Our virtual tour offers a comprehensive view of all our spaces, but nothing compares to experiencing our Massapequa waterfront venue in person. We encourage you to schedule a private tour to see the stunning water views, feel the ambiance, and envision your perfect wedding day.',
  },
  {
    question: 'What indoor spaces are available?',
    answer: 'Indoor spaces include a grand entrance lobby, luxury bridal suite with two balconies, elegant indoor ceremony space, indoor cocktail reception area, and our magnificent grand ballroom with waterfront views. All spaces are climate controlled year round.',
  },
  {
    question: 'What outdoor spaces can we use?',
    answer: 'Outdoor spaces include a stunning waterfront ceremony area overlooking the water, outdoor cocktail reception space, waterfront balconies for photos, and full access to our beautiful landscaped grounds. Perfect for Long Island outdoor weddings and photography.',
  },
  {
    question: 'Can we take photos everywhere on the property?',
    answer: 'Absolutely! You and your photographer have complete access to all indoor and outdoor areas including waterfront locations, gardens, balconies, the grand staircase, and all architectural details. Our venue provides countless stunning Long Island wedding photo opportunities.',
  },
  {
    question: 'Is the entire venue ours for the day?',
    answer: 'Yes! We host only one wedding at a time, so the entire Riviera Waterfront Mansion is exclusively yours. All spaces, grounds, and amenities are available for your private use throughout your celebration.',
  },
  {
    question: 'Are ceremony and reception in the same location?',
    answer: 'Yes, both ceremony and reception take place at our Massapequa waterfront venue. Guests can enjoy cocktail hour while we flip the ceremony space, or you can use our separate outdoor ceremony area and indoor reception spaces.',
  },
  {
    question: 'What makes your venue unique?',
    answer: 'Our historic waterfront mansion has been family owned for over 75 years, offering one wedding at a time for complete exclusivity, stunning water views from multiple spaces, both indoor and outdoor options, and three generations of wedding expertise. We set the standard for Long Island wedding venues.',
  },
];

export const ratesFaqs: Faq[] = [
  {
    question: 'Do you host more than one event at a time?',
    answer: 'No. Riviera Waterfront Mansion hosts one wedding at a time. Once your date is reserved, the entire venue is exclusively yours for the duration of your event.',
  },
  {
    question: 'What days of the week do you host weddings?',
    answer: 'We host weddings Thursday through Sunday.',
  },
  {
    question: 'What is the guest minimum?',
    answer: 'Our minimum is 150 guests. Our grand ballroom accommodates up to 350 guests.',
  },
  {
    question: 'What does pricing include?',
    answer: 'All packages include cocktail hour, plated reception dinner, five hour top shelf open bar, and full use of the venue and grounds. All pricing is plus a 22% admin fee and NYS tax.',
  },
  {
    question: 'How do I get pricing?',
    answer: 'Contact our team to schedule a private tour and receive a personalized proposal for your date.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Contact us directly for details on our policies and payment schedule.',
  },
];

export const vendorsFaqs: Faq[] = [
  {
    question: 'Do we have to use your preferred vendors?',
    answer: 'No, you are welcome to bring your own wedding vendors. However, our preferred vendors know our Massapequa venue intimately and have consistently delivered exceptional service. They understand the unique features of our waterfront location and work seamlessly with our team.',
  },
  {
    question: 'Are your preferred vendors more expensive?',
    answer: 'No. Our preferred vendors offer competitive rates for the Long Island market. Being on our list does not inflate their pricing. They earned their spot through quality work, reliability, and professionalism, not by paying fees.',
  },
  {
    question: 'Can you recommend vendors based on our budget?',
    answer: 'Absolutely! Our banquet team can provide personalized recommendations based on your budget, wedding style, and specific needs. We have worked with all our preferred vendors for years and can match you with professionals who fit your vision and budget.',
  },
  {
    question: 'Do you provide any vendors in house?',
    answer: 'Yes! Catering, bartending, serving staff, and venue coordination are all provided by our expert in house team. You will need to arrange your own photographer, DJ or band, florist, cake, and other specialty vendors.',
  },
  {
    question: 'How do I contact the vendors on your list?',
    answer: 'Contact information including websites, phone numbers, and emails are listed for each vendor. You can reach out directly to discuss your wedding needs, request quotes, and check their availability for your Long Island wedding date.',
  },
  {
    question: 'Can vendors visit the venue before our wedding?',
    answer: 'Yes, your vendors are welcome to visit Riviera Waterfront Mansion before your wedding for site visits, consultations, and planning. Many of our preferred vendors already know the space well from previous events.',
  },
  {
    question: 'Are there any vendor restrictions at your venue?',
    answer: 'We require all vendors to have proper insurance and licensing. Fireworks vendors must follow local regulations. Otherwise, professional vendors who respect our venue and deliver quality service are welcome.',
  },
];

export const homePage: AiPage = {
  path: '/',
  title: 'Home',
  summary: 'Waterfront wedding venue in Massapequa, NY. One wedding at a time for 150 to 350 guests.',
  answer: 'Riviera Waterfront Mansion is a waterfront wedding venue at 200 E Shore Dr in Massapequa, NY, family owned since 1946. The mansion hosts one wedding at a time for 150 to 350 guests, with indoor and outdoor ceremony spaces and a grand ballroom on the water. Professional valet parking is available for guests.',
  faqs: homeFaqs,
};

export const contactPage: AiPage = {
  path: '/contact',
  title: 'Schedule a Tour',
  summary: 'Book a private tour Tuesday through Sunday, 11:00 AM to 7:00 PM, at 200 E Shore Dr, Massapequa, NY.',
  answer: `Schedule a private tour by calling ${venue.telephoneDisplay} or emailing ${venue.email}. Tours are by appointment Tuesday through Sunday, 11:00 AM to 7:00 PM, at 200 E Shore Dr, Massapequa, NY 11758.`,
  faqs: contactFaqs,
};

export const tourPage: AiPage = {
  path: '/tour',
  title: 'Virtual Tour',
  summary: 'Virtual tour of the bridal suite, ceremony spaces, cocktail areas, grand ballroom, and waterfront.',
  answer: 'This virtual tour covers the bridal suite, indoor and outdoor ceremony spaces, cocktail areas, grand ballroom, and waterfront views at Riviera Waterfront Mansion in Massapequa, NY.',
  faqs: tourFaqs,
};

export const tourRooms = {
  'entrance-lobby': {
    title: 'Entrance Lobby',
    description: 'Our grand entrance lobby is where your guests arrive and get their first look at the mansion. Warm wood, soft lighting, and plenty of room to greet everyone as they come in.',
  },
  'bridal-suite': {
    title: 'Bridal Suite',
    description: 'A private suite where you and your wedding party get ready. It takes up the entire top floor and opens onto two balconies, one overlooking the ballroom and one outside. Comes with its own restroom and great natural light.',
  },
  'indoor-ceremony': {
    title: 'Indoor Ceremony Space',
    description: 'A beautiful indoor spot to say your vows, ready for any season or weather. Plenty of natural light and comfortable seating for your guests.',
  },
  'outdoor-ceremony': {
    title: 'Outdoor Waterfront Ceremony',
    description: 'Say your vows right on the water. Our outdoor ceremony area looks out over the bay and is especially stunning at sunset.',
  },
  'indoor-cocktail': {
    title: 'Indoor Cocktail Hour',
    description: 'An indoor cocktail space with water views, full bar service, and room for guests to relax and mingle before the reception.',
  },
  'outdoor-cocktail': {
    title: 'Outdoor Cocktail Hour',
    description: 'A waterfront patio for cocktail hour, with fresh air, open water views, and full bar service. A relaxed spot for guests to gather before dinner.',
  },
  'main-ballroom': {
    title: 'Grand Waterfront Ballroom',
    description: 'Our main ballroom is the heart of the reception. High ceilings, chandeliers, and big windows looking out over the water, with a large dance floor and room for up to 350 guests.',
  },
  'sweetheart-table': {
    title: 'Bride & Groom Table',
    description: 'Your table sits front and center in the ballroom, with a clear view of your guests and the dance floor all night long.',
  },
  'guest-seating': {
    title: 'Wedding Guest Reception Seating',
    description: 'Comfortable, beautifully set tables with room for up to 350 guests, arranged so everyone has a good view of the celebration.',
  },
  'dancefloor': {
    title: 'Spacious Dancefloor',
    description: 'A large dance floor right in the middle of the ballroom, with plenty of space for you and your guests to dance all night.',
  },
  'entertainment': {
    title: 'DJ & Live Band Setup Area',
    description: 'A dedicated space for your DJ or live band, with great sound and room for a full setup. Bring whoever you like to keep the party going.',
  },
  'main-bar': {
    title: 'Top Shelf Bar',
    description: 'A full service bar pouring premium liquor, wine, and cocktails, staffed by our bartenders throughout your five hour open bar.',
  },
  'balconies': {
    title: 'Double Balconies',
    description: 'We have two balconies: one inside that overlooks the ballroom, and one outside with double waterfront views. Both make for great photos and quiet moments away from the crowd.',
  },
  'photo-locations': {
    title: 'Wedding Photo Locations',
    description: 'Beautiful photo spots all over the grounds, from the water and gardens to the architecture inside. Your photographer will have plenty to work with.',
  },
} as const;

export type TourSlug = keyof typeof tourRooms;

export const ratesPage: AiPage = {
  path: '/rates',
  title: 'Wedding Rates and Availability',
  summary: 'Thursday through Sunday weddings, 150 guest minimum, packages include cocktail hour, plated dinner, and a five hour top shelf bar.',
  answer: 'Weddings are hosted Thursday through Sunday for a minimum of 150 guests, with the grand ballroom seating up to 350. Packages include cocktail hour, a plated dinner, and a five hour top shelf open bar. A personalized proposal is prepared after you schedule a tour. All pricing is plus a 22% admin fee and NYS tax.',
  faqs: ratesFaqs,
};

export const menuSections = [
  {
    name: 'Five Hour Top Shelf Open Bar',
    description: 'Premium top shelf liquors, fine wines, a champagne toast, soft drinks, and two custom signature cocktails. Included with every Riviera wedding.',
  },
  {
    name: 'Lavish Cocktail Hour',
    description: 'Gourmet cold displays, passed hors d\'oeuvres, salads, and a butcher block carving station.',
  },
  {
    name: 'Hot Gourmet Dishes',
    description: 'Select eight hot dishes for the cocktail hour, including poultry, beef, seafood, and pasta.',
  },
  {
    name: 'Grand Ballroom Wedding Reception',
    description: 'Plated reception dinner with a champagne toast, duet plates, entrees, and tableside coffee and tea.',
  },
  {
    name: 'Wedding Enhancements, Add-Ons and Exit Stations',
    description: 'Optional additions. Call (516) 541 5020 for current pricing and seasonal availability.',
  },
];

export const menuPage: AiPage = {
  path: '/menu',
  title: 'Wedding Menu and Catering',
  summary: 'Chef inspired Continental catering with a five hour top shelf open bar, cocktail hour, and plated dinner.',
  answer: 'Riviera Waterfront Mansion serves chef inspired Continental wedding catering in Massapequa, NY. Every wedding includes a five hour top shelf open bar, a lavish cocktail hour, and a plated dinner.',
};

export const vendorsPage: AiPage = {
  path: '/vendors',
  title: 'Preferred Wedding Vendors',
  summary: 'Preferred vendors are optional. Outside vendors must carry their own insurance.',
  answer: 'The preferred vendor list at Riviera Waterfront Mansion is optional. You may bring your own photographer, DJ, florist, and other vendors, and every outside vendor needs their own insurance. Catering, bartending, serving staff, and venue coordination are provided in house.',
  faqs: vendorsFaqs,
};

export const weddingPricingPage: AiPage = {
  path: '/wedding-pricing',
  title: 'Wedding Brochure',
  summary: 'Download the wedding brochure for packages, amenities, menu options, and 2026 and 2027 availability.',
  answer: 'Download the Riviera Waterfront Mansion wedding brochure for packages, amenities, menu options, and availability for 2026 and 2027. Fill out the form on this page to receive it.',
};

export const privacyPage: AiPage = {
  path: '/privacy',
  title: 'Privacy Policy',
  summary: 'How Riviera Waterfront Mansion collects, uses, and protects personal information.',
  answer: 'This privacy policy explains how Riviera Waterfront Mansion collects, uses, and protects personal information submitted through rivierawaterfrontmansion.com.',
};

export function tourRoomPages(): AiPage[] {
  return (Object.keys(tourRooms) as TourSlug[]).map((slug) => {
    const room = tourRooms[slug];
    return {
      path: `/tour/${slug}`,
      title: room.title,
      summary: room.description,
      answer: room.description,
    };
  });
}

export function allPublicPages(): AiPage[] {
  return [
    homePage,
    contactPage,
    tourPage,
    ...tourRoomPages(),
    ratesPage,
    menuPage,
    vendorsPage,
    weddingPricingPage,
    privacyPage,
  ];
}

export function renderLlmsTxt() {
  const lines = [
    `# ${venue.name}`,
    '',
    `> ${venue.description}`,
    '',
    `Address: ${venue.streetAddress}, ${venue.addressLocality}, ${venue.addressRegion} ${venue.postalCode}`,
    `Phone: ${venue.telephoneDisplay}`,
    `Email: ${venue.email}`,
    'Tours: Tuesday through Sunday, 11:00 AM to 7:00 PM, by appointment',
    `Weddings: ${venue.weddingDays}, one wedding at a time, ${venue.guestMin} to ${venue.guestMax} guests`,
    '',
    '## Pages',
    '',
    ...allPublicPages().map(
      (page) => `- [${page.title}](${absoluteUrl(page.path)}): ${page.summary}`,
    ),
    '',
  ];

  return lines.join('\n');
}

export function renderLlmsFullTxt() {
  const sections = allPublicPages().map((page) => {
    const lines = [
      `# ${page.title}`,
      absoluteUrl(page.path),
      '',
      page.answer,
    ];

    if (page.path === '/menu') {
      lines.push('', 'Menu sections:');
      for (const section of menuSections) {
        lines.push(`- ${section.name}: ${section.description}`);
      }
    }

    if (page.faqs?.length) {
      lines.push('', 'Questions:');
      for (const faq of page.faqs) {
        lines.push(`Q: ${faq.question}`);
        lines.push(`A: ${faq.answer}`);
        lines.push('');
      }
    }

    return lines.join('\n').trimEnd();
  });

  return [`# ${venue.name}`, '', ...sections].join('\n\n') + '\n';
}
