<template>
  <div class="stat-total rounded flex flex--cc">
    <span class="cps">{{cps.toFixed(2)}}</span>
    <span class="label">CPS</span>
  </div>
</template>

<script>
//import Test from "./Test.vue";
export default {
  name: "StatCPS",
  components: {},
  data: function() {
    return {};
  },
  computed: {
    cps() {
      return this.$store.state.cps;
    }
  }
};
</script>

<style scoped>
.stat-total {
  background: #eee;
  height: 60px;
  width: 200px;
}

.cps {
  font-size: 20px;
  font-weight: 600;
}

.label {
  font-size: 12px;
  margin-left: 4px;
}
</style>