// RouteRecordRaw限定路由里面的类型
import { RouteRecordRaw } from "vue-router";
import LayoutView from "../views/layout/index.vue";

// 懒加载

// 默认路由
export const accessRoutes: RouteRecordRaw[] = [
    {
        path: '/app',
        name: 'app',
        component: LayoutView,
        redirect: '/app/home',
        children: [
            {
                path: '/app/home',
                component: () => import("../views/home/index.vue"),
                redirect: '/app/home/recommend',
                children: [
                    {
                        path: '/app/home/recommend',
                        redirect: '/app/home/recommend/all',
                        component: () => import("../views/home/header/recommend.vue"),
                        children: [
                            {
                                path: '/app/home/recommend/all',
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
                        component: () => import("../views/home/header/hot.vue")
                    },
                    {
                        path: '/app/home/attention',
                        component: () => import("../views/home/header/attention.vue")
                    },
                ]
            },
            {
                path: '/app/sort',
                redirect: '/app/sort/myba',
                component: () => import("../views/sort/index.vue"),
                children: [
                    {
                        path: '/app/sort/myba',
                        component: () => import("../views/sort/myba.vue")
                    },
                    {
                        path: '/app/sort/spaceba',
                        component: () => import("../views/sort/spaceba.vue")
                    }
                ]
            },
            {
                path: '/app/message',
                component: () => import("../views/message/index.vue")
            },
            {
                path: '/app/my',
                component: () => import("../views/my/index.vue"),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },
    {
        path: '/search',
        redirect: '/search/rs',
        component: () => import('../views/search/index.vue'),
        children: [
            {
                path: '/search/rb',
                component: () => import("../views/search/searchsort/rb.vue")
            },
            {
                path: '/search/rs',
                component: () => import("../views/search/searchsort/rs.vue")
            },
            {
                path: '/search/yx',
                component: () => import("../views/search/searchsort/yx.vue")
            },
            {
                path: '/search/zb',
                component: () => import("../views/search/searchsort/zb.vue")
            }
        ]
    }
];

const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/index.vue'),
        meta: { title: '登录' }
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('../views/detail/index.vue')
    },
    // {
    //     path: '/register',
    //     name: 'register',
    //     component: () => import('../views/RegisteView/index.vue'),
    //     meta: { title: '注册' }
    // },
    {
        path: '/',
        name: 'root',
        redirect: '/app',
        meta: { title: 'Root' }
    },
    ...accessRoutes
];

export const publicRoutes = []

export default constantRoutes