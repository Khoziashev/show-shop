<template>
  <div id="car-component">
    <Sidebar></Sidebar>
    <Header v-model="search" title="Авто"></Header>
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
  name: "Car",
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
          name: "fire food",
          description: "Вторая шаурма в подарок",
          number: "Огонь",
          label: "промокод",
          icon: require("../assets/main/image 2.png"),
          icon_mid: require("../assets/main/image 2-mid.png")
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
#car-component {
  width: 100%;
  height: 100%;
}
</style>