<template>
  <div id="app">
    <!-- <router-view/> -->
    <index></index>
  </div>
</template>

<script>
import Index from "./components/Index";
export default {
  name: "app",
  components: {
    Index
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  width: 100%;
  height: 100%;
}

html,
html *,
html :after,
html :before {
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100%;
  font-size: 0.32rem;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: 1.6;
  background: #fff;
}
#app {
  position: absolute;
  height: 100%;
  max-width: 750px;
  margin: 0 auto;
  left: 0;
  right: 0;
}
.container {
  height:100%;
  position: relative;
  /* height: 13.34rem; */
  /* overflow: hidden; */
  /* background: url("./assets/grid.png"); */
}
</style>
