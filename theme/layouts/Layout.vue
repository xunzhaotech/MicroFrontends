<!--
   - Navbar 显示头部组件
   - Sidebar 侧边栏
   - Home 默认为主页
   - Page 文章内容组件
-->
<template>
  <div
    class="theme-container"
    :class="pageClasses"
  >
    <!-- 主题头部, shouldShowNavbar判断是否显示头部-->
    <Navbar
      v-if="shouldShowNavbar"
    />
    <!-- 字移动端点击内容部分目录会隐藏 -->
    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    />
    <!-- 侧边栏 -->
    <Sidebar
      :items="sidebarItems"
    >
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>
    <!-- 内容显示部分，可以通过md文件中的layout:xxx.vue作为布局 -->
    <div class="custom-layout" v-if="$page.frontmatter.layout">
      <component :is="$page.frontmatter.layout"></component>
    </div>
    <!-- 如果md文件中有home:true 使用该组件 -->
    <!-- <Home v-if="$page.frontmatter.home" /> -->
    <!-- 一般md文件使用的组件 -->
    <Page
      v-else
      :sidebar-items="sidebarItems"
    >
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
      </template>
    </Page>

    <a-back-top v-if="$themeConfig.backToTop"/>
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems } from '../util'

export default {
  name: 'Layout',

  components: {
    Home,
    Page,
    Sidebar,
    Navbar
  },

  // data () {
  //   return {
  //     isSidebarOpen: false
  //   }
  // },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          // 'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  // mounted () {
  //   this.$router.afterEach(() => {
  //     this.isSidebarOpen = false
  //   })
  // },

  // methods: {
    // toggleSidebar (to) {
    //   this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    //   this.$emit('toggle-sidebar', this.isSidebarOpen)
    // },

    // side swipe
    // onTouchStart (e) {
      // this.touchStart = {
      //   x: e.changedTouches[0].clientX,
      //   y: e.changedTouches[0].clientY
      // }
    // },

    // onTouchEnd (e) {
      // const dx = e.changedTouches[0].clientX - this.touchStart.x
      // const dy = e.changedTouches[0].clientY - this.touchStart.y
      // if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      //   if (dx > 0 && this.touchStart.x <= 80) {
      //     this.toggleSidebar(true)
      //   } else {
      //     this.toggleSidebar(false)
      //   }
      // }
    // }
  // }
}
</script>