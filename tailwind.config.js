/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-header': '#150b2bb3',
        'c-primary': '#0be58a',
        'c-secondary': '#878787',
        'c-data': '#282828b3',
        'c-seat': '#f7f8f8',
      },
    },
  },
  plugins: [require("daisyui")],
}

