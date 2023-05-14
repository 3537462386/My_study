import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getchoose } from '@/service/choose'

export const usechoose = defineStore('choose', () => {
    const choose = ref([])
    const getchooses = async () => {
        const data = await getchoose()
        choose.value = data.data
    }
    return {
        choose,
        getchooses
    }
})

