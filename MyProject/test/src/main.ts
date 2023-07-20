import { createApp } from 'vue'
import App from './App.vue'
import {
    Tabbar, TabbarItem, Tab, Tabs, Search, TreeSelect, Badge, Notify, PullRefresh,
    ConfigProvider, Sticky, TextEllipsis, ActionSheet, NavBar, Field, CellGroup, Popup, Cell, Uploader
} from 'vant'
import { Icon } from 'vant'
import 'lib-flexible/flexible'
import router from './router'
import 'vant/lib/index.css'
import { createPinia } from 'pinia'
import { Image as VanImage } from 'vant'
const pinia = createPinia()
const app = createApp(App)
app
    .use(Uploader)
    .use(Cell)
    .use(Popup)
    .use(Field)
    .use(CellGroup)
    .use(NavBar)
    .use(ActionSheet)
    .use(TextEllipsis)
    .use(Sticky)
    .use(ConfigProvider)
    .use(PullRefresh)
    .use(Notify)
    .use(Badge)
    .use(VanImage)
    .use(TreeSelect)
    .use(Search)
    .use(pinia)
    .use(Tab)
    .use(Tabs)
    .use(router)
    .use(Icon)
    .use(Tabbar)
    .use(TabbarItem)
    .mount("#app")
