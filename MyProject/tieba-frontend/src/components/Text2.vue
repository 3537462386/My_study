<template>
    <div class="text">
        <div>{{ message }}</div>
        <button @click="inset"></button>
    </div>
</template>

<script>

export default {
    props() {
        message:123
    },
    data() {
        return {
            message:this.message
        }
    },
    methods: {
        inset() {
            let value = 100
            this.$emit('customEvent', value);
        }
    }
}
</script>

<style  scoped>
.text {
    width: 20px;
    height: 20px;
}
</style>