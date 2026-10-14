import { MetadataRoute } from 'next';

const publicAccess = {
  allow: '/',
  disallow: ['/api/', '/admin/'],
};

const agents = [
  '*',
  'Googlebot',
  'Bingbot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Claude-SearchBot',
  'Applebot',
  'GPTBot',
  'Google-Extended',
  'ClaudeBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: agents.map((userAgent) => ({
      userAgent,
      ...publicAccess,
    })),
    sitemap: 'https://www.rivierawaterfrontmansion.com/sitemap.xml',
  };
}
