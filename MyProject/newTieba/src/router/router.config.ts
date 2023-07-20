// RouteRecordRaw限定路由里面的类型
import { RouteRecordRaw } from "vue-router";
import LayoutView from "@/views/layout/index.vue";

// 懒加载

// 默认路由
export const accessRoutes: RouteRecordRaw[] = [
      {
        path:'/app',
        name: 'app',
        component:LayoutView,
        redirect: '/app/home',
        children: [
            {
                path: '/app/home',
                component:()=> import("@/views/home/index.vue"),
                redirect: '/app/home/recommend',
                children: [
                    {
                        path: '/app/home/recommend',
                        component: () => import("@/views/home/recommend.vue"),
                        meta: {
                            title: '推荐'
                        },
                    },
                    {
                        path: '/app/home/hot',
                        component: () => import("@/views/home/hot.vue"),
                        meta: {
                            title: '热门'
                        },
                    },
                    {
                        path: '/app/home/attention',
                        component: () => import("@/views/home/attention.vue"),
                        meta: {
                            title: '推荐'
                        },
                    },
                ]
            },
            {
                path: '/app/sort',
                redirect: '/app/sort/myba',
                component: () => import("@/views/sort/index.vue"),
                meta: {
                    requiresAuth: true
                },
                children: [
                    {
                        path: '/app/sort/myba',
                        component: () => import("@/views/sort/myba.vue"),
                        meta: {
                            title: '我的吧'
                        },
                    },
                    {
                        path: '/app/sort/spaceba',
                        component: () => import("@/views/sort/spaceba.vue"),
                        meta: {
                            title: '吧广场'
                        },
                    }
                ]
            },
            {
                path: '/app/message',
                component: () => import("@/views/message/index.vue"),
                meta: {
                    requiresAuth: true,
                    title:'消息'
                }
            },
            {
                path: '/app/my',
                component: () => import("@/views/my/index.vue"),
                meta: {
                    requiresAuth: true,
                    title:'我的'
                }
            }
        ]
      },
      {
        path:'/app/post/:id',
        name: 'post',
        component:() => import('@/views/detail/index.vue'),
        meta: {
            title: '文章详情'
        },
      },
];

const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/user/login.vue'),
        meta: { title: '登录' }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/user/register.vue'),
        meta: { title: '注册' }
    },
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