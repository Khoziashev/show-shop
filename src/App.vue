<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

* {
  margin: 0;
}
html,
body {
  height: 100%;
  min-height: 100%;
  display: block;
  margin: 0;
  cursor: default;
  background: #e5e5e5;
}
#app {
  position: relative;
  width: 1440px;
  height: auto;
  min-height: 200vh;
  margin: auto;
  background: #fafafa;
}
@media only screen and (max-width: 768px) {
  #app {
    width: 768px;
    overflow: hidden;
  }
}
@media only screen and (max-width: 320px) {
  #app {
    width: 320px;
  }
}
</style>
