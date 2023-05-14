import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/lw/Desktop/workspace/lesson_my/ssr/nuxt3-edu-main/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}