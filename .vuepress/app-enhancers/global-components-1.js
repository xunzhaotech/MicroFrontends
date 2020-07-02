import Vue from 'vue'
Vue.component("hello", () => import("E:\\xz-template\\MicroFrontends\\docs\\.vuepress\\components\\hello"))
Vue.component("my-default", () => import("E:\\xz-template\\MicroFrontends\\docs\\.vuepress\\components\\my-default"))
Vue.component("my-hello", () => import("E:\\xz-template\\MicroFrontends\\docs\\.vuepress\\components\\my-hello"))
Vue.component("Badge", () => import("E:\\xz-template\\MicroFrontends\\docs\\.vuepress\\theme\\global-components\\Badge"))


export default {}