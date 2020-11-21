module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'display': ['Quicksand']
      },
      colors: {
        'purple-dark': '#272042',
      },
      fontSize: {
        '2.5xl': ['1.75rem'],
        '4.8xl': ['2.875rem'],
        'testimonial': ['550px', '600px'],
      },
      margin: {
        '25': '100px',
        '38': '150px',
      },
      padding: {
        '18': '70px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
