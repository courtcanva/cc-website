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
        btnColor: "#F9F9F9",
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
        p: [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0.01em",
            fontWeight: "400",
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
        introToRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        introToLeft: {
          "0%": { transform: "translateX(100%)" },
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
        introToRight1: "introToRight 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275)",
        introToRight2: "introToRight 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0.5s",
        introToLeft1: "introToLeft 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275)",
        introToLeft2: "introToLeft 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0.5s",
      },
    },
  },
  plugins: [require("daisyui")],
};
