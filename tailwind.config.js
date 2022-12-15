/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'white': '#ffffff',
      'colheader': '#d2f2ff',
      'main': '#cadfff',
      'btn-cyan': '#c8eeff',
      'btn-bleu': '#bdc8ff',
      'btn-vert': '#d2ffe1',
      'btn-rouge': '#ffd5d2',
      'btn-gris': "#e7f6fd",
      'chaine-marron': "#a6753e",
      'chaine-gris': "#6b87b0",
      'chaine-beige': "#e1c4a7",
      'chaine-bleu': "#2d51bd",
    },
    fontFamily: {
      monkey: ["MONKEY", "cursive"],
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
