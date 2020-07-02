import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { rtdbPlugin } from "vuefire";
import store  from "./store/index";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(BootstrapVue);
Vue.use(rtdbPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
