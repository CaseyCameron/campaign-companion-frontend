module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 35px rgba(33, 20, 20, 0.5)'
      },
      fontFamily: {
        'sans': ['Marcellus SC'],
        'serif': ['Goudy Old Style'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
