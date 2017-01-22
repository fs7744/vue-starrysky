<template>
    <div class="container">
        <div class="row">
            <div class="col" :class="$style.test" >movie : {{ routeInfo }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Movie',
        computed: {
            routeInfo() {
                return this.$store.state.route
            },
        },
    }
</script>

<style module>
.test {
    color: red
}
</style>