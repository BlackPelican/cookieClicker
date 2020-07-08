<template>
  <div class="the-cookie rounded flex flex--cc">
    <img class="cookie" alt="cookie" src="img/cookie.svg" @click="addCookies" />
  </div>
</template>

<script>
export default {
  name: "TheCookie",
  components: {},
  data: function() {
    return {};
  },
  methods: {
    addCookies() {
      this.$store.commit("addCookies", 1);
    }
  }
};
</script>

<style scoped>
.the-cookie {
  height: 300px;
  width: 200px;
  background: radial-gradient(#eee, #ddd);
}

.cookie {
  border-radius: 50%;
  height: 96px;
  width: 96px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  -webkit-user-select: none;
}

.cookie:active {
  transform: scale(0.9);
}
</style>