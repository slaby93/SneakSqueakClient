const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    context: path.join(__dirname, '/'),
    devtool: 'inline-source-map',
    entry: [
        'babel-polyfill',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            { test: /(\.css|\.scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.svg/, loader: 'svg-url-loader' },
            {
                test: /\.(gif|png|jpe?g)$/i,
                loaders: [
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
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
    ]
}
module.exports = config