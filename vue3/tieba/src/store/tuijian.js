import { ref } from 'vue'
import { defineStore } from 'pinia'
import { gettuijian } from '@/service/tuijian'

export const usetuijian = defineStore('tuijian', () => {
    const tuijian = ref([])
    const gettuijians = async () => {
        const data = await gettuijian()
        tuijian.value = data.data.itemlist
    }
    return {
        tuijian,
        gettuijians
    }
})
