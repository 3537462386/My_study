import {createRouter,createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue';

const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    name: 'home',
    component:Home
  },
  {
    path:'/product/:id',
    name: 'product',
    component:() => import('@/views/productDetail.vue')
  },
  {
    path:'/category',
    name: 'category',
    component:() => import('@/views/Category.vue')
  },
  {
    path:'/cart',
    name: 'cart',
    component:() => import('@/views/Cart.vue')
  },
  {
    path:'/user',
    name: 'user',
    component:() => import('@/views/User.vue')
  },
  {
    path: '/goodsSearch',
    name: 'goodsSearch',
    component: () => import('@/views/GoodsSearch.vue')
  },
  {
    path: '/resultSearch',
    name: 'resultSearch',
    component: () => import ('@/views/ResultSearch.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('@/views/productDetail.vue')
  }
];
const router = createRouter({
    routes,
    history:createWebHistory()
  })
  
  export default router