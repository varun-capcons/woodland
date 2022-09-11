const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#2C6431",
      },
      fontFamily: {
        avenir: ["Avenir"],
        avenirb: ["Avenir-bold"],
        avenird: ["Avenir-demi"],
        avenirm: ["Avenir-medium"],
      },
    },
  },
  plugins: [],
};
