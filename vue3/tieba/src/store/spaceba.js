import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getspaceba } from '@/service/spaceba'

export const usespaceba = defineStore('spaceba', () => {
    const spaceba = ref([])
    const getspacebas = async () => {
        const data = await getspaceba()
        spaceba.value = data.data
    }
    return {
        spaceba,
        getspacebas
    }
})

