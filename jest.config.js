
module.exports = {
  'collectCoverageFrom': [
    'src/**/*[^index].js'
  ],
  'setupFiles': [
    'raf/polyfill',
    './jestSetup.js'
  ]
}
