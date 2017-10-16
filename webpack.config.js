var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        'currency-map-country': './currency-map-country.js',
        'currency-map-country.min': './currency-map-country.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: ['/node_modules/', '/tests/']
            }
        ]
    }
};
