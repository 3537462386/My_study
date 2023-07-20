import { defineStore } from 'pinia';
import { ref } from 'vue';

const useCartStore = defineStore('cart', () => {
    const badge = ref(5);
    const changeBadge = () => {
        badge.value = 0
    }
    return {
        badge,
        changeBadge
    }
})

export default useCartStore;
