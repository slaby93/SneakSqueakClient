const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HappyPack = require('happypack')
const CompressionPlugin = require('compression-webpack-plugin')
const nodeEnv = JSON.stringify(process.env.NODE_ENV || 'production')
const CopyWebpackPlugin = require('copy-webpack-plugin')
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
  ],
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
}

const prodConfig = {
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
    new webpack.optimize.UglifyJsPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
}

const PWAConfig = {
  context: path.join(__dirname, '/'),
  devtool: 'inline-source-map',
  entry: [
    './src/serviceworker.js'
  ],
  output: {
    path: path.join(__dirname, '/server/public'),
    filename: 'serviceworker.js',
    publicPath: '/'
  },
  plugins: [
    new CopyWebpackPlugin(
      [
        {
          from: 'src/manifest.json',
          to: './manifest.json'
        },
        {
          from: 'src/resources/icons',
          to: './icons'
        }
      ]
    )
  ]
}

const configs = [
  nodeEnv === JSON.stringify('production') ? prodConfig : defaultConfig,
  PWAConfig
]
module.exports = configs
