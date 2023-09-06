/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx, ts, tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        main: "#28293E",
        second: "#F3D1BF",
        darkText: "#391400",
        purp: "#f2f2f2",
        dark: "#391400",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
