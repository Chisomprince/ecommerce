module.exports = {
  purge: [],
  purge: ['./pages/**/*.js','./components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      translate:['motion-reduce'],
      transform:['hover','focus'],
      borderWidth:['last']
    },
  },
  plugins: [],
}
