// 路由如何介绍？
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';


Vue.use(Router); // install  this.$router $route

export default new Router({
   routes:[ 
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/admin',
            name: 'Admin',
            component: () => import('../pages/admin/Index.vue'),
            children: [
                {
                    path: 'new',
                    name: 'New',
                    component: () => import('@/pages/admin/New')
                },
                {
                    path: '',
                    name: 'Products',
                    component: () => import('@/pages/admin/Products')
                },
                {
                    path: 'edit/:id',
                    name: 'Edit',
                    component: import('@/pages/admin/Edit')
                },
            ]
        },
        {
            path: '/cart',
            name: 'Cart',
            component: () => import('../pages/Cart.vue')
        },
    ]
})