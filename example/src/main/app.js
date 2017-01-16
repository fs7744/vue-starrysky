import Vue from 'vue'
import App from './components/main.vue'
import VueRouter from 'vue-router'

const NF = { template: '<div>404</div>' }
const routes = [
]
const router = new VueRouter({
    routes
})

window.vss = class vss {
    static Modules = new Map()

    static Bus = new Vue()

    static loadModule(src, afterLoad) {
        if (!vss.Modules.has(src)) {
            var script = document.createElement('script')
            vss.Modules.set(src, script)
            var head = document.getElementsByTagName('head')[0]
            script.type = 'text/javascript'
            script.charset = 'utf-8'
            script.async = true
            //script.timeout = 120000

            script.src = src;
            //var timeout = setTimeout(onScriptComplete, 120000)
            script.onerror = script.onload = onScriptComplete
            function onScriptComplete() {
                // avoid mem leaks in IE.
                script.onerror = script.onload = null
                //clearTimeout(timeout)
                if (afterLoad != null) {
                    afterLoad()
                }
            };
            head.appendChild(script)
        } else {
            if (afterLoad != null) {
                afterLoad()
            }
        }
    }
}


router.beforeEach((to, from, next) => {

    vss.loadModule(to.path + '/app.js', () => {
        vss.Bus.$emit('viewChanged', to.path.replace('/', ''))
        next()
    })
})

const v = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

Vue.component('NF404', NF)


