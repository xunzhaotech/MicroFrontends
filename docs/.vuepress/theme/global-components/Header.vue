<!--
 * @Author: your name
 * @Date: 2020-07-25 15:27:10
 * @LastEditTime: 2020-07-25 15:43:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\theme\global-components\Header.vue
--> 
<!--
 * @Author: your name
 * @Date: 2020-06-24 00:10:17
 * @LastEditTime: 2020-07-25 15:22:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\theme\layouts\AnotherLayout.vue
--> 
<template>
  <div id="global-header">
    <header><h1>王企鹅群二</h1></header>
  </div>
</template>

<script>
export default {
 name: 'GlobalHeader',
 data () {
    return {
      starsCount: 10000,
      distance: 2000
    }
  },
  mounted () {
    //   let starArr = this.$refs.star
    //   starArr.forEach(item => {
    //     let speed = 0.2 + (Math.random() * 1)
    //     let thisDistance = this.distance + (Math.random() * 300)
    //     item.style.transformOrigin = `0 0 ${thisDistance}px`
    //     item.style.transform = `translate3d(0, 0, -${thisDistance}px) rotateY(${(Math.random() * 360)}deg) rotateX(${(Math.random() * -50)}deg) scale(${speed}, ${speed})`
    //   })
    }
}
</script>
<style>
 /* body {
    background: radial-gradient(200% 100% at bottom center, #f7f7b6, #e96f92, #1b2947);
    background: radial-gradient(220% 105% at top center, #1b2947 10%, #75517d 40%, #e96f92 65%, #f7f7b6);
    background-attachment: fixed;
    overflow-x: hidden;
  }
  @keyframes rotate {
    0% {
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
    }
    100% {
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
    }
  }
.stars {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  perspective-origin: 50% 100%;
  left: 50%;
  animation: rotate 90s infinite linear;
  bottom: 0;
}
.star {
  width: 3px;
  height: 3px;
  background: #f7f7b8;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
} */
</style>
