<template>
    <div>
        <!--<p>{{ currentView }}</p>
        <button v-on:click="changeCom">change component</button>-->
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
        <router-link to="/module1">Go to module1</router-link>
        <!--<router-view></router-view>-->
        <!--<keep-alive>-->
        <component v-bind:is="currentView"></component>
        <!--</keep-alive>-->
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: 'app',
        data() {
            return {
                currentView: 'r'
            }
        },
        created() {
            var v = this
            vss.Bus.$on('viewChanged', (view) => {
                v.currentView = view
            })
        },
        methods: {
            changeCom() {
                this.currentView = this.$route.path.replace('/', '')
            }
        },
    }
</script>