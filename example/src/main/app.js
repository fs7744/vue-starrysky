import Vue from 'vue'
import App from './components/main.vue'
import VueRouter from 'vue-router'

window.vss = class vss {
    static Modules = new Map()

    static Bus = new Vue()

    static getBaseModuleName(urlpath) {
        let info = urlpath.substring(1)
        let index = info.indexOf('/')
        return index == -1 ? info : info.substring(0, index)
    }

    static forceCallModuleChanged(moduleName, afterEmit) {
        vss.Bus.$emit('ModuleChanged', moduleName)
        if (afterEmit != null) {
            afterEmit()
        }
    }

    static whenModuleChanged(fn) {
        vss.Bus.$on('ModuleChanged', fn)
    }

    static loadModule(src, file, afterLoad) {
        let filepath = src + file
        function changeModule() {
            let name = vss.Modules.get(filepath) ? 'NotFound' : src
            vss.forceCallModuleChanged(name, afterLoad)
        }
        if (!vss.Modules.has(filepath)) {
            let script = document.createElement('script')
            vss.Modules.set(filepath, true)
            let head = document.getElementsByTagName('head')[0]
            script.type = 'text/javascript'
            script.charset = 'utf-8'
            script.async = true
            script.src = filepath;
            script.onerror = () => {
                script.onerror = script.onload = null
                changeModule()
            }

            script.onload = () => {
                script.onerror = script.onload = null
                vss.Modules.set(filepath, false)
                changeModule()
            }
            head.appendChild(script)
        } else {
            changeModule()
        }
    }
}

const router = new VueRouter({
    routes: []
})

router.beforeEach((to, from, next) => {
    let name = vss.getBaseModuleName(to.path)
    console.log(name)
    if (name == '') {
        next()
    } else {
        vss.loadModule(name, '/app.js', next)
    }
})

const v = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})


