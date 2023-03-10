/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontSize: {
      md: '15px',
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
    extend: {
      colors: {
        primary: 'hsl(5, 85%, 63%)',
        accent: 'hsl(35, 77%, 62%)',
        'app-white': 'hsl(36, 100%, 99%)',
        'grayish-blue-400': 'hsl(233, 8%, 79%)',
        'grayish-blue-600': 'hsl(236, 13%, 42%)',
        'grayish-blue-800': 'hsl(240, 100%, 5%)',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
