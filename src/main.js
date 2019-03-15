// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "lib-flexible/flexible";
import VCharts from "v-charts";
import Qs from 'qs'
//vuex
import store from "./store";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import VueCountUp from 'vue-countupjs'
Vue.use(VueAwesomeSwiper /* { default global options } */);
Vue.use(ElementUI);
Vue.config.productionTip = false;
// const SN = "http://192.168.1.25/?service="; //serverName/



/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
