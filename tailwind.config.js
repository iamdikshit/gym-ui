/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: " linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('/src/img/hero.jpg')",
        hero2:
          "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('/src/img/hero2.png')",
      },
      colors: {
        "primary-red": "#FF0000",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
