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
        // "first": "#162238",
        // "second": "#131F32",
        // "third": "#d7e0e4",
        // "fourth":"#E5E6E6"

         "first": "#358585",
        "second": "#131F32",
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

