/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'titan': ['Titan One', 'sans-serif'],
        'roboto': ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

