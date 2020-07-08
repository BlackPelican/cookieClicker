<template>
  <div class="the-dashboard shadow rounded flex">
    <div class="area area--cookie">
      <TheCookie />
      <StatCPS />
    </div>
    <TheUpgrades />
  </div>
</template>

<script>
import TheCookie from "./TheCookie.vue";
import StatCPS from "./StatCPS.vue";
import TheUpgrades from "./TheUpgrades.vue";

export default {
  name: "TheDashboard",
  components: {
    TheCookie,
    StatCPS,
    TheUpgrades
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.the-dashboard {
  height: 480px;
  width: 960px;
  background: #fff;
  padding: 40px;
  align-items: center;
  justify-content: space-between;
}

.area--cookie {
  align-items: space-between;
  flex-direction: column;
  justify-content: space-between;
}
</style>