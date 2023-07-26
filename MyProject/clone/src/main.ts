import { createApp } from 'vue'
import App from './App.vue'
import './assets/stylus/index.styl'
import { createPinia } from 'pinia'
import 'lib-flexible/flexible'
import { router } from './router'
import { Image as VanImage  ,Icon} from 'vant'
import 'vant/es/notify/style';

const app = createApp(App)
const pinia = createPinia()
app
    .use(pinia)
    .use(VanImage)
    .use(router)
    .use(Icon)
    .mount("#app")
