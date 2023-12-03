/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor:{'yellow-900':'#FFD700'},
      backgroundImage: {
        'forest-banner': "url/('public/forest-banner.jpg')",
      }
    },
  },
  plugins: [],
});