import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Riviera color palette from provided image
        'riviera': {
          neutral: '#E8E3DA',     // Beige/cream - NEUTRAL role
          gold: '#C19A5B',        // Gold/bronze - ACCENT role
          text: '#3A3A3A',        // Dark charcoal - TEXT role
          brown: '#A07856',       // Brown - HERO secondary (deprecated, use dark-brown)
          'dark-brown': '#2a1f1a', // Very dark brown - New HERO/background color
        },
      },
      screens: {
        'sm': '393px',   // iPhone 14 Pro
        'md': '810px',   // iPad 10.2"
        'lg': '1024px',  // iPad Pro
        'xl': '1440px',  // 13" laptop
        '2xl': '1920px', // 15" laptop
        '3xl': '3840px', // 4K
      },
      fontFamily: {
        sans: ['var(--font-lato)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
        cormorant: ['var(--font-cormorant)', 'serif'],
      },
      letterSpacing: {
        widest: '.25em',
      },
    },
  },
  plugins: [],
};

export default config;
