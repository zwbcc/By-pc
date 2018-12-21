import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "./viewport";
import vueAwesomeSwiper from "vue-awesome-swiper";
import axios from "axios";
import moment from "moment";
import "swiper/dist/css/swiper.css";
import "./assets/styles/reset.css";
import "./assets/styles/border.css";

Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(vueAwesomeSwiper);
Vue.filter("dateFormat", function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern);
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
