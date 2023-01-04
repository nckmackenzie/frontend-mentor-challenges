/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'lime-green': 'hsl(163, 72%, 41%)',
        'bright-red': 'hsl(356, 69%, 56%)',
        facebook: 'hsl(208, 92%, 53%)',
        twitter: 'hsl(203, 89%, 53%)',
        youtube: 'hsl(348, 97%, 39%)',
        'light-toggle': 'hsl(230, 22%, 74%)',
        'dark-bg': 'hsl(230, 17%, 14%)',
        'dark-top-pattern': 'hsl(232, 19%, 15%)',
        'dark-card': 'hsl(228, 28%, 20%)',
        'dark-text': 'hsl(228, 34%, 66%)',
        'light-top-pattern': 'hsl(225, 100%, 98%)',
        'light-card': 'hsl(227, 47%, 96%)',
        'light-text': 'hsl(228, 12%, 44%)',
        // instagram: 'linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)',
      },
      backgroundImage: {
        'dark-toggle':
          'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
      },
      fontFamily: {
        inter: ['Inter', 'Sans-serif'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};
