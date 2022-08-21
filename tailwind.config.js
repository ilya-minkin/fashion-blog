/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'xs': {'min': '320px', 'max': '479.5px'},
      'sm': {'min': '480px', 'max': '767.5px'},
      'm-sm': {'max': '767.5px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg-2': {'min': '1024px', 'max': '1279px'},
      'lg': {'min': '1280px', 'max': '1535px'},
      'xl': {'min': '1536px', 'max': '1919px'},
      '2xl': {'min': '1920px'}
    },
    spacing: {
      'xs': '300px',
      'sm': '420px',
      'md': '720px',
      'lg': '992px',
      'xl': '1170px',
      '2xl': '1760px',
      '3xl': '1880px',
      '4xl': '1440px'
    }
  },
  plugins: [],
}
