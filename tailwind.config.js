/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      '3xl': '1740px',
    },
    extend: {
      fontFamily: {
        'titan': ['Titan One', 'sans-serif'],
        'roboto': ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

