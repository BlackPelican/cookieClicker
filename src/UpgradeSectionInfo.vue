<template>
  <div class="upgrade-section-info flex flex--cc">
    <p class="info">{{upgradeInfo}}</p>
  </div>
</template>

<script>
//import Ligma from "./Ligma.vue";
export default {
  name: "UpgradeSectionInfo",
  props: {
    upgradeInfo: String
  },
  components: {},
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.upgrade-section-info {
  height: 100%;
  width: 160px;
}

.info {
  text-align: center;
  color: #444444ee;
  font-size: 14px;
}
</style>