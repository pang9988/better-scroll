import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* 引入better-scroll  */
import BScroll from 'better-scroll'
/* 引入axios */
import axios from './axios.js'
/* 配置better-scroll */
Vue.prototype.BScroll = BScroll;
/* 配置axios */
Vue.prototype.axios = axios;





Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
