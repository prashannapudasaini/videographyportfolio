/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'primary-bg': '#FAF8F5',
          'section-alt': '#F3EFE8',
          'highlight': '#EFE8DD',
          'card': '#FFFFFF',
          'primary-text': '#111111',
          'secondary-text': '#555555',
          'accent': '#B48A5A',
          'secondary-accent': '#D6C1A3',
          'border': '#E8E1D8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      }
    },
  },
  plugins: [],
};

