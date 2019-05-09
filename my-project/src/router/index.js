import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index/index'
import Hello from '@/components/HelloWorld'
import Login from '@/view/login'
import Goods from '@/view/goods/goods'
import Classify from '@/view/goods/classify'
import User from '@/view/user/personCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/classify/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    }
  ]
})
