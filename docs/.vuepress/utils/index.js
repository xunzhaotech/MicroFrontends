/*
 * @Author: your name
 * @Date: 2020-06-26 21:12:41
 * @LastEditTime: 2020-06-26 22:20:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontends\docs\.vuepress\theme\util\star.js
 */ 

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
  export default Star