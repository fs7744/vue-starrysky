require('shelljs/global')
var merge = require('webpack-merge')
var ora = require('ora')
var webpack = require('webpack')
var path = require('path')
var utils = require('./utils')
var webpackConfig = require('./webpack.prd.conf')
var config = require('../config')
env.NODE_ENV = 'production'
var spinner = ora('building for production...')
spinner.start()

var distPath = path.resolve(__dirname, '../dist')
rm('-rf', distPath)
mkdir('-p', distPath)

var publicpath = config.prd.publicPath
var vuemodules = utils.getModules()

webpack(merge({
    entry: vuemodules,
    output: {
        filename: "[name]/app.js",
        path: distPath,
        publicPath: publicpath
    },
}, webpackConfig), function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
})