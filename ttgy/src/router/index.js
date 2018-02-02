import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'

import search from '@/components/search'
import headerSh from '@/components/headerSh'

import shopSearch from '@/components/shopSearch'
import searchLb from '@/components/searchLb'

import Header_lb from '@/components/Header_lb'
import Cart from '@/components/Cart'
import Header_Cart from '@/components/Header_Cart'
import Details from '@/components/Details'
import List_lb from '@/components/List_lb'
import Part from '@/components/Part'
import Partp from '@/components/Partp'
import Evaluate from '@/components/Evaluate'
import Det from '@/components/Det'


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
      path: '/headerSh',
      name: 'headerSh',
      component: headerSh,
      children: [
      	{
		      path: 'shopSearch',
		      name: 'shopSearch',
		      component: shopSearch
      	},
      	{
      		path: 'searchLb',
      		name: 'searchLb',
      		component: searchLb
      	}
      ]

  	},
  	{
      path: '/search',
      name: 'search',
      component: search
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
      path: '/Header_Cart/:fid',
      name: 'Header_Cart',
      component: Header_Cart
    },
    {
      path: '/List_lb/:fid',
      name: 'List_lb',
      component: List_lb,
        children: [
          {
            path: '/List_lb/Part/:fid',
            name: 'Part',
            component: Part
          },
           {
             path: '/List_lb/Partp/:fid',
             name: 'Partp',
             component: Partp
          },
          {
            path: '/List_lb/Evaluate/:fid',
            name: 'Evaluate',
            component: Evaluate
          },
           {
            path: '',
            name: 'Details',
            component: Details
          },
           {
            path: '/List_lb/Det/:fid',
            name: 'Det',
            component: Det
          }


        ]
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
