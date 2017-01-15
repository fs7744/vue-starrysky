import Vue from 'vue'
import App from './components/main.vue'

new Vue({
    el: '#app',
    render: h => h(App)
})

window.vss = class vss {
    static Modules = new Map()

    static loadModule(src, afterLoad) {
        if (!vss.Modules.has(src)) {
            var script = document.createElement('script')
            vss.Modules.set(src, script)
            var head = document.getElementsByTagName('head')[0]
            script.type = 'text/javascript'
            script.charset = 'utf-8'
            script.async = true
            script.timeout = 120000

            script.src = src;
            var timeout = setTimeout(onScriptComplete, 120000)
            script.onerror = script.onload = onScriptComplete
            function onScriptComplete() {
                // avoid mem leaks in IE.
                script.onerror = script.onload = null
                clearTimeout(timeout)
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