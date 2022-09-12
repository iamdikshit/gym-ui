/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*"],
  theme: {
    extend: {
      backgroundImage: {
        hero: " linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('/img/hero.jpg')",
        hero2:
          "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('/img/hero2.png')",
        footerbg: "url('/img/footer-background.png')",
        footerbg2:
          "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)),url('/img/footer2.jpg')",
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
