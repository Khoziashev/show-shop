<template>
  <div id="catalog-component">
    <Sidebar></Sidebar>
    <Header v-model="search" title="Каталог"></Header>
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
  name: "Catalog",
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
          name: "VALERY CAKES",
          description: "Торт",
          number: "30%",
          label: "скидка",
          icon: require("../assets/main/image 5.png"),
          icon_mid: require("../assets/main/image 5-mid.png"),
          icon_min: require("../assets/main/image 5-min.png")
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
        {
          name: "mangosteen",
          description: "Фрукт в подарок",
          number: "J130",
          label: "купон",
          icon: require("../assets/main/image 7.png"),
          icon_mid: require("../assets/main/image 7-mid.png")
        },
        {
          name: "aroma cremeria",
          description: "Джелато “Пармезан”",
          number: "20%",
          label: "Скидка",
          icon: require("../assets/main/image 8.png"),
          icon_mid: require("../assets/main/image 8-mid.png")
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
#catalog-component {
  width: 100%;
  height: 100%;
}
.main {
  overflow: hidden;
  position: relative;
  left: 240px;
  padding-top: 40px;
  padding-left: 40px;
  width: 1160px;
}
@media only screen and (max-width: 768px) {
  div .main {
    padding-top: 27px;
    padding-left: 6px;
    width: 658px;
    left: 104px;
  }
}
@media only screen and (max-width: 320px) {
  div .main {
    padding-left: 0;
    width: 308px;
    left: 12px;
  }
}
</style>