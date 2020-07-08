<template>
  <div class="the-upgrades rounded">
    <UpgradeAutoTap />
    <UpgradeGrandma />
  </div>
</template>

<script>
import UpgradeAutoTap from "./UpgradeAutoTap.vue";
import UpgradeGrandma from "./UpgradeGrandma.vue";

export default {
  name: "TheUpgrades",
  components: {
    UpgradeAutoTap,
    UpgradeGrandma
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.the-upgrades {
  background: #eee;
  height: 100%;
  width: 640px;
}
</style>