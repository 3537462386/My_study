import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/text1',
        name: 'text1',
        component: () => import('@/views/text1.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router