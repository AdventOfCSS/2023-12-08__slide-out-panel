/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        avatar: '6px',
      },
      colors: {
        supernova: '#fac900' /* yellow / warning */,
        orangeRed: '#ff4600' /* red / error */,
        silverTree: '#70bd91' /* light green */,
        spanishGreen: '#008a52' /* medium green */,
        cruseo: '#0a5d2c' /* dark green */,
        countyGreen: '#003d19' /* darkest green */,
        acadia: '#392f2d' /* brown */,
        scotchMist: '#efe9cb' /* light brown */,
        nileBlue: '#243853' /* blue */,
        blackPearl: '#071126' /* navy blue */,
        pastelMagenta: '#ff9dbf' /* pink */,
        vistaBlue: '#94d1b4' /* light green around the avatar */,
      },
      height: {
        18: '72px',
      },
      width: {
        18: '72px',
      },
    },
    fontFamily: {
      condensed: ['Bebas Neue', 'sans-serif'],
      handwriting: ['Kalam', 'cursive'],
      sans: ['Inter', 'sans-serif'],
      script: ['Agbalumo', 'cursive'],
    },
  },
  plugins: [],
}
