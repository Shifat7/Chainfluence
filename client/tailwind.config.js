/** @type {import('tailwindcss').Config} */
module.exports = {
   purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/**/*.html',
    './src/**/**/*.js',
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html',
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

