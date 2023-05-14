import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('@/views/layout/index.vue'),
        redirect:'/all',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import("@/views/home/index.vue"),
                redirect:'/all',
                children: [
                    {
                        path: '/tuijian',
                        name: 'tuijian',
                        component: () => import("@/views/home/header/tuijian.vue"),
                        redirect:'/all',
                        children: [
                            {
                                path: '/all',
                                name: 'all',
                                component: () => import("@/views/home/header/tuijian/all.vue")
                            },
                            {
                                path: '/tv',
                                name: 'tv',
                                component: () => import("@/views/home/header/tuijian/tv.vue")
                            },
                            {
                                path: '/game',
                                name: 'game',
                                component: () => import("@/views/home/header/tuijian/game.vue")
                            },
                            {
                                path: '/vedio',
                                name: 'vedio',
                                component: () => import("@/views/home/header/tuijian/vedio.vue")
                            },
                            {
                                path: '/play',
                                name: 'play',
                                component: () => import("@/views/home/header/tuijian/play.vue")
                            },
                            {
                                path: '/watch',
                                name: 'watch',
                                component: () => import("@/views/home/header/tuijian/watch.vue")
                            },
                            {
                                path: '/anime',
                                name: 'anime',
                                component: () => import("@/views/home/header/tuijian/anime.vue")
                            },
                            {
                                path: '/sports',
                                name: 'sports',
                                component: () => import("@/views/home/header/tuijian/sports.vue")
                            },
                            {
                                path: '/xs',
                                name: 'xs',
                                component: () => import("@/views/home/header/tuijian/xs.vue")
                            }
                        ]
                    },
                    {
                        path: '/remen',
                        name: 'remen',
                        component: () => import("@/views/home/header/remen.vue")
                    },
                    {
                        path: '/guanzhu',
                        name: 'guanzhu',
                        component: () => import("@/views/home/header/guanzhu.vue")
                    },
                ]
            },
            {
                path: '/sort',
                name: 'sort',
                redirect:'/myba',
                component: () => import("@/views/sort/index.vue"),
                children: [
                    {
                        path: '/myba',
                        name: 'myba',
                        component: () => import("@/views/sort/myba.vue")
                    },
                    {
                        path: '/spaceba',
                        name: 'spaceba',
                        component: () => import("@/views/sort/spaceba.vue")
                    }
                ]
            },
            {
                path: '/message',
                name: 'message',
                component: () => import("@/views/message/index.vue")
            },
            {
                path: '/my',
                name: 'my',
                component: () => import("@/views/my/index.vue")
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('@/views/search/index.vue'),
        children:[
            {
                path:'/rb',
                name:'rb',
                component: () => import("@/views/search/searchsort/rb.vue")
            },
            {
                path:'/rs',
                name:'rs',
                component: () => import("@/views/search/searchsort/rs.vue")
            },
            {
                path:'/yx',
                name:'yx',
                component: () => import("@/views/search/searchsort/yx.vue")
            },
            {
                path:'/zb',
                name:'zb',
                component: () => import("@/views/search/searchsort/zb.vue")
            }
        ]
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('@/views/detail/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to,from,next) => {
    document.title = `${to.meta.title} || 贴吧项目` 
    const role = localStorage.getItem('my_name')   
    if(role != 'admin' && to.path !== '/login') { 
        next('/login')
    } else {
        next()
    }
})

export default router