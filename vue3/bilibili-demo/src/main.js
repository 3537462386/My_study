import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import '@/mock/index' // 模拟数据
import { createPinia } from 'pinia'
import {
   Swipe,
   SwipeItem,
   Lazyload
} from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
import './assets/main.css'
const app = createApp(App)

// 全家桶三件套
app
   .use(Swipe)
   .use(SwipeItem)
   .use(createPinia())
   .use(router)  
   .use(Lazyload)
   .mount('#app')
