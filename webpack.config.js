const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HappyPack = require('happypack')
const prodConfig = require('./webpack.config.production')
const nodeEnv = JSON.stringify(process.env.NODE_ENV || 'production')
console.log('Using NODE_ENV:', nodeEnv)

const defaultConfig = {
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
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': nodeEnv
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}

module.exports = nodeEnv === JSON.stringify('production') ? prodConfig : defaultConfig
