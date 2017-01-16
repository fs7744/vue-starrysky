<template>
    <div>
        <div class="container">
            <div class="row">
                <router-link v-for="u in urls" :to="u" class="col">Go to {{ u }}</router-link>
            </div>
        </div>
        <component v-bind:is="currentModule"></component>
    </div>
</template>

<script>
    import Vue from 'vue'
    import NotFound from './NotFound.vue'

    export default {
        name: 'app',
        data() {
            return {
                urls: ['/foo', '/bar', '/module1']
            }
        },
        computed: {
            currentModule() {
                return this.$store.state.main.currentModule
            }
        },
        components: {
            'NotFound': NotFound
        }
    }
</script>