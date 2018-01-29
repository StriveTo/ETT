// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex'
import router from './router'



import Header_lb from './components/Header_lb'

import './assets/css/reset.css'
import './assets/iconfont/iconfont.css'
import './assets/css/swiper.min.css'
import './assets/css/swiper.min.css'

Vue.config.productionTip = false


// 全局注册组件
Vue.component("common-header", Header_lb);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
