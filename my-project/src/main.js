// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from '@/store/store'
import axios from 'axios'
// import VueAxios from 'vue-axios'
import VurResoutce from 'vue-resource'
// import func from './public/func' //
import api from '../server/api'
// import axios from 'axios'
import { emoji } from './utils/emoji'

// import iView from 'iview'
// import 'iview/dist/styles/iview.css'
Vue.prototype.$ajax= axios

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VurResoutce)
Vue.use(Vuex)
// Vue.use(axios)
// Vue.use(VueAxios)
// Vue.use(iView)
// Vue.prototype.$http = axios
Vue.prototype.api = api //和后台相同的api地址
Vue.prototype.emoji = emoji 
// Vue.prototype.func = func

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// pand
router.beforeEach((to, from, next) => {
 
  //获取用户登录成功后储存的登录标志
  let getFlag = localStorage.getItem("flag");
  // console.log('localStorage===')
  // console.log(localStorage)

  //如果登录标志存在且为isLogin，即用户已登录
  if(getFlag == "isLogin"){
 
    //设置vuex登录状态为已登录
    // console.log('试试===')
    // console.log(store.state)
    store.state.isLogin = true
    next()
 
    //如果已登录，还想想进入登录注册界面，则定向回首页
    // if (!to.meta.isLogin) {
    //    //iViewUi友好提示
    //   // iView.Message.error('请先退出登录')
    //   // next({
    //   //   path: '/home'
    //   // })
    // }
  
  }else{//如果登录标志不存在，即未登录
   next()
  }
 
});
 
router.afterEach(route => {
  window.scroll(0, 0);
});