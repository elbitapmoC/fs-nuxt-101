import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "products"
declare module "/Users/elbitapmoc/Desktop/dev/vue/fs-nuxt-101/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}