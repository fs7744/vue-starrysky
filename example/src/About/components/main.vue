<template>
    <div class="container">
        <div class="row">
            <div class="col" :class="$style.test" >
                About : {{ routeInfo }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
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