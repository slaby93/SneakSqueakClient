const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HappyPack = require('happypack')

const config = {
  context: path.join(__dirname, '/'),
  devtool: 'inline-source-map',
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, '/server/public'),
    chunkFilename: '[name].chunk.js',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'happypack/loader'
      },
            { test: /(\.css|\.scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new HappyPack({
      loaders: ['babel-loader'],
      threads: 4
    })
  ]
}
module.exports = config
