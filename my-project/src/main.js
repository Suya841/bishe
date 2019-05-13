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
