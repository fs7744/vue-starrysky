var path = require('path')
var projectRoot = path.resolve(__dirname, '../')
var eslintformatter = require('eslint-friendly-formatter')

module.exports = {
    output: {
        filename: "[name]/app.js"
    },
    module: {
        rules: [
            {
                enforce: 'pre', test: /\.vue$/, loader: 'eslint-loader', exclude: /node_modules/,
                include: [path.join(projectRoot, 'src')], query: {
                    formatter: eslintformatter
                }
            },
            {
                enforce: 'pre', test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/,
                include: [path.join(projectRoot, 'src')], query: {
                    formatter: eslintformatter
                }
            },
            {
                test: /\.vue$/, loader: 'vue-loader',
                options: {
                    cssModules: {
                        localIdentName: '[name]-[local]-[hash:base64:5]',
                        camelCase: true
                    }
                }
            },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        ],
    },
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
    }
}