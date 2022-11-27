/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
      },
      opacity: {
        85: ".85",
      },
      fontSize: {
        h2: [
          "32px",
          {
            lineHeight: "48px",
            letterSpacing: "0.02em",
            fontWeight: "400",
          },
        ],
        h4: [
          "20px",
          {
            lineHeight: "26px",
            letterSpacing: "0.02em",
            fontWeight: "300",
          },
        ],
        p: [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        logoText: [
          "20px",
          {
            lineHeight: "32px",
            letterSpacing: "0.03em",
            fontWeight: "300",
          },
        ],
      },
      backgroundImage: {
        blue: "linear-gradient(33.75deg, #00B7BB 0%, #148EFF 100%)",
        pink: "linear-gradient(33.75deg, #F092FF 0%, #EE213C 100%);",
      },
      keyframes: {
        template: {
          "0%": { transform: "translateX(300%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        template1: "template 0.25s ease-in-out backwards",
        template2: "template 0.25s ease-in-out 0.25s backwards",
        template3: "template 0.25s ease-in-out 0.5s backwards",
        template4: "template 0.25s ease-in-out 0.75s backwards",
        template5: "template 0.25s ease-in-out 1s backwards",
        template6: "template 0.25s ease-in-out 1.25s backwards",
      },
      screens: {
        mobile: "390px",
        tablet: "834px",
        desktop: "1280px",
      },
      colors: {
        background: {
          100: "#666666",
          200: "#575757",
          300: "#4A4A4A",
          400: "#3D3D3D",
          500: "#323232",
        },
        typography: {
          100: "#888888",
          200: "#A5A5A5",
          300: "#BDBDBD",
          400: "#DBDBDB",
          500: "#F9F9F9",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
