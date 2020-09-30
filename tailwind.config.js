const { defaults } = require("autoprefixer");

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: { display: ["Nunito", "sans-serif"] },
      backgroundImage: {
        "hero-lg": "url('/src/assets/img/hero-lg.jpg')",
        "hero-md": "url('/src/assets/img/hero-md.jpg')",
        "hero-sm": "url('/src/assets/img/hero-sm.jpg')",
      },
    },
  },
  variants: {},
  plugins: [],
};
