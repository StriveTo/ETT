import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import search from '@/components/search'
import shopSearch from '@/components/shopSearch'

import Header_lb from '@/components/Header_lb'
import Cart from '@/components/Cart'
import Header_Cart from '@/components/Header_Cart'
import Details from '@/components/Details'
import lb1 from '@/components/lb1'
import log from '@/components/log'
import user from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'index',
      component: index

  	},
  	{
      path: '/search',
      name: 'search',
      component: search

  	},
  	{
      path: '/shopSearch',
      name: 'shopSearch',
      component: shopSearch

  	},
    {
      path: '/Header_lb',
      name: 'Header_lb',
      component: Header_lb
    },
     {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
     {
      path: '/Header_Cart',
      name: 'Header_Cart',
      component: Header_Cart
    },
    {
      path: '/Details:fid',
      name: 'Details',
      component: Details
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
    },
     {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
