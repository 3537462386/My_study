// index.js > index.ts
import {createRouter , createWebHistory , RouterOptions } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history:createWebHistory(),
    // 每个router 配置 满足RouterRecord 类型的约束
    routes:[
        {
            path:'/',
            name:'home',
            component:HomeView
        }
    ]
})

// 路由管理对象
export default router