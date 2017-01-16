const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const buildPath = path.resolve(__dirname, "public", "build");

const plugins = [
    new HtmlWebpackPlugin({
        template: "static/index.html",
        hash: true
    }),
    new ExtractTextPlugin("[name].css", {
        allChunks: true
    })
];

const webpackConfig = {
    entry: "./client/index.js",
    output: {
        path: buildPath,
        filename: "bundle.js",
    },
    devtool: "eval",
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: [/node_modules/],
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: __dirname,
    },
    plugins: plugins,
    node: {
        fs: "empty"
    }
};

module.exports = webpackConfig;