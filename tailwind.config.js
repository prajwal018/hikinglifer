/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#15212d",
        mainBg: "#f1f4f4",
        dark: "#3265A3",
        light: "#28323e",
        aluminum: "#A9AAB0",
        bg: "#f8f8f8",
        grey1: "#15212d",
        grey2: "rgba(29,29,29,.5)",
        grey3: "rgba(29,29,29,.2)",
        borderGrey: "rgba(0,0,0,0.2)",
        lAccent: "#16cbe7",
        oAccent: "#FF5B00",
        orange: "#FF5B00",
      },
      zIndex: {
        999: 999,
        1000: 1000,
      },
      borderWidth: {
        "1/2": 0.5,
        10: 10,
        15: 15,
        ...defaultTheme.borderWidth,
      },
      fontFamily: {
        funky: ['"Comic Sans MS"', "cursive", "sans-serif"],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
