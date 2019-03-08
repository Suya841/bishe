import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/index/index'
import Hello from '@/components/HelloWorld'
import Login from '@/view/login'
import Goods from '@/view/goods/goods'
import User from '@/view/user/personCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goods',
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
    }
  ]
})
