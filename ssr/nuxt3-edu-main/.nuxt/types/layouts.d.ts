import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "C:/Users/lw/Desktop/workspace/lesson_my/ssr/nuxt3-edu-main/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}