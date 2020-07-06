import Vue from "vue"
import App from "./App.vue"
import Vuex from "vuex"
import store from "./store/index.js"
import VueRouter from "vue-router"
import { routes } from "./routes.js"
import Vuelidate from "vuelidate"

Vue.use(Vuelidate)
Vue.use(Vuex)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app")
