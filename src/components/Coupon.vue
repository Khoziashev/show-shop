<template>
  <div class="coupon">
    <div class="coupon-info">
      <p class="name">{{ name }}</p>
      <p class="description">{{ description }}</p>
      <p class="number">{{ number }}</p>
      <p class="label">{{ label }}</p>
    </div>
    <div class="coupon-img">
      <img v-if="width > 768" :src="icon" alt="IMG" />
      <img v-else-if="width > 320" :src="icon_mid" alt="IMG">
      <img v-else-if="width <= 320" :src="icon_min" alt="IMG">
    </div>
  </div>
</template>

<script>
export default {
  name: "Coupon",
  data() {
    return {
      width: null,
    };
  },
  props: {
    name: String,
    description: String,
    number: String,
    label: String,
    icon: String,
    icon_mid: String,
    icon_min: String
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
.coupon {
  float: left;
  position: relative;
  width: 346px;
  height: 161px;
  margin-bottom: 20px;
  margin-left: 20px;
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
}
.coupon:hover {
  border: 1px solid #df212d;
  box-sizing: border-box;
}
.coupon-info {
  float: left;
  margin-left: 20px;
}
.name {
  margin-top: 16px;
  margin-bottom: 4px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.description {
  font-family: "Roboto", sans-serif;
  opacity: 0.5;
}
.number {
  margin-top: 36px;
  margin-bottom: 6px;
  font-size: 36px;
  line-height: 28px;
  color: #df212d;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
}
.label {
  letter-spacing: 0.4em;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  opacity: 0.5;
}
.coupon-img {
  text-align: center;
  position: absolute;
  right: 0;
  height: 161px;
}
@media only screen and (max-width: 768px) {
  .coupon {
    width: 296px;
    height: 144px;
  }
  .coupon-info {
    margin-left: 18px;
  }
  .name {
    font-size: 14px;
  }
  .description {
    font-size: 14px;
  }
  .number {
    margin-top: 31px;
    margin-bottom: 3px;
  }
  .coupon-img {
    width: 104px;
    height: 144px;
  }
}
@media only screen and (max-width: 320px) {
  .coupon {
    left: 0px;
    width: 268px;
    height: 130px;
    margin-bottom: 15px;
  }
  .coupon-info {
    margin-left: 20px;
  }
  .name {
    font-size: 12px;
  }
  .description {
    font-size: 12px;
  }
  .number {
    font-size: 28px;
    line-height: 24px;
    margin-top: 22px;
    margin-bottom: 3px;
  }
  .label {
    font-size: 12px;
  }
  .coupon-img {
    width: 89px;
    height: 130px;
  }
}
</style>