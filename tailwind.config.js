/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "first": "#0b4534",
        "second": "#a8c200",
        "third": "#d7e0e4",
        "fourth":"#E5E6E6"
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
  ],
}

