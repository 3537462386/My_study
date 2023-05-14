import { ref } from  'vue'
import { defineStore } from 'pinia'
import { getBanner } from '@/service/recommend'

export const useRecommendStore = defineStore('recommend', () => {
   const banners = ref([])
   const getBannerDatas =async () => {
      const data = await getBanner()
      console.log(data, '///');
      
      banners.value = data.banners
   }
   return {
      banners,
      getBannerDatas,
   }
})