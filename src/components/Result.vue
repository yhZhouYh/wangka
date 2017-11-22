<template>
    <div class="container">
        <!-- {{$canvaes}} -->
        <transition appear appear-class="img-appear" appear-to-class="img-appear-to" appear-active-class="fade-In-active">

        <img :src="$urlSrc" alt="" class="cup">
        </transition>
         <transition appear  appear-active-class="swing">
          <img src="../assets/longTap.png" alt="" class="longTap animated">
         </transition>
         </div>
        <!-- <img :src="$base64" alt="" class="photo"> -->
</template>
<script>
import domtoimage from "dom-to-image";
export default {
  data() {
    return {
      showloading: true
    };
  },
  mounted() {
    if (!this.$urlSrc) {
      this.$router.push({ name: "Index" });
    }
    setTimeout(() => {
      this.showloading = false;
      document.getElementById("audio").play();
      document.addEventListener(
        "WeixinJSBridgeReady",
        () => {
          document.getElementById("audio").play();
        },
        false
      );
    }, 2500);
  }
};
</script>
<style lang="less">
.loading-box {
  svg {
    width: 2rem;
    height: 2rem;
  }
}
.cup {
  width: 100%;
  z-index: 10;
}
.photo {
  z-index: 5;
  top: 4.05rem;
  left: 1.84rem;
  margin: 0;
}
.longTap {
  width: 2.84rem;
  display: block;
  margin: 0 auto;
  position: absolute;
  bottom: 0.4rem;
  left: 0;
  right: 0;
}
@keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    -ms-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }
  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    -ms-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }
  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    -ms-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }
  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    -ms-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }
  100% {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    -ms-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}
.swing {
  -webkit-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
  -webkit-animation-name: swing;
  animation-name: swing;
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
</style>
