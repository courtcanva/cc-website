/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white85: 'rgba(255, 255, 255, 0.85);',
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
    },
    extend: {
      keyframes: {
        template: {
          '0%': { transform: 'translateX(350%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        template1: 'template 0.4s ease-in-out backwards',
        template2: 'template 0.4s ease-in-out 0.4s backwards',
        template3: 'template 0.4s ease-in-out 0.8s backwards',
        template4: 'template 0.4s ease-in-out 1.2s backwards',
        template5: 'template 0.4s ease-in-out 1.6s backwards',
        template6: 'template 0.4s ease-in-out 2s backwards',
      },
    },
  },
  plugins: [require('daisyui')],
};
