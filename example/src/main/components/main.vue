<template>
    <div>
        <p>{{ currentView }}</p>
        <button v-on:click="changeCom">change component</button>
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
                currentView: 'home' 
            }
        },
        methods: {
            changeCom() {
                var info = this.currentView == 'home' ? "module1" : "home";
                var dd = this;
                var src = info + "/app.js";
                vss.loadModule(src, () => {
                    dd.currentView = info;
                })
            }
        },
    }
</script>