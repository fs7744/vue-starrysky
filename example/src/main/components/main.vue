<template>
    <div>
        <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li v-for="u in urls" class="nav-item" :class="{active:u.isActive}">
                        <router-link class="nav-link" :to="'/' + u.name">
                            <h4>{{ u.name }}</h4>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <component v-bind:is="currentModule"></component>
    </div>
</template>

<script>
    import NotFound from './NotFound.vue'

    export default {
        name: 'app',
        data() {
            return {
                urls: [{ name: 'Movie', isActive: false }, { name: 'About', isActive: false }],
            }
        },
        computed: {
            currentModule() {
                const view = this.$store.state.main.currentModule
                this.urls.forEach(v => v.isActive = v.name === view)
                return view
            },
        },
        components: {
            'NotFound': NotFound,
        },
    }
</script>