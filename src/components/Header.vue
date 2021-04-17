<template>
  <div id="header">
    <h1>{{ title }}</h1>
    <input
      class="search"
      type="text"
      placeholder="Какой магазин вам нужен?"
      :value="val"
      @input="$emit('input', $event.target.value)"
    />
    <span class="line"></span>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
    val: String,
  },
};
</script>

<style>
#header {
  position: relative;
  left: 240px;
  width: 1200px;
  height: 201px;
  background: #ffffff;
}
#header .line {
  position: absolute;
  height: 1px;
  width: 1200px;
  bottom: 0;
  background-color: #e5e5e5;
}
#header h1 {
  position: absolute;
  top: 40px;
  left: 60px;
  width: 400px;
  height: 49px;
  color: #000000;
  font-family: "Open Sans", sans-serif;
  font-size: 28px;
  line-height: 28px;
}
.search {
  position: absolute;
  top: 109px;
  left: 60px;
  width: 1080px;
  height: 52px;
  padding-left: 44px;
  outline: none;
  border: 1px solid rgba(51, 51, 51, 0.2);
  box-sizing: border-box;
  border-radius: 50px;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  background: url("../assets/header/search.png") no-repeat 16px;
}
@media only screen and (max-width: 768px) {
  #header {
    width: 664px;
    height: 181px;
    left: 104px;
  }
  #header h1 {
    left: 342px;
    width: 296px;
    height: 40px;
    text-align: right;
  }
  .search {
    width: 612px;
    top: 102px;
    left: 26px;
  }
}
@media only screen and (max-width: 320px) {
  #header {
    width: 308px;
    height: 169px;
    left: 12px;
  }
  #header h1 {
    top: 37px;
    left: 21px;
    width: 267px;
    height: 32px;
    font-size: 24px;
  }
  .search {
    width: 267px;
    top: 90px;
    left: 20px;
    font-size: 14px;
  }
}
</style>