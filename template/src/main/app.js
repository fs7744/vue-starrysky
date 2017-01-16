import Vue from 'vue'
import App from './components/main.vue'
import VueRouter from 'vue-router'

window.vss = class vss {
    static Modules = new Map()

    static Store = new Vuex.Store({
        modules: {
            main: {
                state: { currentModule: 'NotFound' },
                mutations: {
                    changeModule(state, view) {
                        if (state.currentModule != view)
                            state.currentModule = view
                    }
                }
            }
        }
    })

    static getBaseModuleName(urlpath) {
        let info = urlpath.substring(1)
        let index = info.indexOf('/')
        return index == -1 ? info : info.substring(0, index)
    }

    static loadModule(src, file, afterLoad) {
        let filepath = src + file
        function changeModule() {
            let name = vss.Modules.get(filepath) ? 'NotFound' : src
            vss.Store.commit('changeModule', name)
            if (afterLoad != null) {
                afterLoad()
            }
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
    if (name == '') {
        next()
    } else {
        vss.loadModule(name, '/app.js', next)
    }
})

const v = new Vue({
    el: '#app',
    router,
    store: vss.Store,
    render: h => h(App)
})
