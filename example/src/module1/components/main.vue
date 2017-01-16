<template>
    <div>
        <div>module1 : {{ rd }}</div>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: 'module1',
        data() { return { rd: "" } },
        created() {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData() {
                this.rd = this.$route
            }
        }
    }
</script>