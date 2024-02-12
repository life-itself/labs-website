const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "yellow-400": "#f0ca5e",
        "yellow-300": "#f6e0a2",
        "yellow-200": "#fef9c3",
        "yellow-100": "#fdf7e8",
        "yellow-50": "#fefcf6",
      },
      scale: {
        flip: "-1",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
