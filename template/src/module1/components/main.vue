<template>
    <div class="container">
        <div class="row">
            <div class="col" :class="$style.test" >
                module1 : {{ routeInfo }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'module1',
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