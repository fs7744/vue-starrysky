import Vue from 'vue'

import main from 'src/main/components/NotFound.vue'

describe('main/NotFound.vue', () => {
    it('should render correct contents', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render: (h) => h(main),
        })
        expect(vm.$el.querySelector('.col').textContent)
            .to.equal('404')
    })
})
