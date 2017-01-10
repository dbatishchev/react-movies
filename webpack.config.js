var path = require('path');
var webpack = require("webpack");

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var plugins = [
    new HtmlWebpackPlugin({
        template: 'static/index.html',
        hash: true
    }),
    new ExtractTextPlugin('[name].css', {
        allChunks: true
    })
];

webpackConfig = {
    entry: "./src/index.js",
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [/node_modules/],
            }
        ]
    },
    devServer: {
        contentBase: __dirname,
    },
    plugins: plugins,
    node: {
        fs: "empty"
    }
};

module.exports = webpackConfig;