import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex"

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cookies: 0,
    cps: 0
  },
  mutations: {
    addCookies: (state, cookies) => state.cookies += cookies,
    removeCookies: (state, cookies) => state.cookies -= cookies,
    increaseCps: (state, { newCps, oldCps }) => {
      state.cps -= oldCps;
      state.cps += newCps;
    }
  }
})

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
