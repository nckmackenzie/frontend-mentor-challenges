/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
        primary: 'hsl(180, 66%, 49%)',
        accent: 'hsl(257, 27%, 26%)',
        'secondary-100': 'hsl(0, 0%, 75%)',
        'secondary-300': 'hsl(257, 7%, 63%)',
        'secondary-500': 'hsl(255, 11%, 22%)',
        'secondary-700': 'hsl(260, 8%, 14%)',
        error: 'hsl(0, 87%, 67%)',
      },
      backgroundImage: {
        'hero-lg': "url('./src/assets/bg-shorten-desktop.svg')",
        'hero-sm': "url('./src/assets/bg-shorten-mobile.svg')",
      },
    },
    fontFamily: {
      bodytext: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
