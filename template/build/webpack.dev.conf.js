var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrors = require('friendly-errors-webpack-plugin')
var merge = require('webpack-merge')
var utils = require('./utils')
var config = require('../config')
var webpackBaseConfig = require('./webpack.base.conf')

var distPath = path.resolve(__dirname, '../dist')
var vuemodules = utils.getModules()
var publicpath = config.dev.publicPath

Object.keys(vuemodules).forEach(function (name) {
    vuemodules[name] = ['./build/dev-client'].concat(vuemodules[name])
})

module.exports = merge(webpackBaseConfig, {
    entry: vuemodules,
    output: {
        path: distPath,
        publicPath: publicpath
    },
    devtool: '#eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunks: ['main']
        }),
        new FriendlyErrors()
    ]
})