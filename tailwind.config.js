module.exports = {
  purge: ["./src/**/*.{html,js,css}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ['Winky Sans', 'Noto Serif', 'serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
