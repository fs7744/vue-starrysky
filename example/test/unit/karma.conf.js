const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('../../build/webpack.base.conf')
const utils = require('../../build/utils')
const projectRoot = path.resolve(__dirname, '../../')

const webpackConfig = merge(baseConfig, {
    devtool: '#inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify('testing'),
        }),
    ],
})

delete webpackConfig.entry
delete webpackConfig.externals

webpackConfig.module.rules.some((rule) => {
    if (/^babel(-loader)?$/.test(rule.loader)) {
        rule.include.push(path.resolve(projectRoot, 'test/unit'))
        return true
    } else {
        return false
    }
})

module.exports = function (config) {
    config.set({
        // to run in additional browsers:
        // 1. install corresponding karma launcher
        //    http://karma-runner.github.io/0.13/config/browsers.html
        // 2. add it to the `browsers` array below.
        browsers: ['PhantomJS'],
        frameworks: ['mocha', 'sinon-chai'],
        reporters: ['spec', 'coverage'],
        files: ['./index.js'],
        preprocessors: {
            './index.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true,
        },
        coverageReporter: {
            dir: './coverage',
            reporters: [
                { type: 'lcov', subdir: '.' },
                { type: 'text-summary' },
            ],
        },
    })
}
