<template>
  <div class="upgrade-autotap flex">
    <UpgradeSectionName :upgradeIcon="'img/iconAutoTap.svg'" :upgradeName="'AutoTap'" />
    <UpgradeSectionInfo
      :upgradeInfo="`Taps ${taps} times every ${speed % 1 == 0 ? speed + '.0' : speed.toFixed(1)} seconds`"
    />
    <UpgradeSectionCPS :upgradeCPS="cps" />
    <UpgradeSectionBuy :upgradePrice="price" @click.native="increaseLevel" :class="{dark: true}" />
  </div>
</template>

<script>
import UpgradeSectionName from "./UpgradeSectionName.vue";
import UpgradeSectionInfo from "./UpgradeSectionInfo.vue";
import UpgradeSectionCPS from "./UpgradeSectionCPS.vue";
import UpgradeSectionBuy from "./UpgradeSectionBuy.vue";

export default {
  name: "UpgradeAutoTap",
  components: {
    UpgradeSectionName,
    UpgradeSectionInfo,
    UpgradeSectionCPS,
    UpgradeSectionBuy
  },
  data: function() {
    return {
      costBase: 10,
      level: 0,
      speedBase: 5,
      loop: null,
      tapsBase: 1
    };
  },
  computed: {
    taps() {
      return this.level == 0 ? 0 : this.tapsBase + this.level * 2 - 2;
    },
    price() {
      return this.costBase * this.level;
    },
    cps() {
      return this.speed == 0 ? 0 : (1 / this.speed) * this.taps;
    },
    speed() {
      return this.level == 0 ? 0 : this.speedBase - this.level / 5 + 0.2;
    }
  },
  methods: {
    increaseLevel() {
      if (this.$store.state.cookies >= this.price) {
        this.$store.commit("removeCookies", this.price);
        this.level++;
      }
    }
  },
  watch: {
    cps(newVal, oldVal) {
      this.$store.commit("increaseCps", { newCps: this.cps, oldCps: oldVal });
    },
    level() {
      if (this.loop) {
        clearInterval(this.loop);
        this.loop = setInterval(
          () => this.$store.commit("addCookies", this.taps),
          this.speed * 1000
        );
      } else {
        this.loop = setInterval(
          () => this.$store.commit("addCookies", this.taps),
          this.speed * 1000
        );
      }
    }
  }
};
</script>

<style scoped>
.upgrade-autotap {
  width: 100%;
  height: 64px;
  background: #ccc;
  border-radius: 4px 4px 0 0;
}
</style>