import Vue from 'vue'
import Router from 'vue-router'
import lb1 from '@/components/lb1'
import log from '@/components/log'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/lb1',
      name: 'lb1',
      component: lb1
    },
     {
      path: '/log',
      name: 'log',
      component: log
    }
  ]
})
