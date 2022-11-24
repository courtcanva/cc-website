/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
   
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white85: 'rgba(255, 255, 255, 0.85);',
        backgroundColor:'#4A4A4A'
      },
      fontSize: {
        h2: [
          '32px',
          {
            lineHeight: '48px',
            letterSpacing: '0.02em',
            fontWeight: '400',
          },
        ],
        h1: [
          '48px',
          {
            fontWeight:'600',
            lineHeight: '48px',
            letterSpacing:'0.03em',
  
          },
        ],
        p: [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '0.01em',
            fontWeight: '400',
          },
        ],
      },
      backgroundImage: {
        template: 'linear-gradient(33.75deg, #00B7BB 0%, #148EFF 100%)',
        cardBorderBlue:'linear-gradient(33.75deg, #2AF598 0%, #009EFD 100%)',
        btn:'linear-gradient(33.75deg, #F092FF 0%, #EE213C 100%)',
        btnHover:'linear-gradient(33.75deg, #E961FF 0%, #EE0020 100%)',
        cardBorder:'linear-gradient(33.75deg, #ECC611 0%, #F83600 100%)'
      },
      height: {
        "cardBody":"300px"
      },
      keyframes: {
        enter:{
          '0%': {left:'100%'},
          '25%': {left:'75%'},
          '50%': {left:'50%'},
          '75%': {left:'25%'},
          '100%': {left:'0'},
        }
      },
      animation: {
        'enterSlow':'enter 3s linear'
      },
    },
  },
  plugins: [require('daisyui')],
};
