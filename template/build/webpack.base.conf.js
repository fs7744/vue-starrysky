const path = require('path')
const eslintformatter = require('eslint-friendly-formatter')

const projectRoot = path.resolve(__dirname, '../')

module.exports = {
    output: {
        filename: '[name]/app.js',
    },
    resolve: {
        alias: {
            'src': path.resolve(__dirname, '../src'),
        },
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.vue$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                include: [path.join(projectRoot, 'src')],
                query: {
                    formatter: eslintformatter,
                },
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                include: [path.join(projectRoot, 'src')],
                query: {
                    formatter: eslintformatter,
                },
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    cssModules: {
                        localIdentName: '[name]-[local]-[hash:base64:5]',
                        camelCase: true,
                    },
                },
            },
            { test: /\.js$/, loader: 'babel-loader', include: [path.join(projectRoot, 'src')], exclude: /node_modules/ },
        ],
    },
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
    },
}
