<template>
    <div><h2 class="text-5xl">{{ display }}</h2></div>
</template>
<script>
    export default {
        data() {
            return {
                time: Date.now()
            }
        },
        computed: {
            display() {
                var s = new Date(this.time).toLocaleTimeString("en-US")
                return s;
            }
        },
        created() {
            setInterval(() => {
                this.time = Date.now();
            }, 1000);
        }
    }
</script>