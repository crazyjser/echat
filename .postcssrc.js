module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    "postcss-px-to-viewport":{ 
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,
      viewportUnit: 'vmin',
      selectorBlackList: [
      ],
      minPixelValue: 1,
      mediaQuery: false
    }
  }
}
