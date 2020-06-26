---
# home: true
# lang: en-US
# heroImage: /favicon.png
# bannerBg:  /favicon.png
# heroText: 微服务
# tagline: 公众号前端微服务
# actionText: 快速上手 →
# actionLink: /guide/
navbar: false
# sidebar: false
# # layout: BaseLayout
# features:
# - title: 简洁至上
#   details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
#   link: /guide/
#   imgUrl: /favicon.ico
# - title: Vue驱动
#   details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
#   link: /guide/
#   imgUrl: /favicon.ico
# - title: 高性能
#   details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
#   link: /guide/
#   imgUrl: /favicon.ico
# footer: MIT Licensed | Copyright © 2018-present Evan You
---

<!-- ::: slot base
1212121
:::
::: slot header
# Here might be a page title
:::

- A Paragraph
- Another Paragraph

::: slot footer
Here's some contact info
::: -->
<template>
  <div class="container">
    <div class="stars">
          <div class="star" v-for="(item, index) in starsCount" :key="index" ref="star"></div>
      </div>
  </div>
</template>

<script>
// import Star from './utils/index.js'
export default {
  data () {
    return {
        starsCount: 10000,
        distance: 2000,
        starDensity : .216,
        speedCoeff : .05,
        width:0,
        height:0,
        starCount:100,
        circleRadius:null,
        circleCenter: null,
        first : true,
        giantColor : '180,184,240',
        starColor : '226,225,142',
        cometColor : '226,225,224',
        canva : this.$refs.universe,
        stars : []
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
    },
  // mounted () {
  //   this.createUniverse()
  // },
   methods: {
    createUniverse() {
     this.universe = this.canva.getContext('2d');
      for (var i = 0; i < starCount; i++) {
        stars[i] = new Star();
        stars[i].reset();
      }
      this.draw();
    },
    draw() {
      alert(1)
      this.universe.clearRect(0, 0, width, height);
      var starsLength = stars.length;
      for (var i = 0; i < starsLength; i++) {
        var star = this.stars[i];
        star.move();
        star.fadeIn();
        star.fadeOut();
        star.draw();
      }

  window.requestAnimationFrame(draw);
}

   }
}
function Star() {

    this.reset = function() {
      this.giant = getProbability(3);
      this.comet = this.giant || first ? false : getProbability(10);
      this.x = getRandInterval(0, width - 10);
      this.y = getRandInterval(0, height);
      this.r = getRandInterval(1.1, 2.6);
      this.dx = getRandInterval(speedCoeff, 6 * speedCoeff) + (this.comet + 1 - 1) * speedCoeff * getRandInterval(50, 120) + speedCoeff * 2;
      this.dy = -getRandInterval(speedCoeff, 6 * speedCoeff) - (this.comet + 1 - 1) * speedCoeff * getRandInterval(50, 120);
      this.fadingOut = null;
      this.fadingIn = true;
      this.opacity = 0;
      this.opacityTresh = getRandInterval(.2, 1 - (this.comet + 1 - 1) * .4);
      this.do = getRandInterval(0.0005, 0.002) + (this.comet + 1 - 1) * .001;
    };
  
    this.fadeIn = function() {
      if (this.fadingIn) {
        this.fadingIn = this.opacity > this.opacityTresh ? false : true;
        this.opacity += this.do;
      }
    };
  
    this.fadeOut = function() {
      if (this.fadingOut) {
        this.fadingOut = this.opacity < 0 ? false : true;
        this.opacity -= this.do / 2;
        if (this.x > width || this.y < 0) {
          this.fadingOut = false;
          this.reset();
        }
      }
    };
  
    this.draw = function() {
      universe.beginPath();
  
      if (this.giant) {
        universe.fillStyle = 'rgba(' + giantColor + ',' + this.opacity + ')';
        universe.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
      } else if (this.comet) {
        universe.fillStyle = 'rgba(' + cometColor + ',' + this.opacity + ')';
        universe.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, false);
  
        //comet tail
        for (var i = 0; i < 30; i++) {
          universe.fillStyle = 'rgba(' + cometColor + ',' + (this.opacity - (this.opacity / 20) * i) + ')';
          universe.rect(this.x - this.dx / 4 * i, this.y - this.dy / 4 * i - 2, 2, 2);
          universe.fill();
        }
      } else {
        universe.fillStyle = 'rgba(' + starColor + ',' + this.opacity + ')';
        universe.rect(this.x, this.y, this.r, this.r);
      }
  
      universe.closePath();
      universe.fill();
    };
  
    this.move = function() {
      this.x += this.dx;
      this.y += this.dy;
      if (this.fadingOut === false) {
        this.reset();
      }
      if (this.x > width - (width / 4) || this.y < 0) {
        this.fadingOut = true;
      }
    };
  
    (function() {
      setTimeout(function() {
        first = false;
      }, 50)
    })()
  }
</script>

<style lang="less" scoped>
.container {
    background: radial-gradient(200% 100% at bottom center, #f7f7b6, #e96f92, #1b2947);
    background: radial-gradient(220% 105% at top center, #1b2947 10%, #75517d 40%, #e96f92 65%, #f7f7b6);
    background-attachment: scroll;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100vh;
    .stars {
      transform: perspective(500px);
      transform-style: preserve-3d;
      position: absolute;
      // left: 0;
      // top:0;
      // bottom:0;
      // right: 0;
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
/* .container {
  width: 100%;
  height: 100%;
  background-image: radial-gradient(1600px at 70% 120%, rgba(33, 39, 80, 1) 10%, #020409 100%);
} */

.content {
  width: inherit;
  height: inherit;
}

#universe {
  width: 100%;
  height: 100%;
}

#footerContent {
  font-family: sans-serif;
  font-size: 110%;
  color: rgba(200, 220, 255, .3);
  width: 100%;
  position: fixed;
  bottom: 0px;
  padding: 20px;
  text-align: center;
  z-index: 20;
}

#footer {
  position: absolute;
  bottom: 0px;
  height: 300px;
  width: 100%;
}

#scene {
  height: 100%;
  position: absolute;
  left: 50%;
  margin-left: -800px;
}

a {
  text-decoration: none;
  color: rgba(200, 220, 255, 1);
  opacity: .4;
  transition: opacity .4s ease;
}

a:hover {
  opacity: 1;
}

</style>
