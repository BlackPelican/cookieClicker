<template>
  <div class="upgrade-section-name flex flex--cc">
    <img class="icon" alt="icon" :src="upgradeIcon" />
    <div class="name">{{upgradeName}}</div>
  </div>
</template>

<script>
//import Ligma from "./Ligma.vue";
export default {
  name: "UpgradeSectionName",
  props: {
    upgradeIcon: String,
    upgradeName: String
  },
  components: {},
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.upgrade-section-name {
  height: 100%;
  width: 160px;
}

.icon {
  height: 24px;
  margin-right: 16px;
}

.name {
  font-weight: 600;
}
</style>