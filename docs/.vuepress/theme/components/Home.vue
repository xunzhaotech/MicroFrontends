<template>
  <div class="container">
      <canvas id="rain" ref="rain"></canvas>
    <div class="stars">
        <div class="star" v-for="(item, index) in starsCount" :key="index" ref="star"></div>
    </div>
    <div class="meteor"></div>
    <div class="meteor"></div>
    <div class="meteor"></div>
    <div class="meteor"></div> 
    <div class="meteor"></div>
    <div class="meteor"></div>
    <div class="meteor"></div>
    <div class="meteor"></div>
    <div class="meteor"></div>
    <div class="meteor"></div>
    <div class="meteor"></div>
    <div class="meteor"></div>
    <div class="meteor"></div> 
    <div class="meteor"></div>
    <div class="meteor"></div>
    <div class="meteor"></div>
    <div class="meteor"></div>
  </div>
</template>

<script>
import { ensureExt, Rain } from '../util'

export default {
  name: 'Home',
  data() {
    return {
      canvas: null,
      canvasContent: null,
      isDivider: false,
      rainArray: [],
      starsCount: 10000,
      distance: 2000,
      canvasSize: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
  },
  methods:{
    run(){
        this.moveRain()
        setTimeout(this.run, 100 / 60)
    },
    createRain() {
        const rain = new Rain(this.canvasContent, this.canvasSize.width, this.canvasSize.height)
        rain.init() //基本配置
        rain.draw()
        this.rainArray.push(rain)
    },
    moveRain() {
        this.canvasContent.fillStyle = "rgba(0, 0, 0, 0.05)"
        this.canvasContent.fillRect(0, 0, this.canvasSize.width, this.canvasSize.height)
            for (var k = 0; k < this.rainArray.length; k++) {
                this.rainArray[k].move();
            }
    },
    isExtlink(path) {
      const Reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/
      return Reg.test(path)
    },
    link(url) {
      url = typeof url === 'undefined' ? '' : url
      let _url = ensureExt(url)
      _url = _url.length === 5 && _url === '.html' ? '' : _url
      return _url
    }
  },
  mounted() {
    if (this.data.footerWrap && this.data.footerWrap.length) {
      this.isDivider = true
    }
    this.canvas = this.$refs.rain
    // 获取浏览器高度和宽度
   
    window.onresize =()  =>{
      this.canvasSize.width =  window.innerWidth
      this.canvasSize.height = window.innerHeight
      this.canvas.height = this.canvasSize.height
      this.canvas.width = this.canvasSize.width
    }
    this.canvasContent = this.canvas.getContext("2d") 
    this.createRain()
    for (var i = 0; i < 30; i++) {
        setTimeout(this.createRain, 200 * i)
    }
    this.run()
    let starArr = this.$refs.star
    starArr.forEach(item => {
    let speed = 0.2 + (Math.random() * 1)
    let thisDistance = this.distance + (Math.random() * 300)
    item.style.transformOrigin = `0 0 ${thisDistance}px`
    item.style.transform = `translate3d(0, 0, -${thisDistance}px) rotateY(${(Math.random() * 360)}deg) rotateX(${(Math.random() * -50)}deg) scale(${speed}, ${speed})`
    })
  },
  computed: {
    data() {
      return this.$page.frontmatter
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    },

    footerColumn() {
      if (this.data.footerWrap && this.data.footerWrap.length) {
        if (this.data.footerColumn !== null || this.data.footerColumn > 0) {
          if (this.data.footerColumn > 4) {
            console.error('The footer column supports a maximum of 4 columns')
            return 4
          } else {
            let _footerColumn = this.data.footerColumn
            _footerColumn = 24 / _footerColumn
            return _footerColumn
          }
        } else {
          console.error('footerColumn needs to be set and cannot be 0 or empty')
        }
      }
    }
  }
}
</script>

<style lang="less"  scoped>
.container{
    position: relative;
    width: 100%;
    height: 100%;
    -webkit-transform: rotate(45deg);
            transform: rotateZ(45deg);
    -webkit-animation: sky 200000ms linear infinite;
            animation: sky 200000ms linear infinite;
    .stars {
      width: 100%;
      height: 100vh;
      transform: perspective(500px);
      transform-style: preserve-3d;
      position: absolute;
      perspective-origin: 50% 100%;
      left: 50%;
      animation: rotate 90s infinite linear;
      bottom: 0;
      .star {
            width: 3px;
            height: 3px;
            background: #f7f7b8;
            position: absolute;
            top: 0;
            left: 0;
            backface-visibility: hidden;
      }
    }
    .meteor{
        position: absolute;
        left: 50%;
        top: 50%;
        height: 2px;
        background: linear-gradient(-45deg, #5f91ff, rgba(0, 0, 255, 0));
        border-radius: 999px;
        -webkit-filter: drop-shadow(0 0 6px #699bff);
                filter: drop-shadow(0 0 6px #699bff);
        -webkit-animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
                animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite; 
        &::before, &::after{
            content: '';
            position: absolute;
            top: calc(50% - 1px);
            right: 0;
            height: 2px;
            background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #5f91ff, rgba(0, 0, 255, 0) );
            -webkit-transform: translateX(50%) rotateZ(45deg);
                    transform: translateX(50%) rotateZ(45deg);
            border-radius: 100%;
            -webkit-animation: shining 3000ms ease-in-out infinite;
                    animation: shining 3000ms ease-in-out infinite;
        }
        &::after{
        -webkit-transform: translateX(50%) rotateZ(-45deg);
                transform: translateX(50%) rotateZ(-45deg);
        }
        /* 1 */
        &:nth-child(1){
            top: calc(50% - 185px);
            left: calc(50% - 150px);
            -webkit-animation-delay: 8888ms;
                    animation-delay: 8888ms;
        }
        &:nth-child(1)::before, .meteor:nth-child(1)::after, .meteor:nth-child(1)::after{
            -webkit-animation-delay: 8888ms;
                    animation-delay: 8888ms;
        }
        /* 2 */
        &:nth-child(2){
            top: calc(50% - 50px);
            left: calc(50% - 180px);
            -webkit-animation-delay: 9288ms;
                    animation-delay: 9288ms;
        }
       &:nth-child(2)::before, .meteor:nth-child(2)::after, .meteor:nth-child(2)::after{
            -webkit-animation-delay: 9288ms;
                    animation-delay: 9288ms;
        }
        
       &:nth-child(3){
            top: calc(50% - 145px);
            left: calc(50% - 135px);
            -webkit-animation-delay: 8600ms;
                    animation-delay: 8600ms;
        }
       &:nth-child(3)::before, .meteor:nth-child(3)::after, .meteor:nth-child(3)::after{
            -webkit-animation-delay: 8600ms;
                    animation-delay: 8600ms;
        }
        
       &:nth-child(4){
            top: calc(50% - 78px);
            left: calc(50% - 155px);
            -webkit-animation-delay: 3288ms;
                    animation-delay: 3288ms;
        }
       &:nth-child(4)::before, .meteor:nth-child(4)::after, .meteor:nth-child(4)::after{
            -webkit-animation-delay: 3288ms;
                    animation-delay: 3288ms;
        }
        
      &:nth-child(5){
            top: calc(50% - 183px);
            left: calc(50% - 8px);
            -webkit-animation-delay: 5588ms;
                    animation-delay: 5588ms;
        }
      &:nth-child(5)::before, .meteor:nth-child(5)::after, .meteor:nth-child(5)::after{
            -webkit-animation-delay: 5588ms;
                    animation-delay: 5588ms;
        }
        
      &:nth-child(6){
            top: calc(50% - 30px);
            left: calc(50% - 195px);
            -webkit-animation-delay: 9388ms;
                    animation-delay: 9388ms;
        }
       &:nth-child(6)::before, .meteor:nth-child(6)::after, .meteor:nth-child(6)::after{
            -webkit-animation-delay: 9388ms;
                    animation-delay: 9388ms;
        }
        
      &:nth-child(7){
            top: calc(50% - 95px);
            left: calc(50% - 70px);
            -webkit-animation-delay: 2588ms;
                    animation-delay: 2588ms;
        }
       &:nth-child(7)::before, .meteor:nth-child(7)::after, .meteor:nth-child(7)::after{
            -webkit-animation-delay: 2588ms;
                    animation-delay: 2588ms;
        }
        
      &:nth-child(8){
            top: calc(50% - 60px);
            left: calc(50% - 70px);
            -webkit-animation-delay: 5288ms;
                    animation-delay: 5288ms;
        }
     &:nth-child(8)::before, .meteor:nth-child(8)::after, .meteor:nth-child(8)::after{
            -webkit-animation-delay: 5288ms;
                    animation-delay: 5288ms;
        }
        
       &:nth-child(9){
            top: calc(50% - 75px);
            left: calc(50% - 250px);
            -webkit-animation-delay: 888ms;
                    animation-delay: 888ms;
        }
       &:nth-child(9)::before, .meteor:nth-child(9)::after, .meteor:nth-child(9)::after{
            -webkit-animation-delay: 888ms;
                    animation-delay: 888ms;
        }
        
      &:nth-child(9){
            top: calc(50% - 76px);
            left: calc(50% - 240px);
            -webkit-animation-delay: 2388ms;
                    animation-delay: 2388ms;
        }
      &:nth-child(9)::before, .meteor:nth-child(9)::after, .meteor:nth-child(9)::after{
            -webkit-animation-delay: 2388ms;
                    animation-delay: 2388ms;
        }
        
     &:nth-child(10){
            top: calc(50% - 85px);
            left: calc(50% - 6px);
            -webkit-animation-delay: 3588ms;
                    animation-delay: 3588ms;
        }
      &:nth-child(10)::before, .meteor:nth-child(10)::after, .meteor:nth-child(10)::after{
            -webkit-animation-delay: 3588ms;
                    animation-delay: 3588ms;
        }
        
      &:nth-child(11){
            top: calc(50% - 135px);
            left: calc(50% - 260px);
            -webkit-animation-delay: 2888ms;
                    animation-delay: 2888ms;
        }
      &:nth-child(11)::before, .meteor:nth-child(11)::after, .meteor:nth-child(11)::after{
            -webkit-animation-delay: 2888ms;
                    animation-delay: 2888ms;
        }
        
       &:nth-child(12){
            top: calc(50% - 15px);
            left: calc(50% - 8px);
            -webkit-animation-delay: 388ms;
                    animation-delay: 388ms;
        }
      &:nth-child(12)::before, .meteor:nth-child(12)::after, .meteor:nth-child(12)::after{
            -webkit-animation-delay: 388ms;
                    animation-delay: 388ms;
        }
        
      &:nth-child(13){
            top: calc(50% - 155px);
            left: calc(50% - 50px);
            -webkit-animation-delay: 7288ms;
                    animation-delay: 7288ms;
        }
       &:nth-child(13)::before, .meteor:nth-child(13)::after, .meteor:nth-child(13)::after{
            -webkit-animation-delay: 7288ms;
                    animation-delay: 7288ms;
        }
        
       &:nth-child(14){
            top: calc(50% - 28px);
            left: calc(50% - 80px);
            -webkit-animation-delay: 8888ms;
                    animation-delay: 8888ms;
        }
        &:nth-child(14)::before, .meteor:nth-child(14)::after, .meteor:nth-child(14)::after{
            -webkit-animation-delay: 8888ms;
                    animation-delay: 8888ms;
        }
        
      &:nth-child(15){
            top: calc(50% - 35px);
            left: calc(50% - 200px);
            -webkit-animation-delay: 7588ms;
                    animation-delay: 7588ms;
        }
       &:nth-child(15)::before, .meteor:nth-child(15)::after, .meteor:nth-child(15)::after{
            -webkit-animation-delay: 7588ms;
                    animation-delay: 7588ms;
        }
        
      &:nth-child(16){
            top: calc(50% - 40px);
            left: calc(50% - 250px);
            -webkit-animation-delay: 1888ms;
                    animation-delay: 1888ms;
        }
      &:nth-child(16)::before, .meteor:nth-child(16)::after, .meteor:nth-child(16)::after{
            -webkit-animation-delay: 1888ms;
                    animation-delay: 1888ms;
        }
    }
} 
@keyframes rotate {
    0% {
        transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
    }
    100% {
        transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
    }
}
@-webkit-keyframes tail{
    0%{
        width: 0;
    }
    30%{
        width: 100px;
    }
    100%{
        width: 0;
    }
}
@keyframes tail{
    0%{
        width: 0;
    }
    30%{
        width: 100px;
    }
    100%{
        width: 0;
    }
}
 
@-webkit-keyframes shining{
    0%{
        width: 0;
    }
    50%{
        width: 30px;
    }
    1000%{
        width: 0;
    }
}
@keyframes shining{
    0%{
        width: 0;
    }
    50%{
        width: 30px;
    }
    1000%{
        width: 0;
    }
}
 
@-webkit-keyframes shooting{
    0%{
        -webkit-transform: translateX(0);
                transform: translateX(0);
    }
    100%{
        -webkit-transform: translateX(300px);
                transform: translateX(300px);
    }
}
@keyframes shooting{
    0%{
       -webkit-transform: translateX(0);
               transform: translateX(0); 
    }
    100%{
        -webkit-transform: translateX(300px);
                transform: translateX(300px);
    }
}
 
@-webkit-keyframes sky{
    0%{
        -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
    }
    100%{
        -webkit-transform: rotate(405deg);
                transform: rotate(405deg);
    }
}
@keyframes sky{
    0%{
        -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
    }
    100%{
        -webkit-transform: rotate(405deg);
                transform: rotate(405deg);
    }
}
</style>
