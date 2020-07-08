<template>
  <div class="stat-cookies flex">
    <span class="cookies">{{cookies}}</span>
    <img class="icon" src="img/cookies.svg" alt="cookies" />
  </div>
</template>

<script>
//import Ligma from "./Ligma.vue";

export default {
  name: "StatCookies",
  components: {},
  data: function() {
    return {};
  },
  computed: {
    cookies() {
      return this.$store.state.cookies;
    }
  }
};
</script>

<style scoped>
.stat-cookies {
  position: absolute;
  top: 8px;
  height: 40px;
  justify-content: center;
  align-items: baseline;
}

.cookies {
  font-size: 40px;
  font-weight: 600;
}

.icon {
  height: 24px;
  margin-left: 8px;
}
</style>