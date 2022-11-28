/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
        p: [
          "1rem",
          {
            lineHeight: "24px",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
      },
      backgroundImage: {
        purpleBlue: "linear-gradient(225deg, #B721FF 0%, #21D4FD 100%)",
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
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-1px)" },
          "95%": { opacity: "1", transform: "translateY(-1px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        fadeIn85: {
          "0%": { opacity: "0", transform: "translateY(-1px)" },
          "95%": { opacity: "0.85", transform: "translateY(-1px)" },
          "100%": { opacity: "0.85", transform: "translateY(0)" },
        },
        enterRight: {
          "0%": { opacity: "0", transform: "translateX(-250%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        enterLeft: {
          "0%": { opacity: "0", transform: "translateX(250%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        introToRight: {
          "0%": { transform: "translateX(-150%)" },
          "100%": { transform: "translateX(0)" },
        },
        introToLeft: {
          "0%": { transform: "translateX(150%)" },
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
        enterSlow: "enter .5s ease-in-out",
        enterCard2: "enter .5s  ease-in-out 0.1s backwards",
        enterCard3: "enter .5s ease-in-out 0.2s backwards ",
        advantageFadeIn: "fadeIn 1s ease-in-out",
        advantageFadeIn85: "fadeIn85 1s ease-in-out",
        advantageToRight: "enterRight 1s ease-in-out",
        advantageToLeft: "enterLeft 1s ease-in-out",
        introToRight1: "introToRight 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275)",
        introToRight2: "introToRight 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0.5s both",
        introToLeft1: "introToLeft 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275)",
        introToLeft2: "introToLeft 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0.5s both",
      },
    },
  },
  plugins: [require("daisyui")],
};
