import { reactive } from 'vue'
import { defineStore } from 'pinia' // 定义store模型

export const useUserStore = defineStore('user', () => {
   const user = reactive({
      token:''
   })
   return {
    user
   }
})