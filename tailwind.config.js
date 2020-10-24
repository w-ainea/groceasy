const { defaults } = require("autoprefixer");

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        "mandarin-color": "#FA824C",
        "baby-powder": "#FAFFFD",
        "yellow-green": "#A2D729",
        "black-coffee": "#342E37",
        "tufts-blue": "#3C91E6",
      },
      fontFamily: {
        headings: ["Montserrat", "sans-serif"],
        display: ["Karla", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
