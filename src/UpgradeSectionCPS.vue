<template>
  <div class="upgrade-section-cps flex flex--cc">
    <span class="cps">{{upgradeCPS.toFixed(2)}}</span>
    <span class="label">CPS</span>
  </div>
</template>

<script>
//import Ligma from "./Ligma.vue";
export default {
  name: "UpgradeSectionCPS",
  props: {
    upgradeCPS: Number
  },
  components: {},
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.upgrade-section-cps {
  height: 100%;
  width: 160px;
}

.cps {
  font-weight: 600;
}

.label {
  font-size: 10px;
  margin-left: 4px;
}
</style>