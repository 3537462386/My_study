import { reactive,watch } from 'vue'
import { defineStore } from 'pinia' // 定义store模型

export const useUserStore = defineStore('user', () => {
   const userStore = reactive({
      token:'',
      userId: ''
   })

   // 从本地存储中加载数据
   const userId = localStorage.getItem('userId')
   if (userId) {
      userStore.userId = userId
      console.log(userId)
   }

   // // 监听数据变化，保存到本地存储
   // watch(userStore, () => {
   //    localStorage.setItem('userStore', JSON.stringify(userStore))
   //    console.log('userStore', JSON.stringify(userStore))
   // }, { deep: true })

   return {
    userStore
   }
})