import { MetadataRoute } from 'next';

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
      url: `${baseUrl}/tour`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
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
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  const tourPages = tourSections.map((slug) => ({
    url: `${baseUrl}/tour/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...tourPages];
}
