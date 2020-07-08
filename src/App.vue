<template>
  <div id="app" class="flex flex--cc">
    <StatCookies />
    <TheDashboard />
  </div>
</template>

<script>
import TheDashboard from "./TheDashboard.vue";
import StatCookies from "./StatCookies.vue";

export default {
  name: "App",
  components: {
    TheDashboard,
    StatCookies
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: "Open Sans";
  color: #222222ee;
}

html {
  --c-pink: #ffc0be;
  --c-surface: #ffebe7;
}

#app {
  height: 100%;
  background: #eee;
  flex-direction: column;
}

.flex {
  display: flex;
}

.flex--cc {
  justify-content: center;
  align-items: center;
}

.shadow {
  box-shadow: 0 4px 7px #22222222;
}

.rounded {
  border-radius: 4px;
}

.area {
  height: 100%;
  display: flex;
}

button,
input {
  outline: 0;
  border: none;
}

button {
  cursor: pointer;
}
</style>
