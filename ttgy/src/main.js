// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from "axios"

Vue.use(MintUI)

import router from './router'
import footer from './components/footer'

Vue.component("common-footer",footer);
Vue.config.productionTip = false;

/* eslint-disable no-new */


import store from './vuex'
import Header_lb from './components/Header_lb'
import './assets/css/reset.css'
import './assets/iconfont/iconfont.css'
import './assets/css/swiper.min.css'


<<<<<<< HEAD
Vue.use(MintUI);
import {  Swipe, SwipeItem} from 'mint-ui';
=======
>>>>>>> 75c1511720f809ca0ab1c29eaaf26818311714f6

Vue.config.productionTip = false


// 全局注册组件

//Vue.component("common-header", Header_lb);





new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

