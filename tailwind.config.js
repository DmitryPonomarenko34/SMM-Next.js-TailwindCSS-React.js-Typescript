/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: 'var(--font-inter)',
      unbounded: 'var(--font-unbounded)',
    },
  },
  darkMode: 'class',
  plugins: [],
}
