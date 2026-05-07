import type { Config } from 'tailwindcss';
import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'p5-red': '#e60012',
        'p5-black': '#111111',
        'p5-white': '#f5f5f5',
        'p5-yellow': '#ffe600',
      },
      fontFamily: {
        anton: ['var(--font-anton)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      prefix: 'heroui',
      addCommonColors: false,
      defaultTheme: 'light',
      defaultExtendTheme: 'light',
      layout: {},
      themes: {
        light: { layout: {}, colors: {} },
        dark: { layout: {}, colors: {} },
      },
    }),
  ],
} satisfies Config;
