/** @type {import('tailwindcss').Config} */
const konstaConfig = require("konsta/config");

module.exports = konstaConfig({
  content: ["./src/**/*.{html,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: ['selector', '[data-theme="dark"]'],
});
