<template>
  <div id="health-component">
    <Sidebar></Sidebar>
    <Header v-model="search" title="Здоровье"></Header>
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
import Sidebar from "../components/Sidebar"
import Header from "../components/Header";
import Coupon from "../components/Coupon";

export default {
  name: "Health",
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
          name: "mangosteen",
          description: "Фрукт в подарок",
          number: "J130",
          label: "купон",
          icon: require("../assets/main/image 7.png"),
          icon_mid: require("../assets/main/image 7-mid.png")
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
#health-component {
  width: 100%;
  height: 100%;
}
</style>