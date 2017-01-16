<template>
    <div>
        <div class="container">
            <div class="row">
                <router-link to="/foo" class="col">Go to Foo</router-link>
                <router-link to="/bar" class="col">Go to Bar</router-link>
                <router-link to="/module1" class="col">Go to module1</router-link>
            </div>
        </div>
        <component v-bind:is="currentView"></component>
    </div>
</template>

<script>
    import Vue from 'vue'
    import NotFound from './NotFound.vue'

    export default {
        name: 'app',
        data() {
            return {
                currentView: 'NotFound'
            }
        },
        created() {
            let v = this
            vss.whenModuleChanged((view) => {
                if (v.currentView != view)
                    v.currentView = view
            })
        },
        components: {
            'NotFound': NotFound
        }
    }
</script>