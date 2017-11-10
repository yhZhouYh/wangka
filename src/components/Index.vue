<template>
  <div class="container" ref="container">
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
    <img :src="qrcode" style="display:none" alt="" ref="qrcode">
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
        require("../assets/Acup.png"),
        require("../assets/Bcup.png"),
        require("../assets/Ccup.png"),
        require("../assets/Dcup.png"),
        require("../assets/Ecup.png")
      ],
      qrcode: require("../assets/qrcode.png"),
      isExpand: false,
      checkedWord: 0,
      cropperCanvas: null,
      isClick: false,
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
      if (!this.isClick) {
      }
      let seed = Math.floor(Math.random() * 6);
      this.isExpand = false;
      this.showloading = true;
      // var defaultPos = this.position.left; //确定文字和cup位置
      // var bg = require("../assets/cup_bg.png");
      // if (this.checkedWord == 2 || this.checkedWord == 4) {
      //   defaultPos = this.position.right;
      // }
      // document.getElementById("audio").play(); document.getElementById("audio").play();
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
      let imgs = [];
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
      if (!this.isClick) {
        this.isClick = true;
        if (this.cropper != null) {
          this.cropperCanvas = this.cropper.getCroppedCanvas({
            width: 285,
            height: 670
          });
          // this.isExpand = true;
          let seed = Math.floor(Math.random() * 5);
          let bg = this.cups[seed];
          this.showloading = true;
          // document.getElementById("audio").play();
          try {
            this.ImagesLoaded([bg, this.qrcode], (index, imgs) => {
              if (index == imgs.length) {
                let canvas = document.createElement("canvas");
                let ctx = canvas.getContext("2d");
                canvas.width = imgs[0].width;
                canvas.height = imgs[0].height;
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                let pos = [221, 420];
                let qrpos = [594, 1018];
                if (seed == 4) {
                  pos = [221, 400];
                }
                console.log(seed);
                if (seed == 1 || seed == 4) {
                  qrpos = [54, 1018];
                }

                ctx.drawImage(this.cropperCanvas, ...pos);
                ctx.drawImage(imgs[0], 0, 0);
                ctx.drawImage(imgs[1], ...qrpos, 110, 110);
                // ctx.drawImage(imgs[1], defaultPos.cup.x, defaultPos.cup.y);
                // ctx.drawImage(imgs[2], defaultPos.word.x, defaultPos.word.y);
                var urlSrc = canvas.toDataURL("image/jpeg", 1);
                Vue.prototype.$urlSrc = urlSrc;
                this.$router.push({ name: "Result" });
              }
            });
          } catch (error) {
            this.isClick = false;
          }
        }
      }
    },
    upload(e) {
      let file = e.target.files[0];
      if (!ImageUtil._validImageSizeAndType(file)) {
        alert("请选在小于10M的照片");
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
          aspectRatio: 285 / 670,
          viewMode: 1,
          dragMode: "move",
          cropBoxMovable: false,
          cropBoxResizable: false,
          rotatable: true
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
  // width: 2rem;
  // height: 2rem;
  left: 0;
  right: 0;
  top: 3rem;
  margin: auto;
  z-index: 200;
  text-align: center;
}
.ensureWord {
  position: absolute;
  right: 0.2rem;
}
</style>
