/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  future: {
    hoverOnlyWhenSupported: true
  },
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'sm': '900px'
      },
      spacing: {
        '0.2': '0.2rem',
        '0.3': '0.3rem',
        '1': '1rem',
        '1.5': '1.5rem',
        '2': '2rem',
        '2.5': '2.5rem',
        '3': '3rem',
        '3.5': '3.5rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '8': '8rem',
        '10': '10rem',
        '20': '20rem',
        '25': '25rem',
        '30': '30rem',
        '35': '35rem',
        '40': '40rem',
        '45': '45rem',
        '50': '50%',
        '85': '85%',
        '90': '90%'
      },
      fontSize: {
        'xs': '1.4rem',
        'sm': '1.6rem',
        'md': '1.8rem',
        'icon': '2rem',
        'base': '2.4rem',
        'lg': '3.2rem',
        'xl': '4.2rem'
      },
      borderRadius: {
        'sm': '0.6rem',
        'md': '0.8rem',
        'lg': '1rem'
      },
      letterSpacing: {
        'widest': '0.3rem'
      },
      boxShadow: {
        'sm': '0 2.5rem 3.5rem rgba(0, 0, 0, 0.1)'
      },
      transitionProperty: {
        'transform': 'transform',
        'scale': 'scale',
        'rotate': 'rotate',
        'translate': 'translate',
        'm-nav': 'opacity, translate'
      },
      transitionDuration: {
        '400': '400ms'
      },
      colors: {
        'grayish': '#555'
      }
    },
  },
  plugins: [],
}
