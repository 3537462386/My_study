import { createRouter, createWebHistory } from 'vue-router'
import routes from './router.config'
// RouteRecordRaw限定路由里面的类型
// const routes:RouteRecordRaw[]=[]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} || 贴吧项目` 
  }
  // 检查用户是否已登录
  const isLoggedIn = localStorage.getItem('tiebatoken')
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})