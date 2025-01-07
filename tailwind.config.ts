import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/navbar.js',
  ],
  theme: {
    extend: {
      zIndex: {
        modal: '999',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'button-gradient': 'linear-gradient(320deg, #70B442 60%, #CEEAAC 144%)',
        'gradient-border': 'linear-gradient(225deg, #e0e0e0, #505050 47%, #828282 100%)',
        'gradient-button':
          'linear-gradient(225deg, rgba(255,255,255, 1), rgba(192,192,192,1) 45%, rgba(254,254,254,1) 100%)',
        'gradient-225': 'linear-gradient(225deg, var(--tw-gradient-stops))',
        'gradient-divider':
          'linear-gradient(180deg, rgba(255,255,255, 0.3) 0%, rgba(255,255,255) 50%, rgba(255,255,255,0.3) 100%)',
        'gradient-line':
          'linear-gradient(to right, rgba(213, 255, 165, 0.2) 20%, rgba(233, 255, 208, 1) 52%, rgba(213, 255, 165, 0.2) 100%)',
        'gradient-success':
          'linear-gradient(rgba(180, 180, 180, 0.1), rgba(180, 180, 180, 0.1) 25%, rgba(255, 255, 255, 0.1) 50%, rgba(175, 175, 175, 0.1) 100%)',
        'gradient-dropdown':
          'linear-gradient(225deg, rgba(255,255,255,0.4) 0%, rgba(192, 192, 192, 0.4) 45%, rgba(254, 254, 254, 0.4) 100%)',
      },
      animation: {
        'slide-to-l': 'slide-to-l 0.4s ease 3s forwards',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        'slide-to-l': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.hover-nav': {
          // 'text-shadow': '0 0 6px #666',font-weight': '700,},'.home-text-shadow': {
          'text-shadow': '4px 4px 20px rgba(28,28,28,0.30)',
        },
        '.home-text-shadow-mobile': {
          'text-shadow': '1.6px 1.6px 8px rgba(28,28,28,0.30)',
        },
        '.button-text-shadow': {
          'text-shadow': '2.8px 2.8px 7px rgba(18,126,0,0.25)',
        },
      });
    }),
    nextui(),
  ],
};
export default config;
