var fs = require('fs')
var path = require('path')

module.exports = {
    getModules() {
        var srcpath = './src'
        var vuemodules = {}
        fs.readdirSync(srcpath).forEach(function (dir) {
            if (fs.statSync(path.join(srcpath, dir)).isDirectory()) {
                vuemodules[dir] = './src/' + dir + '/app.js'
            }
        })
        return vuemodules
    }
}