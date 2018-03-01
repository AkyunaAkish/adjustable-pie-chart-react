const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const helpers = require('./helpers');

module.exports = {
    entry: [
        'babel-polyfill',
        './client/index.js'
    ],
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: helpers.root('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /(node_modules|bower_components)/,
            test: /\.jsx?$/,
            use: [{
                loader: 'babel-loader'
            }],
        },
        {
            test: /\.(woff|woff2|ttf|eot|jpg|jpe?g|png|gif|svg|ico)(\?.*$|$)/,
            loader: `url-loader`
        },
        {
            test: /\.s?css/,
            use: [{
                loader: 'style-loader'
            },
            {
                loader: 'css-loader'
            },
            {
                loader: 'sass-loader'
            }]
        }]
    },
    plugins: [
        new WebpackNotifierPlugin({
            alwaysNotify: true
        })
    ],
    resolve: {
        extensions: ['.js', '.json']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './client'
    },
    node: {
        fs: 'empty',
        tls: 'empty',
        net: 'empty',
        console: false,
        global: true,
        process: true,
        Buffer: true,
        __filename: 'mock',
        __dirname: 'mock',
        setImmediate: true
    }
};