/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#2546F0',
          50: '#f4f6fe',
          100: '#e9edfe',
          200: '#c9d1fb',
          300: '#a8b5f9',
          400: '#667ef5',
          500: '#2546f0',
          600: '#213fd8',
          700: '#1c35b4',
          800: '#162a90',
          900: '#122276',
        },
      },
    },
  },
  plugins: [],
}
