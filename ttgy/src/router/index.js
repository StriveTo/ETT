import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'

import search from '@/components/search'
import headerSh from '@/components/headerSh'

import shopSearch from '@/components/shopSearch'
import searchLb from '@/components/searchLb'

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
