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
        "first": "#DCCA87",
        "second": "#444415",
        "third": "#F5EFDB", 
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
  ],
}

