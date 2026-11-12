/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F3ED',
        'deep-brown': '#30251F',
        'deep-brown-soft': '#3E332B',
        beige: {
          DEFAULT: '#D8C6B3',
          light: '#E8DCCB',
          dark: '#C2AC95',
        },
        copper: {
          DEFAULT: '#B47C5B',
          light: '#C9976F',
          dark: '#9A6647',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'extra-wide': '0.3em',
      },
      animation: {
        'fade-up': 'fadeUp 1s ease forwards',
        'fade-in': 'fadeIn 1.4s ease forwards',
        'slow-zoom': 'slowZoom 12s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
