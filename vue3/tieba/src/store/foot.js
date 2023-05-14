import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getfoot } from '@/service/foot'

export const usefoot = defineStore('foot', () => {
    const foot = ref([])
    const getfoots = async () => {
        const data = await getfoot()
        foot.value = data.data
    }
    return {
        foot,
        getfoots
    }
})
