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
        'testimonial': ['550px'],
      },
      lineHeight: {
        'testimonial-md': ['500px'],
        'testimonial-lg': ['600px'],
      },
      margin: {
        '25': '100px',
        '38': '150px',
      },
      padding: {
        '18': '70px',
      },
      screens: {
        'sm-only': {'raw': 'only screen and (max-width: 640px)'}
      },
    },
  },
  variants: {
    extend: {
      padding: ['odd', 'even'],
    },
  },
  plugins: [],
}
