/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF8',
          100: '#FAFAF5',
          200: '#F5F0E6',
        },
        forest: {
          500: '#22803A',
          600: '#166534',
          700: '#14532d',
          800: '#0f3d21',
          900: '#0a2914',
        },
      },
      fontFamily: {
        heading: ['"Outfit"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
