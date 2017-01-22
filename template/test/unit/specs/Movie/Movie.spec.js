import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'

import main from 'src/Movie/components/main.vue'

describe('Mvoive/main.vue', () => {
    it('should render correct contents', () => {
        Vue.use(Vuex)
        const store = new Vuex.Store({
            state: {
                route: 'info',
            },
        })
        const vm = new Vue({
            el: document.createElement('div'),
            store,
            render: (h) => h(main),
        })
        expect(vm.$el.querySelector('.col').textContent)
            .to.equal('movie : info')
    })
})
