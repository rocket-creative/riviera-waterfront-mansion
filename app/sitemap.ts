import { MetadataRoute } from 'next';
import { ANNOUNCEMENT_CONFIG } from './lib/announcement';
import { isEventLive } from './lib/eventWindow';
import { NYE_EVENT } from './lib/nyeEvent';

// Rebuilt hourly so finished events leave the sitemap without a deploy.
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rivierawaterfrontmansion.com';
  
  const tourSections = [
    'entrance-lobby',
    'bridal-suite',
    'indoor-ceremony',
    'outdoor-ceremony',
    'indoor-cocktail',
    'outdoor-cocktail',
    'main-ballroom',
    'sweetheart-table',
    'guest-seating',
    'dancefloor',
    'entertainment',
    'main-bar',
    'balconies',
    'photo-locations',
  ];

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tour`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rates`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vendors`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/wedding-pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    ...(isEventLive(ANNOUNCEMENT_CONFIG.enabled, ANNOUNCEMENT_CONFIG.endsAt)
      ? [{
          url: `${baseUrl}/fall-bridal-showcase`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.8,
        }]
      : []),
    ...(isEventLive(NYE_EVENT.enabled, NYE_EVENT.endDate)
      ? [{
          url: `${baseUrl}${NYE_EVENT.path}`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.8,
        }]
      : []),
  ];

  const tourPages = tourSections.map((slug) => ({
    url: `${baseUrl}/tour/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...tourPages];
}
