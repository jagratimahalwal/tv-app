module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: "#9104FF",
        green: "#00FF00",
        "blue-transparent": "#040f47de",
        black: "#000000",
      },
    },
    screens: {
      xs: [{ max: "639px" }],
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
