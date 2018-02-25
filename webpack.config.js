const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const extend = require('util')._extend;

const NODE_ENV = JSON.stringify(process.env.NODE_ENV || 'production');
const JS_ENV = JSON.stringify(process.env.NODE_ENV || 'production');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ENV_DEVELOPMENT = require('./env.development');
const ENV_PRODUCTION = require('./env.production');

console.log('Using NODE_ENV:', NODE_ENV);
console.log('Using JS_ENV:', JS_ENV);

const commonModule = {
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'happypack/loader',
    },
    { test: /(\.css|\.scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
    { test: /\.svg/, loader: 'svg-url-loader' },
    {
      test: /\.(gif|png|jpe?g)$/i,
      loader: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          query: {
            bypassOnDebug: true,
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          },
        },
      ],
    },
  ],
};

const resolve = {
  modules: [
    path.resolve('./src'),
    path.resolve('node_modules'),
  ],
  alias: {
    styledComponentsSerilizeHelper: path.resolve(__dirname, 'src/utils/testing/styledComponentsSerilizeHelper.js'),
  },
};

const defaultConfig = {
  context: path.join(__dirname, '/'),
  devtool: 'inline-source-map',
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, '/dist/dashboard'),
    chunkFilename: '[name].chunk.js',
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: commonModule,
  resolve,
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new HappyPack({
      loaders: ['babel-loader'],
      threads: 4,
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/manifest.json',
        to: './manifest.json',
      },
      {
        from: 'src/resources/icons',
        to: './icons',
      },
    ]),
    new webpack.DefinePlugin({
      'process.env': extend({ NODE_ENV, JS_ENV }, ENV_DEVELOPMENT),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
};

const prodConfig = {
  context: path.join(__dirname, '/'),
  devtool: 'inline-source-map',
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, '/dist/dashboard'),
    chunkFilename: '[name].chunk.js',
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: commonModule,
  resolve,
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new HappyPack({
      loaders: ['babel-loader'],
      threads: 4,
    }),
    new webpack.DefinePlugin({
      'process.env': extend({ NODE_ENV, JS_ENV }, ENV_PRODUCTION),
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/manifest.json',
        to: './manifest.json',
      },
      {
        from: 'src/resources/icons',
        to: './icons',
      },
      {
        from: './node_modules/workbox-sw/build/importScripts/workbox-sw.prod.v2.1.0.js',
        to: './workbox-sw.prod.v2.1.0.js',
      },
      {
        from: './node_modules/workbox-sw/build/importScripts/workbox-sw.prod.v2.1.0.js.map',
        to: './workbox-sw.prod.v2.1.0.js.map',
      },
    ]),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
        comparisons: false, // don't optimize comparisons
      },
    }),
  ],
};

module.exports = NODE_ENV === JSON.stringify('production') ? prodConfig : defaultConfig;
