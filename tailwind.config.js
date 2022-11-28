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
      colors: {
        backgroundColor: "#4A4A4A",
        white: "#ffffff",
        btnText: "#f9f9f9",
        btnColor: "#F9F9F9",
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
      opacity: {
        85: ".85",
      },
      fontSize: {
        h2: [
          "2rem",
          {
            lineHeight: "48px",
            letterSpacing: "0.02em",
            fontWeight: "400",
          },
        ],
        h1: [
          "3rem",
          {
            fontWeight: "600",
            lineHeight: "48px",
            letterSpacing: "0.03em",
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
          "1rem",
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
        cardBorderBlue: "linear-gradient(33.75deg, #2AF598 0%, #009EFD 100%)",
        btn: "linear-gradient(33.75deg, #F092FF 0%, #EE213C 100%)",
        pink: "linear-gradient(33.75deg, #F092FF 0%, #EE213C 100%);",
        btnHover: "linear-gradient(33.75deg, #E961FF 0%, #EE0020 100%)",
        cardBorder: "linear-gradient(33.75deg, #ECC611 0%, #F83600 100%)",
        cardBorderOne:
          "linear-gradient(to right,#4A4A4A, #4A4A4A),linear-gradient(33.75deg, #2AF598 0%, #009EFD 100%)",
        cardBorderTwo:
          "linear-gradient(to right,#4A4A4A, #4A4A4A),linear-gradient(33.75deg, #F092FF 0%, #EE213C 100%)",
        cardBorderThree:
          "linear-gradient(to right,#4A4A4A, #4A4A4A),linear-gradient(33.75deg, #ECC611 0%, #F83600 100%)",
      },

      keyframes: {
        template: {
          "0%": { transform: "translateX(300%)" },
          "100%": { transform: "translateX(0)" },
        },
        enter: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        introToRight: {
          "0%": { transform: "translateX(-150%)" },
          "100%": { transform: "translateX(0)" },
        },
        introToLeft: {
          "0%": { transform: "translateX(150%)" },
          "100%": { transform: "translateX(0)" },
        },
        navModalFadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "0.85" },
        },
        navModalFadeOut: {
          from: { opacity: "0.85" },
          to: { opacity: "0" },
        },
      },
      animation: {
        template1: "template 0.25s ease-in-out backwards",
        template2: "template 0.25s ease-in-out 0.25s backwards",
        template3: "template 0.25s ease-in-out 0.5s backwards",
        template4: "template 0.25s ease-in-out 0.75s backwards",
        template5: "template 0.25s ease-in-out 1s backwards",
        template6: "template 0.25s ease-in-out 1.25s backwards",
        enterSlow: "enter .5s ease-in-out",
        enterCard2: "enter .5s  ease-in-out 0.1s backwards",
        enterCard3: "enter .5s ease-in-out 0.2s backwards ",
        introToRight1: "introToRight 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275)",
        introToRight2: "introToRight 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0.5s both",
        introToLeft1: "introToLeft 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275)",
        introToLeft2: "introToLeft 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0.5s both",
        navModalFadeIn: "navModalFadeIn 0.3s ease-in-out",
        navModalFadeOut: "navModalFadeOut 0.3s ease-in-out",
      },
      screens: {
        tablet: "834px",
        desktop: "1280px",
      },
      zIndex: {
        whyChooseUs: "10",
        hero: "20",
        top: "99999",
      },
    },
  },
  plugins: [require("daisyui")],
};
