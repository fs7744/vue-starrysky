<template>
    <div class="container">
        <div class="row">
            <div class="col">
                module1 : {{ routeInfo }}
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: 'module1',
        computed: {
            routeInfo() {
                return this.$store.state.route
            }
        }
    }
</script>