/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        gray: {
          200: '#f3f6f7',
          400: '#e9eced',
          500: '#9ea8ac',
          800: '#7b7e7e',
        },
        indigo: {
          400: '#608289',
          800: '#203B43',
        },
        green: '#28cc56',
      },
    },
  },
  plugins: [],
};
