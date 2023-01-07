/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}', './src/**/*.{html,js}'],
  theme: {
    fontSize: {
      app: '15px',
    },
    extend: {
      colors: {
        primary: 'hsl(180, 29%, 50%)',
        'grayish-cyan-400': 'hsl(180, 52%, 96%)',
        'grayish-cyan-300': 'hsl(180, 31%, 95%)',
        'grayish-cyan-600': 'hsl(180, 8%, 52%)',
        'grayish-cyan-600': 'hsl(180, 14%, 20%)',
      },
      backgroundImage: {
        'hero-pattern-desktop': 'url("/src/assets/bg-header-desktop.svg")',
        'hero-pattern-mobile': 'url("/src/assets/bg-header-mobile.svg")',
      },
    },
    fontFamily: {
      spartan: ['League Spartan', 'sans-serif'],
    },
  },
  plugins: [],
};