import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import '@/assets/css/index.styl'
import '@/theme/index.styl'
import router from './router'


const app = createApp(App)
app
   .use(router)
   .use(createPinia())
   .mount('#app')
