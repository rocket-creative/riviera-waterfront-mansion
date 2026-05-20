import type { NextConfig } from 'next';
import path from 'path';

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.instagram.com https://www.eventbrite.com https://connect.facebook.net https://link.msgsndr.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https: blob:",
      "font-src 'self' data:",
      "connect-src 'self' https://www.instagram.com https://www.eventbrite.com https://eventbrite.com https://www.facebook.com https://connect.facebook.net https://api.leadconnectorhq.com https://link.msgsndr.com",
      "frame-src 'self' https://www.instagram.com https://www.eventbrite.com https://eventbrite.com https://api.leadconnectorhq.com https://link.msgsndr.com",
      "media-src 'self' data: blob:",
    ].join('; ')
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  },
];

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [393, 810, 1024, 1440, 1920, 3840],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/wedding-brochure',
        destination: '/wedding-pricing',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
