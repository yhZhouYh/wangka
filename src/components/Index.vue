<template>
  <div class="container" ref="container">
    <div class="loading-box" v-show="showloading">
      <svg class="lds-spookyghost" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">      <g transform="translate(50 50)">
      <g transform="scale(1 -1)">
      <g transform="translate(-50 -50)">
      <g transform="rotate(311.205 50 50)">
        <animateTransform attributeName="transform" type="rotate" values="-2 50 50;359 50 50" keyTimes="0;1" dur="1.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1"></animateTransform>
        <circle cx="50" cy="50" r="39.891" stroke="#f2f2f2" stroke-width="14.4" fill="none" stroke-dasharray="0 300">
          <animate attributeName="stroke-dasharray" values="10 300;60.15421082128821 300;4 300" keyTimes="0;0.5;1" dur="1.8s" repeatCount="indefinite" calcMode="linear" keySplines="0 1 1 0;0 1 1 0"></animate>
        </circle>
        <circle cx="50" cy="50" r="39.891" stroke="#f2f2f2" stroke-width="7.2" fill="none" stroke-dasharray="0 300">
          <animate attributeName="stroke-dasharray" values="10 300;60.15421082128821 300;4 300" keyTimes="0;0.5;1" dur="1.8s" repeatCount="indefinite" calcMode="linear" keySplines="0 1 1 0;0 1 1 0"></animate>
        </circle>
        <circle cx="50" cy="50" r="32.771" stroke="#000000" stroke-width="1" fill="none" stroke-dasharray="0 300">
          <animate attributeName="stroke-dasharray" values="10 300;49.41750376837973 300;4 300" keyTimes="0;0.5;1" dur="1.8s" repeatCount="indefinite" calcMode="linear" keySplines="0 1 1 0;0 1 1 0"></animate>
        </circle>
        <circle cx="50" cy="50" r="47.171" stroke="#000000" stroke-width="1" fill="none" stroke-dasharray="0 300">
          <animate attributeName="stroke-dasharray" values="10 300;72.03697087422624 300;4 300" keyTimes="0;0.5;1" dur="1.8s" repeatCount="indefinite" calcMode="linear" keySplines="0 1 1 0;0 1 1 0"></animate>
        </circle>
      </g></g> </g></g>
      <g transform="rotate(47.6625 50 50)">
        <animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" keyTimes="0;1" dur="1.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1"></animateTransform>
        <path fill="#f2f2f2" stroke="#000000" d="M82.8,50c0,0.9,0.7,2.6,1.8,3.7c0.3,0.3,0.8,0.6,1,1c0.2,0.5,0.2,1-0.1,1.5c-0.3,0.5-0.8,0.9-1.1,1.3 c-0.5,0.5-0.8,1.1-0.9,1.7c-0.2,0.6-0.2,1.2,0.2,1.8c0.6,1,2,1.7,2,2.8c-0.1,0.9-1,1.5-1.4,2.2c-0.3,0.6-0.4,1.2-0.2,1.9 c0.2,0.7,0.5,1.3,1,1.8c1,1,2.4,1.4,3.9,1.5c-1.1-1-1.2-2.7-0.5-4c0.7-1.2,2.2-1.9,2.5-3.3c0.2-1.2-0.4-2.5,0.1-3.6 c0.7-1.5,3.3-1.3,4.1-2.9c0.3-0.9,0-1.9,0.3-2.8c0.2-0.7,0.6-1.1,1-1.5c0.4-0.4,0.8-0.9,0.9-1.6c0.1-0.5,0.1-0.9,0.1-1.6"></path>

      </g>
      <g transform="rotate(17.5114 50 50)">
        <animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" keyTimes="0;1" dur="1.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1" begin="-0.18000000000000002s"></animateTransform>

        <path fill="#f2f2f2" stroke="#000000" d="M82.8,50c-0.1-3.1-0.4-6.2-1.3-9.2c-0.1-0.4-0.2-0.8-0.2-1.2c-0.1-0.4-0.1-0.8,0-1.2c0.1-0.8,0.3-1.6,0.7-2.4 c0.8-1.5,2-3,3.8-3.9l0,0c1.8-0.9,3.8-1,5.6-0.2c0.9,0.4,1.7,1,2.4,1.8c0.3,0.4,0.7,0.8,1,1.3c0.2,0.5,0.4,1,0.6,1.6 c1.4,4.3,1.9,8.8,1.9,13.3"></path>
        <path fill="#ff7bac" d="M93.6,35.5c0.1,0.4-0.3,0.8-1,1c-0.6,0.2-1.2,0.1-1.3-0.3c-0.1-0.3,0.3-0.8,0.9-1S93.5,35.1,93.6,35.5z"></path>
        <path fill="#ff7bac" d="M82.3,39.3c0.1,0.3,0.6,0.3,1.3,0.1c0.6-0.2,1.1-0.6,1-0.9c-0.1-0.3-0.7-0.3-1.3-0.1 C82.6,38.6,82.2,39,82.3,39.3z"></path>
        <path fill="#000000" d="M88.9,37.5c0.1,0.3-0.2,0.7-0.7,0.8c-0.5,0.1-0.9,0-1-0.3c-0.1-0.3,0.2-0.7,0.7-0.8C88.4,37,88.9,37.2,88.9,37.5z"></path>
        <path fill="none" stroke="#000000" d="M86.2,39.6c0.2,0.6,0.8,0.9,1.4,0.7c0.6-0.2,0.9-0.9,0.6-2.1c0.3,1.2,1,1.7,1.6,1.5c0.6-0.2,1-0.8,0.8-1.4"></path>
        <path fill="#f2f2f2" stroke="#000000" d="M82.5,45.9c0,0.5,0.1,0.9,0.5,1.3c0.4,0.4,1,0.6,1.6,0.3c0.3-0.1,0.5-0.3,0.7-0.4c0.5-0.2,1.2,0.1,1.5,0.6 c0.3,0.5,0.3,1,0.3,1.6c0.6-0.6,1-1.4,1.3-2.2c0.2-0.7,0.4-1.5,0.2-2.2c-0.2-0.7-0.8-1.3-1.5-1.5c-0.9-0.2-1.8,0.2-2.5,0.7"></path>
        <path fill="#f2f2f2" stroke="#000000" d="M96.8,44.1c0.1,0.7,0.1,1.4-0.2,2c-0.3,0.6-0.9,1-1.5,0.7c-0.3-0.1-0.5-0.4-0.8-0.4c-0.6-0.2-1.2,0.3-1.4,0.9 c-0.2,0.6-0.1,1.2-0.1,1.9c-0.6-0.7-1.2-1.5-1.6-2.3c-0.4-0.7-0.6-1.5-0.6-2.2c0-0.8,0.3-1.6,0.9-2c0.7-0.5,1.7-0.5,2.6-0.1"></path>
        <path fill="#b5b5b5" d="M85.3,37.2c0.1,0.3,1.2,0.2,2.5-0.3c1.3-0.4,2.2-1.1,2.1-1.4c-0.1-0.3-1.2-0.2-2.5,0.3 C86.1,36.3,85.2,36.9,85.3,37.2z"></path>
        <path fill="#000000" d="M91.5,35c0.3,0.7,0,1.4-0.7,1.6c-0.6,0.2-1.3-0.1-1.6-0.8c-0.2-0.6,0.1-1.3,0.7-1.6C90.6,33.9,91.3,34.3,91.5,35z"></path>
        <path fill="#000000" d="M85.9,37c0.2,0.6-0.1,1.2-0.7,1.4c-0.6,0.2-1.3-0.1-1.5-0.6c-0.2-0.5,0.1-1.2,0.7-1.4C85,36.2,85.7,36.4,85.9,37z"></path>
        <path fill="none" stroke="#000000" d="M89.7,29c0.4,0.7-1.4,2.2-3.8,3.4c-2.5,1.2-4.7,1.7-4.9,1.2c-0.3-0.5,1.4-2,3.8-3.4S89.4,28.4,89.7,29z"></path>

      </g></svg>
    </div>
    <div class="index" v-show="showIndex">
      <img src="../assets/logo.png" alt="" class="logo">
    <transition appear appear-class="img-appear" appear-to-class="img-appear-to" appear-active-class="fade-In-active">
        <img src="../assets/zhaobei.png" alt="" class="bei-img">
    </transition>
    <transition appear appear-class="img-appear" appear-to-class="img-appear-to" appear-active-class="fade-In-active fade-delay1">
        <img src="../assets/index_word.png" alt="" class="index-word">
    </transition>
    <transition appear appear-class="img-appear" appear-to-class="img-appear-to" appear-active-class="fade-In-active fade-delay2">    
    <img src="../assets/index_cup.png" alt="" class="index-cup">
    </transition>
    <transition appear appear-class="pipe-appear" appear-to-class="pipe-appear-to" appear-active-class="pipe-In-active fade-delay3">        
    <img src="../assets/pipe.png" alt="" class="pipe">
    </transition>
    <transition appear appear-class="pipe-appear" appear-to-class="pipe-appear-to" appear-active-class="fade-In-active fade-delay3">        
    <div class="upload-btn">
        <span>上传图片</span>
        <input type="file" class="upload-input" @change="upload" accept="image/*">
    </div>
    </transition>
    </div>
    <img :src="url" alt="" style="display:none"ref="img">
    <div class="crop-btns" v-show="showBtns">
      <span class="cancel" @click="cancel">取消</span>
      <span class="ensure" @click="ensure">确定</span>
    </div>
    <navbar mode="foot" direction="bottom" :isExpand.sync="isExpand" mask>
      <div class="chooseBox">
        <div>
          <span>选择文案</span>
          <span class="ensureWord" @click="ensureWord">确认</span>
        </div> 
      <div class="chooseWord">
        <div class="imgbox" :style="{backgroundImage: 'url('+ item +')'}" v-for="(item, index) in words" :key="index" :class="{active: checkedWord == index}" @click="checkWord(index)">
        </div>
      </div>
      </div>
    </navbar>
  </div>
</template>
<script>
import ImageUtil from "../assets/uploadUtil";
// import '../assets/alloyfinger'
// import '../assets/css3transform'
import crop from "../assets/crop";
import Vue from "vue";
import Cropper from "cropperjs";
import Navbar from "./Navbar";
export default {
  name: "index",
  components: {
    Navbar
  },
  data() {
    return {
      url: "",
      showIndex: true,
      cropper: null,
      showBtns: false,
      isiOS: false,
      showloading: false,
      words: [
        require("../assets/word1.png"),
        require("../assets/word2.png"),
        require("../assets/word3.png"),
        require("../assets/word4.png"),
        require("../assets/word5.png")
      ],
      cups: [
        require("../assets/cup1.png"),
        require("../assets/cup2.png"),
        require("../assets/cup3.png"),
        require("../assets/cup4.png"),
        require("../assets/cup5.png")
      ],
      isExpand: false,
      checkedWord: 0,
      cropperCanvas: null,
      position: {
        left: {
          cup: {
            x: 82.5,
            y: 100
          },
          word: {
            x: 423,
            y: 72
          }
        },
        right: {
          cup: {
            x: 410,
            y: 138
          },
          word: {
            x: 33,
            y: 57
          }
        }
      }
    };
  },
  mounted() {
    var u = navigator.userAgent;
    this.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  },
  methods: {
    getCup() {
      let seed = Math.floor(Math.random() * 6);
    },
    checkWord(index) {
      this.checkedWord = index;
    },
    ensureWord() {
      let seed = Math.floor(Math.random() * 6);
      this.isExpand = false;
      this.showloading = true;
      var defaultPos = this.position.left; //确定文字和cup位置
      var bg = require("../assets/cup_bg.png");
      if (this.checkedWord == 2 || this.checkedWord == 4) {
        defaultPos = this.position.right;
      }
      document.getElementById('audio').play()
      this.ImagesLoaded(
        [bg, this.cups[seed], this.words[this.checkedWord]],
        (index, imgs) => {
          if (index == 3) {
            let canvas = document.createElement("canvas");
            let ctx = canvas.getContext("2d");
            canvas.width = imgs[0].width;
            canvas.height = imgs[0].height;
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(this.cropperCanvas, 221, 424);
            ctx.drawImage(imgs[0], 0, 0);
            ctx.drawImage(imgs[1], defaultPos.cup.x, defaultPos.cup.y);
            ctx.drawImage(imgs[2], defaultPos.word.x, defaultPos.word.y);
            var urlSrc = canvas.toDataURL("image/jpeg", 1);
            Vue.prototype.$urlSrc = urlSrc;
            this.$router.push({ name: "Result" });
          }
        }
      );
    },
    cancel() {
      // document.getElementById('audio').play()
      if (this.cropper != null) {
        this.cropper.destroy();
        this.showBtns = false;
        this.cropper = null;
      }
    },
    ImagesLoaded(source = [], cb) {
      let successIndex = 0;
      let imgs = {};
      source.map((item, index) => {
        var img = new Image();
        img.onload = () => {
          successIndex++;
          imgs[index] = img;
          cb(successIndex, imgs);
        };
        img.src = item;
      });
    },
    ensure() {
      if (this.cropper != null) {
        this.cropperCanvas = this.cropper.getCroppedCanvas({
          width: 280,
          height: 670
        });
        this.isExpand = true;
        // var canavses = document.createElement("canvas");
        // var ctx = canavses.getContext("2d");
        // var img = new Image();
        // img.onload = () => {
        //   canavses.width = img.width;
        //   canavses.height = img.height;
        //   ctx.fillStyle = "#fff";
        //   ctx.fillRect(0, 0, canavses.width, canavses.height);
        //   ctx.drawImage(canvas, 221, 424, canvas.width, canvas.height);
        //   ctx.drawImage(img, 0, 0, img.width, img.height);
        //   var urlSrc = canavses.toDataURL("image/jpeg", 1);
        //   Vue.prototype.$urlSrc = urlSrc;
        //   this.$router.push({ name: "Result" });
        // };
        // img.src = require("../assets/cup_bg.png");
        // ctx.drawImage();
        // console.log(this)
        // this.$router.push({ name: "Result" });
      }
    },
    upload(e) {
      let file = e.target.files[0];
      if (!ImageUtil._validImageSizeAndType(file)) {
        alert('请选在小于10M的照片')
        return;
      }
      this.url = ImageUtil.getObjectURL(file);
      // let arrayBuffer = ImageUtil.getArrayBuffer(file, res => {

      //   this.url = ImageUtil.getObjectURL(file);
      //   var that = this;
      //   new crop({
      //     image_src: this.url,
      //     circle: false, // optional parameters , the default value is false
      //     width: fontSize * 3.35, // crop width
      //     height: fontSize * 7.52, // crop height
      //     output: 1, // output resolution --> 400*200
      //     ok: function(base64, canvas) {
      //       console.log(canvas);
      //       Vue.prototype.$base64 = base64;
      //       that.$router.push({ name: "Result" });
      //     },
      //     cancel: function() {},
      //     ok_text: "yes", // optional parameters , the default value is ok
      //     cancel_text: "no", // optional parameters , the default value is cancel
      //     arrayBuffer: res
      //   });
      // });

      this.$nextTick(() => {
        this.show = false;
        this.showBtns = true;
        this.cropper = new Cropper(this.$refs.img, {
          aspectRatio: 280 / 670,
          viewMode: 1,
          dragMode: "move",
          cropBoxMovable: false,
          cropBoxResizable: false
          // crop: function(e) {
          //   console.log(e.detail.x);
          //   console.log(e.detail.y);
          //   console.log(e.detail.width);
          //   console.log(e.detail.height);
          //   console.log(e.detail.rotate);
          //   console.log(e.detail.scaleX);
          //   console.log(e.detail.scaleY);
          // }
        });
      });
      // cropper.getCroppedCanvas();
    }
  }
};
</script>
<style lang="less">
@import "~cropperjs/dist/cropper.css";
.index img {
  position: absolute;
  left: 0;
  right: 0;
  //   top: 0;
  margin: 0 auto;
}
.logo {
  width: 2.3rem;
}
.zhaobei {
  position: relative;
  padding-top: 2.23rem;
}
.bei-img {
  width: 4.48rem;
  top: 1.8rem;
  z-index: 10;
}
.index-word {
  width: 4.52rem;
  top: 4rem;
  z-index: 15;
}
.img-appear {
  //   transform: translate3d(0, -10px, 0);
  opacity: 0;
}
.img-appear-to {
  //   transform: translate3d(0, 0, 0);
  opacity: 1;
}
.pipe-appear {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}
.pipe-appear-to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
.pipe-In-active {
  transition-property: all;
  transition-duration: 0.5s;
}
.fade-In-active {
  transition-property: opacity;
  transition-duration: 1s;
  z-index: 20;
  //   animation-name: fadeInDown;
  //   animation-duration: 2s;
  //   animation-fill-mode: both;
}
.fade-delay1 {
  transition-delay: 0.5s;
}
.fade-delay2 {
  transition-delay: 1s;
}
.fade-delay3 {
  transition-delay: 1.5s;
}
// @keyframes fadeInDown {
//   0% {
//     opacity: 0;
//     transform: translate3d(0, -100%, 0);
//   }
//   100% {
//     opacity: 1;
//     transform: none;
//   }
// }
.index-cup {
  width: 5.28rem;
  bottom: 0;
  z-index: 25;
}
.pipe {
  width: 0.84rem;
  bottom: 3rem;
  left: 4.77rem;
  right: auto;
  z-index: 20;
}
.upload-btn {
  position: absolute;
  width: 3rem;
  height: 1rem;
  line-height: 1rem;
  background: #309ab6;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  top: 5.9rem;
  left: 0;
  right: 0;
  margin: auto;
  &:active {
    opacity: 0.8;
  }
}
.upload-input {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
// .container {
//   .cropper-container {
//     position: absolute;
//     z-index: 100;
//   }
// }
.cropper-canvas {
  img {
    transform: translate3d(0, 0, 0);
  }
}
.cropper-view-box {
  img {
    transform: translate3d(0, 0, 0);
  }
}
.cropper-container {
  position: absolute;
  z-index: 200;
}
.crop-btns {
  display: flex;
  justify-content: space-around;
  text-align: center;
  position: absolute;
  bottom: 2rem;
  width: 100%;
  z-index: 300;
  span {
    display: inline-block;
    width: 1.5rem;
    height: 0.7rem;
    line-height: 0.7rem;
    border-radius: 5px;
    background: #fff;
    &:active {
      opacity: 0.8;
    }
  }
  .ensure {
    background: #309ab6;
    color: #fff;
  }
}
.chooseBox {
  background: #fff;
  padding: 0.25rem 0.3rem;
  height: 100%;
  text-align: center;
}
.chooseWord {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 0.25rem;
  .imgbox {
    width: 3.2rem;
    height: 3.2rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    display: inline-block;
    margin-bottom: 0.2rem;
    &.active {
      border: 2px solid #309ab6;
    }
  }
}
.loading-box {
  position: fixed;
  width: 2rem;
  height: 2rem;
  left: 0;
  right: 0;
  top: 3rem;
  margin: auto;
  z-index: 200;
}
.ensureWord{
  position: absolute;
  right:0.2rem;
}
</style>
