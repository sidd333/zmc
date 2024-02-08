/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{html,js,jsx}",
    "./src/components/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        pic: "url('../public/pic.jpg')",
        pic2: "url('../public/pic2.jpg')",
      },
      colors: {
        dGray: "#50514f",
        lGray: "#CBD4C2",
        snow: "fffcff",
        aqua: "#247ba0",
      },
      fontFamily: {
        comforta: ["Comfortaa", "sans-serif"],
      },
    },
  },
  plugins: [],
};
