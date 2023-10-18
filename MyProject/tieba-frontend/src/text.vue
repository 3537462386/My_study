<template>
    <div class="container">
        <Text2 :message="message" @customEvent="handleEvent" />
        <button @click="add" style="width: 30px;height:30px">add</button>

        <div>{{ receivedValue }}</div>
    </div>
</template>

<script>
import Text2 from './components/Text2.vue'
export default {
    components: {
        Text2
    },
    data() {
        return {
            receivedValue: '132'
        }
    },
    metheds: {

        add() {
            this.message++;
        },
        handleEvent(value) {
            this.receivedValue = value;
        }
    }
}
</script>

<style  scoped>
.container {
    width: 100px;
    height: 100px;
    background-color: #403939;
}
</style>