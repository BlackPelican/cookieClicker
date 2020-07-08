<template>
  <div class="upgrade-grandma flex">
    <UpgradeSectionName :upgradeIcon="'img/iconGrandma.svg'" :upgradeName="'Grandma'" />
    <UpgradeSectionInfo
      :upgradeInfo="`Bakes ${taps} cookies every ${speed % 1 == 0 ? speed + '.0' : speed.toFixed(1)} seconds`"
    />
    <UpgradeSectionCPS :upgradeCPS="cps" />
    <UpgradeSectionBuy :upgradePrice="price" @click.native="increaseLevel" />
  </div>
</template>

<script>
import UpgradeSectionName from "./UpgradeSectionName.vue";
import UpgradeSectionInfo from "./UpgradeSectionInfo.vue";
import UpgradeSectionCPS from "./UpgradeSectionCPS.vue";
import UpgradeSectionBuy from "./UpgradeSectionBuy.vue";

export default {
  name: "UpgradeGrandma",
  components: {
    UpgradeSectionName,
    UpgradeSectionInfo,
    UpgradeSectionCPS,
    UpgradeSectionBuy
  },
  data: function() {
    return {
      costBase: 100,
      level: 0,
      speedBase: 10,
      loop: null,
      tapsBase: 10
    };
  },
  computed: {
    taps() {
      return this.level == 0 ? 0 : this.tapsBase + this.level * 2 - 2;
    },
    price() {
      return this.level == 0 ? 50 : this.costBase * this.level;
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
.upgrade-grandma {
  width: 100%;
  height: 64px;
  background: #ddd;
}
</style>