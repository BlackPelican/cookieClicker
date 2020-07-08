<template>
  <div class="upgrade-section-buy flex flex--cc">
    <button class="btn flex rounded">
      <img class="icon" src="img/iconBuy.svg" alt="buy" />
      <div class="price">{{upgradePrice == 0 ? "Free" : upgradePrice}}</div>
    </button>
  </div>
</template>

<script>
//import Ligma from "./Ligma.vue";
export default {
  name: "UpgradeSectionBuy",
  props: {
    upgradePrice: Number
  },
  components: {},
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.upgrade-section-buy {
  height: 100%;
  width: 160px;
}

.btn {
  width: 96px;
  background: #ccc;
  height: 40px;
  justify-content: space-evenly;
  align-items: center;
}

.btn:hover {
  background: #bbb;
}

.icon {
  height: 24px;
}

.dark .btn {
  background: #bbb;
}
</style>