<template>
  <div id="sidebar" :class="{ clicked: isActive }">
    <div class="sidebar-left">
      <div class="click" @click="isActive = !isActive">
        <div class="click-top"></div>
        <div class="click-bottom"></div>
      </div>
      <div class="logo">
        <img
          v-if="width > 768"
          src="../assets/sidebar/logo-big.png"
          alt="IMG"
        />
        <img
          v-else-if="width <= 768"
          src="../assets/sidebar/logo-little.png"
          alt="IMG"
        />

        <p>BECO</p>
      </div>
      <div class="menu">
        <router-link
          class="catalog"
          to="/"
          active-class="catalog-active"
          exact
          ><span class="line-left"></span>
          <p>Каталог</p></router-link
        >
        <router-link
          class="health"
          to="/health"
          active-class="health-active"
          ><span class="line-left"></span>
          <p>Здоровье</p></router-link
        >
        <router-link
          class="beauty"
          to="/beauty"
          active-class="beauty-active"
          ><span class="line-left"></span>
          <p>Красота</p></router-link
        >
        <router-link
          class="enjoy"
          to="/enjoy"
          active-class="enjoy-active"
          ><span class="line-left"></span>
          <p>Развлечения</p></router-link
        >
        <router-link class="car" to="/car" active-class="car-active"
          ><span class="line-left"></span>
          <p>Авто</p></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      isActive: false,
      width: null,
    };
  },
  methods: {
    updateWidth() {
      this.width = window.outerWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
  },
};
</script>

<style>
.sidebar-left {
  z-index: 100;
  float: left;
  position: absolute;
  min-height: 100%;
  height: 100%;
  width: 240px;
  background: #f3f4f9;
}
.click {
  display: none;
}
.logo {
  position: absolute;
  left: 41px;
  top: 41px;
  width: 121px;
}
.logo img {
  float: left;
}
.logo p {
  position: absolute;
  right: 0;
  width: 61px;
  top: calc(50% - 24px / 2);
  color: #333333;
  font-family: "Poppins", sans-serif;
}
.menu {
  overflow: hidden;
  position: relative;
  top: 132px;
}
.catalog,
.health,
.beauty,
.enjoy,
.car {
  position: relative;
  float: left;
  height: 64px;
  width: 240px;
  color: #333333;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
}
.catalog p,
.health p,
.beauty p,
.enjoy p,
.car p {
  position: absolute;
  left: 76px;
  top: calc((100% - 22px) / 2);
}
.catalog {
  background: url("../assets/sidebar/catalog.png") no-repeat 40px;
}
.health {
  background: url("../assets/sidebar/health.png") no-repeat 40px;
}
.beauty {
  background: url("../assets/sidebar/beauty.png") no-repeat 40px;
}
.enjoy {
  background: url("../assets/sidebar/enjoy.png") no-repeat 40px;
}
.car {
  background: url("../assets/sidebar/car.png") no-repeat 40px;
}
.line-left {
  position: absolute;
  height: 24px;
  top: calc((100% - 24px) / 2);
  border-left: 3px solid #f3f4f9;
}
.catalog-active {
  background: url("../assets/sidebar/catalog-hover.png") no-repeat 40px;
  color: #34abe0;
}
.catalog-active .line-left {
  border-left-color: #34abe0;
}
.health-active {
  background: url("../assets/sidebar/health-hover.png") no-repeat 40px;
  color: #34abe0;
}
.health-active .line-left {
  border-left-color: #34abe0;
}
.beauty-active {
  background: url("../assets/sidebar/beauty-hover.png") no-repeat 40px;
  color: #34abe0;
}
.beauty-active .line-left {
  border-left-color: #34abe0;
}
.enjoy-active {
  background: url("../assets/sidebar/enjoy-hover.png") no-repeat 40px;
  color: #34abe0;
}
.enjoy-active .line-left {
  border-left-color: #34abe0;
}
.car-active {
  background: url("../assets/sidebar/car-hover.png") no-repeat 40px;
  color: #34abe0;
}
.car-active .line-left {
  border-left-color: #34abe0;
}
@media only screen and (max-width: 768px) {
  .sidebar-left {
    width: 104px;
    transition: 0.5s;
  }
  .click {
    display: block;
    position: absolute;
    z-index: 100;
    left: 104px;
    width: 48px;
    height: 106px;
    transition: 0.5s;
  }
  .click-top {
    position: absolute;
    height: 25px;
    width: 50%;
    border-bottom-left-radius: 50px;
    background: #ffffff;
  }
  .click-bottom {
    position: absolute;
    bottom: 0;
    height: 25px;
    width: 50%;
    border-top-left-radius: 50px;
    background: #ffffff;
  }
  .click::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 50%;
    background: #f3f4f9;
  }
  .click::after {
    border-radius: 0 50px 50px 0;
    content: "";
    position: absolute;
    top: calc((100% - 56px) / 2);
    bottom: 0;
    left: 0;
    right: 0;
    height: 56px;
    background: #f3f4f9 url("../assets/sidebar/burger menu.png") no-repeat 30%
      50%;
      transition: 0.5s;
  }
  .clicked .sidebar-left {
    transition: 0.5s;
    width: 264px;
  }
  .clicked .click {
    transition: 0.5s;
    left: 264px;
  }
  .clicked .click::after {
    background-image: url("../assets/sidebar/menu exit.png");
  }
  .clicked .menu {
    width: 264px;
  }
  .clicked .catalog,
  .clicked .health,
  .clicked .beauty,
  .clicked .enjoy,
  .clicked .car {
    width: 264px;
    transition: 0s;
  }
  .clicked .catalog p,
  .clicked .health p,
  .clicked .beauty p,
  .clicked .enjoy p,
  .clicked .car p {
    opacity: 1;
    transition: 0.6s;
  }
  .clicked .logo {
    width: 67px;
  }
  .clicked .logo p {
    opacity: 1;
    width: 38px;
    font-size: 14px;
    top: 3px;
  }
  .menu {
    top: 111px;
  }
  .catalog,
  .health,
  .beauty,
  .enjoy,
  .car {
    width: 104px;
    transition: 1s;
  }
  .catalog p,
  .health p,
  .beauty p,
  .enjoy p,
  .car p {
    opacity: 0;
  }
  .logo {
    width: 24px;
    height: 24px;
  }
  .logo p {
    opacity: 0;
  }
}
@media only screen and (max-width: 320px) {
  .sidebar-left {
    width: 12px;
    background-image: none;
    transition: 0.3s;
  }
  .click {
    left: 12px;
    transition: 0.3s;
  }
  .click::after {
    transition: 0.1s;
  }
  .logo {
    opacity: 0;
  }
  .menu {
    opacity: 0;
  }
  .clicked .sidebar-left {
    width: 192px;
    transition: 0.3s;
  }
  .clicked .click {
    left: 192px;
    transition: 0.3s;
  }
  .clicked .logo {
    opacity: 1;
  }
  .clicked .menu {
    opacity: 1;
    width: 192px;
  }
  .clicked .catalog,
  .clicked .health,
  .clicked .beauty,
  .clicked .enjoy,
  .clicked .car {
    background: none;
    width: 192px;
  }
  .clicked .catalog p,
  .clicked .health p,
  .clicked .beauty p,
  .clicked .enjoy p,
  .clicked .car p {
    left: 19px;
  }
}
</style>