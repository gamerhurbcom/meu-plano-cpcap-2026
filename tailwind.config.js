/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050b18',
          900: '#0a1428',
          800: '#0f1d38',
          700: '#162a4d',
          600: '#1d3661',
        },
        gold: {
          400: '#d9b96a',
          500: '#c9a456',
          600: '#b08e3f',
        },
        neon: {
          400: '#5ecbff',
          500: '#36b5f5',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(94, 203, 255, 0.15)',
        goldglow: '0 0 24px rgba(201, 164, 86, 0.15)',
      },
    },
  },
  plugins: [],
};
