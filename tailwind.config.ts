import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      'playfair-display': ['Playfair Display', 'serif'],
    },
    extend: {
      colors: {
        primary: '#df5905',
      },
      fontSize: {
        ssm: '0.75rem',
      },
      keyframes: {
        scroll: {
          '0%': { top: '-100%' },
          '100%': { top: '100%' },
        },
        glitch: {
          '0%': {
            '-webkit-transform': 'translate(0)',
            transform: 'translate(0)',
          },
          '20%': {
            '-webkit-transform': 'translate(-2px, 2px)',
            transform: 'translate(-2px, 2px), skewX(10deg)',
          },
          '40%': {
            '-webkit-transform': 'translate(-2px, -2px)',
            transform: 'translate(-2px, -2px)',
          },
          '60%': {
            '-webkit-transform': 'translate(2px, 2px)',
            transform: ' translate(2px, 2px)',
          },
          '80%': {
            '-webkit-transform': 'translate(2px, -2px)',
            transform: 'translate(2px, -2px)',
          },
          to: {
            '-webkit-transform': ' translate(0)',
            transform: 'translate(0)',
          },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        scroll: 'scroll 1s infinite',
        glitch: 'glitch 0.1s infinite',
        heartbeat: 'heartbeat 1s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
