/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Stellar dark-light desteklesin
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './node_modules/@stellar/design-system/**/*.{js,ts,jsx,tsx}', // bu önemli
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
