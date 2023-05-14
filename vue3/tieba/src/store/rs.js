import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getrs } from '@/service/rs'

export const users = defineStore('rs', () => {
    const rs = ref([])
    const getrss = async () => {
        const data = await getrs()
        rs.value = data.data
    }
    return {
        rs,
        getrss
    }
})

