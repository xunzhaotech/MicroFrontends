<template>
  <div>
    <main class="home">
      <header class="hero">
        <img v-if="data.heroImage" :src="$withBase(data.heroImage)" :alt="data.heroAlt || 'hero'" class="hero-logo"/>

        <h1 v-if="data.heroText !== null" id="main-title">
          {{ data.heroText || $title || 'Hello' }}
        </h1>

        <p v-if="data.tagline !== null" class="description">
          {{ data.tagline || $description || 'Welcome to your VuePress site' }}
        </p>

        <a-button type="primary" shape="round" size="large" ghost v-if="data.actionText && data.actionLink">
          <a v-if="isExtlink(data.actionLink)" :href="link(data.actionLink)" target="_blank">
            {{ data.actionText }}
          </a>
          <RouterLink v-else :to="link(data.actionLink)">
            {{ data.actionText }}
          </RouterLink>
        </a-button>
        <a-button type="primary" shape="round" size="large" ghost v-if="data.preactionText && data.preactionLink" class="pre-btn">
          <a v-if="isExtlink(data.preactionLink)" :href="link(data.preactionLink)" target="_blank">
            {{ data.preactionText }}
          </a>
          <RouterLink v-else :to="link(data.preactionLink)">
            {{ data.preactionText }}
          </RouterLink>
        </a-button>
      </header>
      <div id="box" class="box">
        <div id="background" class="background"></div>
	      <canvas id="meteorSky" class="meteorSky">当前浏览器不支持Canvas，请更换浏览器后再试或升级浏览器版本</canvas>
      </div>
    </main>
  </div>
</template>

<script>
import { ensureExt } from '../util'

export default {
  name: 'Home',

  data() {
    return {
      isDivider: false
    }
  },
  methods:{
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
    (function(){
      var meteorSky = document.getElementById('meteorSky');
      var w = 1000;//document.body.clientWidth;
      var h = 600;//document.body.clientHeight;

      var sky = new nightSky(meteorSky, w, h, {
        silverRiverNum : 1000,
        lineNumMax: 30,
        middleNum:7,
      });
    })();
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
function nightSky(id, w, h, options) {
	var self = this;

	// 默认配置
	var defaults = {
		num : 200,///星星数
		silverRiverNum : 800,// 银河数量
		lineNumMax: 20,//流星最多数量
		middleNum:7,///多少分的中间那一份(建议奇数，偶数自动+1)，银河的位置
	}

	///替换默认的数
	if(options) {
		for(var n in options) {
			defaults[n] = options[n]*1;
		}
	}

	self.canvas = id;
	self.context = self.canvas.getContext("2d");
	self.width = w - 2;
	self.height = h - 2;
	self.stars = []; ///星星arr
	self.lineStar = [];//流星数组
	self.allNum = defaults.num + defaults.silverRiverNum;//星星总数

	self.canvas.width = self.width;
	self.canvas.height = self.height;

	///增加星星数组内容
	self.stars = newStar(defaults.num, defaults.silverRiverNum, self.width, self.height, defaults.middleNum);

	var fnAll = setInterval(function(){
		render(self.context, self.width, self.height, self.allNum, self.stars, self.lineStar);
	},50);

	var fnLineStart = setInterval(function(){
 		lineStarbegin(defaults.lineNumMax,self.lineStar, self.width, self.height);
 	},2000);///流星时间
 	
	// next();
	// nextV2();
	// function next() {
	// 	requestAnimationFrame(function(){
	// 		next();
	// 	},50);
	// 	render(self.context, self.width, self.height, self.allNum, self.stars, self.lineStar);
	// }

	// function nextV2() {
	// 	requestAnimationFrame(function(){
	// 		nextV2();
	// 	},2000);
	// 	lineStarbegin(defaults.lineNumMax,self.lineStar, self.width, self.height);
	// }

 	///改变星星的状态
	function render(cxt, w, h, num, stars, lineStar) {
		cxt.clearRect(0,0,w,h);//清空画布

		////绘制星星
		// console.log(self.stars)
		for(var i = 0; i < num; i++) {
			drawStar(cxt, stars[i].x, stars[i].y, stars[i].r, stars[i].alpha);

			///改变星星亮度
			if(stars[i].alpha < 0 || stars[i].alpha > 1) {
				stars[i].valpha = stars[i].valpha * -1;
			}

			stars[i].alpha += stars[i].valpha;

		}
		////绘制流星
		for(var i = 0; i < lineStar.length; i++) {
			drawlineStar(cxt, lineStar[i].x, lineStar[i].y, lineStar[i].r, lineStar[i].len);
			lineStar[i].x += lineStar[i].vx;
			lineStar[i].y += lineStar[i].vy;

			///回收流星
			if(lineStar[i].x - lineStar[i].len > self.width || lineStar[i].y - lineStar[i].len > h) {
				console.log('del')
				lineStar.splice(i,1);///如果流星离开视野之内，销毁流星实例，回收内存
			}
		}
		////绘制月亮
		drawMoon(cxt, w, h);

	}

	///是否增加流星
	function lineStarbegin(lineNumMax,lineStar, w, h) {

		if(!lineStar.length || lineStar.length <= 1) {
			console.log('0');
			newdrawlineStar(lineNumMax,lineStar, w, h);
		}

	}

	////绘制星星
	function drawStar(cxt, x, y, r, alpha) {
		cxt.beginPath();
		var draw = cxt.createRadialGradient(x, y, 0, x, y, r);
		// x0	渐变的开始圆的 x 坐标
		// y0	渐变的开始圆的 y 坐标
		// r0	开始圆的半径
		// x1	渐变的结束圆的 x 坐标
		// y1	渐变的结束圆的 y 坐标
		// r1	结束圆的半径
		draw.addColorStop(0,'rgba(255,255,255,'+ alpha +')');
		draw.addColorStop(1,'rgba(255,255,255,0)');
		cxt.fillStyle  = draw;
		cxt.arc(x, y,  r, 0, Math.PI*2, true);

		// x	圆的中心的 x 坐标。
		// y	圆的中心的 y 坐标。
		// r	圆的半径。
		// sAngle	起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）。
		// eAngle	结束角，以弧度计。
		// counterclockwise	可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针。
		cxt.fill();
		cxt.closePath();			

	}

	///画流星 
	function drawlineStar(cxt, x, y, r, len) {

		///半圆
		cxt.beginPath();
		var draw = cxt.createRadialGradient(x, y, 0, x, y, r); 
		draw.addColorStop(0,'rgba(255,255,255,1)');
		draw.addColorStop(1,'rgba(255,255,255,0)');
		cxt.fillStyle  = draw;
		cxt.arc(x, y, 1, Math.PI / 4, 5 * Math.PI / 4);
		cxt.fill();
		cxt.closePath();	

		///三角形
		cxt.beginPath();
		var tra = cxt.createLinearGradient(x - len, y - len, x, y);
		tra.addColorStop(0, 'rgba(0,0,0,0)');
    	tra.addColorStop(1, 'rgba(255,255,255,1)');
		cxt.strokeStyle = tra;/////线的颜色赋值 弄了那么就原来是他们用错api了
		cxt.moveTo(x, y);
		cxt.lineTo(x - len, y - len);
		cxt.fill();
		cxt.stroke();
		cxt.closePath();
	
	}

	function drawMoon(cxt, w, h) {
		var moon = cxt.createRadialGradient(w - 300, 200, 17.5, w - 300, 200, 150);

		 //径向渐变
        moon.addColorStop(0, 'rgba(255,255,255,.9)');
        moon.addColorStop(0.01, 'rgba(70,70,80,.9)');
        moon.addColorStop(0.2, 'rgba(40,40,50,.95)');
        moon.addColorStop(0.4, 'rgba(20,20,30,.8)');
        moon.addColorStop(1, 'rgba(0,0,10,0)');

        cxt.beginPath();
        cxt.save()
        cxt.fillStyle = moon;
        cxt.fillRect(0, 0, w, h);
        cxt.restore();
        cxt.fill();
        cxt.closePath();
	}

	///制造星星
	function newStar(num,silverRiverNum,width,height,middleNum) {

		var stars = [];
		/// 恒星
		for(var i = 0; i < num; i++) {
			var x = Math.round(Math.random() * width);
			var y = Math.round(Math.random() * height);

			//避开月亮
			if(y > 100 && y <400) {
				if(x > width - 300 && x < width -250) {
				x = x - 100;
				} else if(x > width - 250 && x < width -200) {
					x = x + 100;
				}
			}

			var star = {
				x: x,
				y: y,
				r:Math.round(Math.random()*4),
				alpha:0,//Math.random(),
				valpha:(Math.random()/70)*(Math.random() > .5 ? -1 : 1),//随机+- 星星透明度改变加速度
			}

			stars.push(star);
		}


		/// 银河 让y的随机值在中间
		for(var n = 0; n < silverRiverNum; n++) {

			var x = Math.round(Math.random() * width);
			var y = getMiddleHight(height, middleNum) + (x /7); ///让它倾斜

			var star2 = {
				x: x,
				y: y,
				r:Math.round(Math.random()*4),
				alpha:0,//Math.random(),
				valpha:(Math.random()/70)*(Math.random() > .5 ? -1 : 1),//随机+- 星星透明度改变加速度
			}

			stars.push(star2);
		}

		return stars;
		// random() 方法可返回介于 0 ~ 1 之间的一个随机数
		// round 就是四舍五入
	}

	///制造流星
	function newdrawlineStar(NumMax,lineStar, w, h) {

		var lineNum = Math.round(Math.random() * NumMax);///随机生成流星数量 最多20

		for(var i = 0; i < lineNum; i++) {
			var speed = Math.round(Math.random()*30);
			var linestar = {
				x:-Math.round(Math.random() * w) / 2,
				y:-Math.round(Math.random() * h) / 2,
				r:Math.round(Math.random()*4),
				vx: speed,
				vy: speed,
				len: Math.random() * 200 + 200,
			}

			lineStar.push(linestar);
		}
	}

	///让银河在中间有点倾斜
	function getMiddleHight(h, n) {
		///n 表示将h分成几分 的中间
		///n 必须是奇数
		///过滤偶数，偶数加1
		///argh 每num分之1的高度
		///addh 该范围的最小值
		///rehieght 随机出0~argh的数 然后加上最小值
		var num = n % 2 == 0 ? n + 1 : n;
		var argh = Math.round(h / num) + 1;
		var addh = argh*Math.floor(num/2); ///除2向下取整
		var rehieght = Math.round(Math.random() * argh) + addh;
		// console.log('h, n,num,argh,addh---'+h, n,num,argh,addh);

		return rehieght;
		// ///分成五分

		// if(rehieght > h*.4 && rehieght < height*.6) {
		// 	return rehieght;
		// } else if(rehieght < h*.4 && rehieght >h*.2) {
		// 	return rehieght + h*.2;
		// } else if(rehieght < h*.2) {
		// 	return rehieght + h*.4;
		// } else if(rehieght > h*.6 && rehieght < h*.8) {
		// 	return rehieght - h*.2;
		// } else if(rehieght > h*.8 && rehieght < h) {
		// 	return rehieght - h*.4;
		// }
	}


}
</script>

<style lang="less" scoped>
@import '../styles/palette.less';
.home {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: radial-gradient(#035,#000 75%);
  .hero {
    position: relative;
    z-index: 3;
    text-align: center;
    .hero-logo {
      max-width: 100%;
      max-height: 180px;
      display: block;
      margin: 5rem auto 1.5rem;
    }

    h1 {
      font-size: 3rem;
    }

    h1,
    .description,
    .action {
      margin: 1.8rem auto;
    }

    .description {
      max-width: 35rem;
      font-size: 1.5rem;
      line-height: 1.3;
      color: #949494;
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: @accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken(@accentColor, 10%);

      &:hover {
        background-color: lighten(@accentColor, 10%);
      }
    }
  }
  .box {
    position: absolute; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .meteorSky {
      z-index: 1; 
      font-size: 40px; 
      text-align: center; 
      color: #fff; 
      line-height: 100%;
    }
  }
  .ant-btn-round.ant-btn-lg {
    font-size: 18px;
    height: 3rem;
    padding: 0 1.5rem;
  }
  .pre-btn{
    margin-left: .5rem;
  }
}



@media (max-width: @MQMobile) {
  .home {
    #box{
    width: 100%; 
    height: 100%; 
    overflow: hidden; 
    position: relative; 
    #background{
      width: 100%; 
      height: 250%; 
      position: absolute; 
      top: 0; left: 0; /*background-color: #000;*/
      z-index: -1; 
      background: radial-gradient(#035,#000 75%);}
    #meteorSky{
      z-index: 1; 
      font-size: 40px; 
      text-align: center; 
      color: #fff; 
      line-height: 100%;
    }
  }
    .hero {
      .hero-logo {
        max-height: 150px;
        margin: 2rem auto 1.2rem;
      }
    }
    
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 1rem;
      margin: .5rem auto;
      text-align: center;
    }
  }
  .footer-container {
    text-align: center;

    h2 {
      text-align: center !important;
    }
    .add-bottom{
      > div{
        &:last-child{
          > div{
            margin-bottom: 0;
          }
        }
      }
    }
  }
}

@media (max-width: @MQMobileNarrow) {
  .home {
     #box{
    width: 100%; 
    height: 100%; 
    overflow: hidden; 
    position: relative; 
    #background{
      width: 100%; 
      height: 250%; 
      position: absolute; 
      top: 0; left: 0; /*background-color: #000;*/
      z-index: -1; 
      background: radial-gradient(#035,#000 75%);}
    #meteorSky{
      z-index: 1; 
      font-size: 40px; 
      text-align: center; 
      color: #fff; 
      line-height: 100%;
    }
  }

    .hero {
      .hero-logo {
        max-height: 150px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1,
      .description,
      .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
