/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#06080A',
          900: '#0A0D12',
          850: '#10141C',
          800: '#161B26',
          700: '#222938',
        },
        forest: {
          50: '#EBF9F1',
          100: '#D5F3E3',
          200: '#B3E7CA',
          300: '#81D4A3',
          400: '#58BC82',
          500: '#3E9B65',
          600: '#2B754B',
          700: '#1E5636',
          800: '#133D25',
          850: '#0D2B1A',
          900: '#081C10',
          950: '#030D07',
        },
        amberGold: {
          DEFAULT: '#C89B3C',
          light: '#E2B85E',
          dark: '#A67D28',
          subtle: '#8C6920',
        },
        earth: {
          terracotta: '#B85836',
          sand: '#C2B69D',
          stone: '#3A3F47',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
