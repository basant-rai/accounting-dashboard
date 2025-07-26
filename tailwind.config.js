/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#244D61"
          // "#5689C0"
          // "#75E2FF"
          // "#EAEBED"
        },
        secondary: {
          500: "#EAEBED"

        }
      }
    },
  },
  plugins: [],
}

