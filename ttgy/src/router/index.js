import Vue from 'vue'
import Router from 'vue-router'
import Header_lb from '@/components/Header_lb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Header_lb/',
      name: 'Header_lb',
      component: Header_lb
    }
  ]
})
