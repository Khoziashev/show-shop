<template>
  <div id="beauty-component">
    <Sidebar></Sidebar>
    <Header v-model="search" title="Красота"></Header>
    <div class="main">
      <Coupon
        v-for="(item, idx) in searchShop"
        :key="idx"
        :name="item.name"
        :description="item.description"
        :number="item.number"
        :label="item.label"
        :icon="item.icon"
        :icon_mid="item.icon_mid"
        :icon_min="item.icon_min"
      ></Coupon>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Coupon from "../components/Coupon";

export default {
  name: "Beauty",
  components: {
    Sidebar,
    Header,
    Coupon,
  },
  data() {
    return {
      search: "",
      info: [
        {
          name: "VALERY CAKES",
          description: "Торт",
          number: "30%",
          label: "скидка",
          icon: require("../assets/main/image 5.png"),
          icon_mid: require("../assets/main/image 5-mid.png"),
          icon_min: require("../assets/main/image 5-min.png")
        },
        {
          name: "aroma cremeria",
          description: "Джелато “Пармезан”",
          number: "20%",
          label: "Скидка",
          icon: require("../assets/main/image 8.png"),
          icon_mid: require("../assets/main/image 8-mid.png"),
        },
      ],
    };
  },
  computed: {
    searchShop() {
      return this.info.filter((el) => {
        return el.name.toUpperCase().includes(this.search.toUpperCase());
      });
    },
  },
};
</script>

<style>
#beauty-component {
  width: 100%;
  height: 100%;
}
</style>