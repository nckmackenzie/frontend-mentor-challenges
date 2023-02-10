/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(10, 79%, 65%)',
        'primary-300': 'hsl(10, 79%, 75%)',
        accent: 'hsl(186, 34%, 60%)',
        'accent-300': 'hsl(186, 34%, 70%)',
        'dark-brown': 'hsl(25, 47%, 15%)',
        'medium-brown': 'hsl(28, 10%, 53%)',
        cream: 'hsl(27, 66%, 92%)',
        'pale-orange': 'hsl(33, 100%, 98%)',
      },
    },
    fontFamily: {
      main: ['DM Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
