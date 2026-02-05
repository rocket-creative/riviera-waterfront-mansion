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
          'neutral-light': '#F5F3EF',  // Very light warm beige - LIGHT NEUTRAL
          neutral: '#E8E3DA',          // Beige/cream - NEUTRAL role
          gold: '#C19A5B',             // Gold/bronze - ACCENT role
          text: '#3A3A3A',             // Dark charcoal - TEXT role
          brown: '#A07856',            // Brown - HERO secondary (deprecated)
        },
      },
      backgroundImage: {
        // Natural sunlight gradients - mimics sun hitting a dark brown surface
        'sunlight-vertical': 'linear-gradient(to bottom, #2a1f1a 0%, #4a3426 35%, #6b4d38 60%, #947554 80%, #c19a5b 100%)',
        'sunlight-diagonal': 'linear-gradient(135deg, #2a1f1a 0%, #4a3426 30%, #6b4d38 55%, #947554 75%, #c19a5b 100%)',
        'sunlight-radial': 'radial-gradient(circle at top right, #c19a5b 0%, #947554 25%, #6b4d38 50%, #4a3426 75%, #2a1f1a 100%)',
        'sunlight-spotlight': 'radial-gradient(ellipse at center, #c19a5b 0%, #947554 20%, #6b4d38 40%, #4a3426 65%, #2a1f1a 90%)',
        'sunlight-horizon': 'linear-gradient(to top, #2a1f1a 0%, #3d2c1f 40%, #6b4d38 70%, #947554 85%, #d4a968 100%)',
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
