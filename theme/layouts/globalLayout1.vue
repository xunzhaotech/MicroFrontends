<!--
 * @Author: your name
 * @Date: 2020-06-24 00:10:17
 * @LastEditTime: 2020-07-01 22:39:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\theme\layouts\AnotherLayout.vue
--> 
<template>
  <div id="global-layout">
    <!-- <div class="stars">
        <div class="star" v-for="(item, index) in starsCount" :key="index" ref="star"></div>
    </div> -->
    <header>
      <Content slot-key="header"/>
    </header>
    <main>
      <Content/>
    </main>
    <footer>
      <Content slot-key="footer"/>
    </footer>
  </div>
    <!-- <header><h1>121212</h1></header>
    <component :is="layout" />
    <footer><h1>121212</h1></footer> -->
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  },
 data () {
    return {
      starsCount: 10000,
      distance: 2000
    }
  },
  mounted () {
      let starArr = this.$refs.star
      starArr.forEach(item => {
        let speed = 0.2 + (Math.random() * 1)
        let thisDistance = this.distance + (Math.random() * 300)
        item.style.transformOrigin = `0 0 ${thisDistance}px`
        item.style.transform = `translate3d(0, 0, -${thisDistance}px) rotateY(${(Math.random() * 360)}deg) rotateX(${(Math.random() * -50)}deg) scale(${speed}, ${speed})`
      })
    }
}
</script>
<style lang="less" scoped>
 #global-layout {
   width:100%;
   min-height: 100vh;
   background:red;
 }
</style>
