import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'

import Header_lb from '@/components/Header_lb'
import lb1 from '@/components/lb1'
import log from '@/components/log'


Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'index',
      component: index

  	},
    {
      path: '/Header_lb/',
      name: 'Header_lb',
      component: Header_lb
    },
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
