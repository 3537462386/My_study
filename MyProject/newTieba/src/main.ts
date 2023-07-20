import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from './router'
import { Image as VanImage  ,Icon} from 'vant'
import 'vant/es/notify/style';
import './assets/stylus/index.styl'

const app = createApp(App)
const pinia = createPinia()




app
    .use(VanImage)
    .use(router)
    .use(pinia)
    .use(Icon)
    .mount('#app')