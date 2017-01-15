var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrors = require('friendly-errors-webpack-plugin')
var utils = require('./utils')
var config = require('../config')

var distPath = path.resolve(__dirname, '../dist')
var vuemodules = utils.getModules()
var publicpath = config.dev.publicPath

Object.keys(vuemodules).forEach(function (name) {
  vuemodules[name] = ['./build/dev-client'].concat(vuemodules[name])
})

module.exports = {
    entry: vuemodules,
    output: {
        filename: "[name]/app.js",
        path: distPath,
        publicPath: publicpath
    },
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css!autoprefixer' },
        ]
    },
    devtool: '#eval-source-map',
    externals: {
        'vue': 'Vue'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunks: ['main']
        }),
        new FriendlyErrors()
    ]
}