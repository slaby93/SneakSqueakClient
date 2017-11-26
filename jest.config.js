
module.exports = {
  'collectCoverageFrom': ['src/**/*.js'],
  'setupFiles': [
    'raf/polyfill',
    './jestSetup.js'
  ]
}
