import { createRouter, createWebHashHistory } from 'vue-router'
import LayoutView from "../views/layout/index.vue";
import { useStore  } from '../store';
const routes = [
    {
        path: '/',
        name: 'root',
        redirect: '/app',
    },
    {
        path: '/app',
        name: 'app',
        component: LayoutView,
        redirect:'/app/home',
        children: [
            {
                path: '/app/home',
                name: 'home',
                component: () => import("../views/home/index.vue"),
                redirect:'/app/home/recommend',
                children: [
                    {
                        path: '/app/home/recommend',
                        name: 'recommend',
                        redirect:'/app/home/recommend/all',
                        component: () => import("../views/home/header/recommend.vue"),
                        children: [
                            {
                                path: '/app/home/recommend/all',
                                name: 'all',
                                component: () => import("../views/home/header/recommend/all.vue")
                            },
                            {
                                path: '/app/home/recommend/tv',
                                component: () => import("../views/home/header/recommend/tv.vue")
                            },
                            {
                                path: '/app/home/recommend/game',
                                component: () => import("../views/home/header/recommend/game.vue")
                            },
                            {
                                path: '/app/home/recommend/vedio',
                                component: () => import("../views/home/header/recommend/vedio.vue")
                            },
                            {
                                path: '/app/home/recommend/play',
                                component: () => import("../views/home/header/recommend/play.vue")
                            },
                            {
                                path: '/app/home/recommend/watch',
                                component: () => import("../views/home/header/recommend/watch.vue")
                            },
                            {
                                path: '/app/home/recommend/anime',
                                component: () => import("../views/home/header/recommend/anime.vue")
                            },
                            {
                                path: '/app/home/recommend/sports',
                                component: () => import("../views/home/header/recommend/sports.vue")
                            },
                            {
                                path: '/app/home/recommend/xs',
                                component: () => import("../views/home/header/recommend/xs.vue")
                            }
                        ]
                    },
                    {
                        path: '/app/home/hot',
                        name: 'hot',
                        component: () => import("../views/home/header/hot.vue")
                    },
                    {
                        path: '/app/home/attention',
                        name: 'attention',
                        component: () => import("../views/home/header/attention.vue")
                    },
                ]
            },
            {
                path: '/app/sort',
                name: 'sort',
                redirect:'/app/sort/myba',
                component: () => import("../views/sort/index.vue"),
                children: [
                    {
                        path: '/app/sort/myba',
                        name: 'myba',
                        component: () => import("../views/sort/myba.vue")
                    },
                    {
                        path: '/app/sort/spaceba',
                        name: 'spaceba',
                        component: () => import("../views/sort/spaceba.vue")
                    }
                ]
            },
            {
                path: '/app/message',
                name: 'message',
                component: () => import("../views/message/index.vue")
            },
            {
                path: '/app/my',
                name: 'my',
                component: () => import("../views/my/index.vue")
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/index.vue')
    },
    {
        path: '/search',
        name: 'search',
        redirect:'/search/rs',
        component: () => import('../views/search/index.vue'),
        children:[
            {
                path:'/search/rb',
                name:'rb',
                component: () => import("../views/search/searchsort/rb.vue")
            },
            {
                path:'/search/rs',
                name:'rs',
                component: () => import("../views/search/searchsort/rs.vue")
            },
            {
                path:'/search/yx',
                name:'yx',
                component: () => import("../views/search/searchsort/yx.vue")
            },
            {
                path:'/search/zb',
                name:'zb',
                component: () => import("../views/search/searchsort/zb.vue")
            }
        ]
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('../views/detail/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
const userStore = useStore()
router.beforeEach((to,from,next) => {
    document.title = `${to.meta.title} || 贴吧项目` 
    // const role = localStorage.getItem('my_name')   
    if(userStore.token === '') { 
        next('/login')
    } else {
        next()
    }
})

export default router