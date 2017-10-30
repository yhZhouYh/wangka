<template>
  <div class="container">
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
        <input type="file" class="upload-input" @change="upload">
    </div>
    </transition>
  </div>
</template>
<script>
import domtoimage from "dom-to-image";
import ImageUtil from "../assets/uploadUtil";
// import '../assets/alloyfinger'
// import '../assets/css3transform'
import crop from "../assets/crop";
export default {
  name: "index",
  data() {
    return {
    };
  },
  mounted() {},
  methods: {
    upload(e) {
      let file = e.target.files[0];
      if (!ImageUtil._validImageSizeAndType(file)) {
        return;
      }
      let url = ImageUtil.getObjectURL(file)
      new crop({
        image_src: url,
        circle: false, // optional parameters , the default value is false
        width: fontSize * 3.35, // crop width
        height: fontSize * 7.52, // crop height
        output: 2, // output resolution --> 400*200
        ok: function(base64, canvas) {
          console.log(canvas);
        },
        cancel: function() {},
        ok_text: "yes", // optional parameters , the default value is ok
        cancel_text: "no" // optional parameters , the default value is cancel
      });
    }
  }
};
</script>
<style lang="less">
img {
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
  bottom: 3.8rem;
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
</style>
