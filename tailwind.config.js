const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',

  purge: [
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/*.js',
    './app/View/Components/*.php',
    './app/View/Components/**/*.php'
  ],

  theme: {
    extend: {
      colors: {
        'gray': {
          '750': '#2B3544',
          '850': '#18212F',
          '950': '#090C14'
        },
        'blue': {
          '50': '#7699d1',
          '100': '#6c8fc7',
          '200': '#6285bd',
          '300': '#587bb3',
          '400': '#4e71a9',
          '500': '#44679f',
          '600': '#3a5d95',
          '700': '#30538b',
          '800': '#264981',
          '900': '#1c3f77'
        }
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans]
      }
    }
  },

  variants: {
    extend: {
      opacity: ['disabled']
    }
  },

  plugins: [require('@tailwindcss/forms')]
};
