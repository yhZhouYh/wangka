<template>
  <div class="container">
    <!-- {{$canvaes}} -->
    <div class="coupon-container" v-if="getAward">
      <div class="coupon-box">
        <img class="coupon-img" src="../assets/coupon.png" alt="">
        <div class="words">
          <p>恭喜您获得卡旺卡优惠券一张</p>
          <p>填写手机号领取吧</p>
          <input type="number" class="coupon-mobile" placeholder="请输入手机号" v-model="mobile">
          <div class="coupon-btn" @click="addMobile">确定</div>
        </div>

      </div>

      <div class="mask">
      </div>

    </div>
    <transition appear appear-class="img-appear" appear-to-class="img-appear-to" appear-active-class="fade-In-active">

      <img :src="$urlSrc" alt="" class="cup">
    </transition>
    <transition appear appear-active-class="swing">
      <img src="../assets/longTap.png" alt="" class="longTap animated">
    </transition>
  </div>
  <!-- <img :src="$base64" alt="" class="photo"> -->
</template>
<script>
import domtoimage from 'dom-to-image'
import fly from 'flyio'
import URLSearchParams from 'url-search-params'
export default {
  data() {
    return {
      showloading: true,
      getAward: false,
      mobile: ''
    }
  },
  mounted() {
    if (!this.$urlSrc) {
      this.$router.push({ name: 'Index' })
    }
    let odds = this.$route.query.odds || 0.1
    if (this.getRandom(odds) && this.$route.query.img) {
      this.getAward = true
    }
    document.getElementById('audio').play()
    document.addEventListener(
      'WeixinJSBridgeReady',
      () => {
        document.getElementById('audio').play()
      },
      false
    )
  },
  methods: {
    getRandom(probability) {
      var probability = probability * 100 || 1
      var odds = Math.floor(Math.random() * 100)

      if (probability === 1) {
        return 1
      }
      if (odds < probability) {
        return 1
      } else {
        return 0
      }
    },
    addMobile() {
      let mobileRgx = /^(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[0-9])[0-9]{8}$/
      if (!mobileRgx.test(this.mobile)) {
        alert('手机号码不正确')
        return
      }
      var img = this.$route.query.img
      if (!img) {
        alert('上传无效图片')
        return
      } else {
        img = 'http://kawk.shuxihu.cn' + this.$route.query.img
      }
      var params = new URLSearchParams()
      params.append('mobile', this.mobile)
      params.append('imgUrl', img)
      var that = this
      fly
        .post('http://kawk.shuxihu.cn/new_api/addDo', params)
        .then(function(res) {
          // fly.post('/new_api/addDo', params).then(function(res) {

          var data = res.data
          if (data.result == '100000') {
            alert('领取成功')
            that.getAward = false
          } else if (data.result == '000002') {
            alert('该手机号已领取过优惠券')
            that.getAward = false
          } else {
            alert(data.msg)
          }
        })
    }
  }
}
</script>
<style lang="less">
.coupon-container {
  .words {
    padding: 1.75rem 0.6rem 0;
    text-align: center;
    p:first-child {
      color: #309ab6;
    }
  }
  .coupon-mobile {
    outline: 0;
    -webkit-appearance: none;
    background-color: #e6e6e6;
    // width: 4.38rem;
    width: 100%;
    height: 0.78rem;
    border: 0;
    border-radius: 5px;
    margin-top: 0.2rem;
    margin-bottom: 0.3rem;
    padding: 0 0.5rem;
    text-align: center;
    color: #a7a7a7;
    font-size: 0.3rem;
    &::-webkit-input-placeholder {
      text-align: center;
      color: #a7a7a7;
    }
  }
  .coupon-btn {
    width: 100%;
    height: 0.78rem;
    line-height: 0.78rem;
    background: #309ab6;
    color: #fff;
    border-radius: 5px;
  }
  .coupon-box {
    position: absolute;
    left: 0;
    right: 0;
    top: 3.1rem;
    width: 5.6rem;
    height: 5.4rem;
    background: #fff;
    border-radius: 5px;
    margin: 0 auto;
    z-index: 5000;
  }
  .coupon-img {
    position: absolute;
    width: 4.51rem;
    height: 2.81rem;
    margin: -1.3rem auto 0;
    left: 0;
    right: 0;
  }
  .mask {
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2000;
  }
}
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
