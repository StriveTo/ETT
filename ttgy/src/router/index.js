import Vue from 'vue'
import Router from 'vue-router'
import lb1 from '@/components/lb1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/lb1',
      name: 'lb1',
      component: lb1
    }
  ]
})
