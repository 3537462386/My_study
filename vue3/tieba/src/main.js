import { createApp } from 'vue'
import App from './App.vue'
import { Tabbar, TabbarItem,Tab, Tabs ,Search,TreeSelect ,Badge ,Notify,PullRefresh,ConfigProvider,Sticky,TextEllipsis    } from 'vant'
import './assets/stylus/index.styl'
import { Icon } from 'vant'
import 'lib-flexible/flexible'
import router from '@/router'
import 'vant/lib/index.css'
const app = createApp(App)
import { createPinia } from 'pinia'
import { Image as VanImage } from 'vant'

app     
    .use(TextEllipsis)
    .use(Sticky)
    .use(ConfigProvider)
    .use(PullRefresh)
    .use(Notify)
    .use(Badge)
    .use(VanImage)
    .use(TreeSelect)
    .use(Search)
    .use(createPinia())
    .use(Tab)
    .use(Tabs)
    .use(router)
    .use(Icon)
    .use(Tabbar)
    .use(TabbarItem)
    .mount("#app")
