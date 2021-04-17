<template>
  <div id="enjoy-component">
    <Sidebar></Sidebar>
    <Header v-model="search" title="Развлечения"></Header>
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
  name: "Enjoy",
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
          name: "теленок табака",
          description: "Стейк “Мачете”",
          number: "20% ",
          label: "скидка",
          icon: require("../assets/main/image 3.png"),
          icon_mid: require("../assets/main/image 3-mid.png")
        },
        {
          name: "sushi sell",
          description: "Набор “Праздник”",
          number: "45%",
          label: "скидка",
          icon: require("../assets/main/image 4.png"),
          icon_mid: require("../assets/main/image 4-mid.png")
        },
        {
          name: "Кино и немцы",
          description: "Бесплатный бокал пива",
          number: "ВАРВАР",
          label: "ПРОМОКОД",
          icon: require("../assets/main/image 6.png"),
          icon_mid: require("../assets/main/image 6-mid.png"),
          icon_min: require("../assets/main/image 6-min.png")
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
#enjoy-component {
  width: 100%;
  height: 100%;
}
</style>