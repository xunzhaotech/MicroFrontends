
<!--
 * @Author: your name
 * @Date: 2020-06-24 00:10:17
 * @LastEditTime: 2020-07-25 16:51:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\theme\layouts\AnotherLayout.vue
--> 
<template>
  <div id="global-header">
    <header>
      <h4>吸顶测试</h4>
    <h4>吸顶测试</h4>
    <h4>吸顶测试</h4>
    <div class="box_fixed" id="boxFixed" :class="{'is_fixed' : isFixed}">
      我是来测试的、哇咔咔
    </div>
    <h3>快下来</h3>
    <h4>吸顶测试</h4>
    <h4>吸顶测试</h4>
    <h4>吸顶测试</h4>
    <h4>吸顶测试</h4>
    <h4>吸顶测试</h4>
    <h3>快下来</h3>
    <h4>吸顶测试</h4>
    <h4>吸顶测试</h4>
    <h4>吸顶测试</h4>
    <h4>吸顶测试</h4>
    <h4>吸顶测试</h4>
    <h3>快下来</h3>
    <h4>吸顶测试</h4>
    <h4>吸顶测试</h4>
    <h4>吸顶测试</h4>
    <h4>吸顶测试</h4>
    <h4>吸顶测试</h4>
    <h3>快下来</h3>
    <h4>吸顶测试</h4>
    <h4>吸顶测试</h4>
    <h4>吸顶测试</h4>
    <h4>吸顶测试</h4>
    <h4>吸顶测试</h4>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      isFixed: false,
      offsetTop:0
    }
  },
  mounted() {
    window.addEventListener('scroll',this.initHeight);
    this.$nextTick( () => {
      this.offsetTop = document.querySelector('#boxFixed').offsetTop;
    })
  },
  methods:{
    initHeight () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.isFixed = scrollTop > this.offsetTop ? true : false;
      },
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
}
</script>
<style>
 .box_fixed{
    width: 500px;
    height: 40px;
    border: 2px dashed pink;
    border-radius: 20px;
    margin: 0 auto;
    line-height: 40px;
    background: #eeeeee;
  }
  .is_fixed{
    position: fixed;
    top: 0;
    z-index: 999;
  }
</style>
