import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.prototype.$ajax= axios
Vue.use(Vuex)

// export const store = new Vuex.Store({
//     state: {
//         author: 'Wise Wrong'
//     },
//     actions: {
//         saveForm (context) {
//             axios({
//                 method: 'post',
//                 url: '/user',
//                 data: context.state.test
//             })
//         }
//     }
// })
 


const USER_LOCALSTORAGE_KEY = 'user'
let that = this

const createStore =
   new Vuex.Store({
    state: {
      user: null,
      status: '登录',
      isLogin: false
    },
    mutations: { //时间注册 更改vuex的store中的状态的唯一方法
      setUser (state, payload = null) {
        state.user = payload
      },
      change(state,text,status) {
        state.status = text
        state.isLogin = status
      }
    },
    getters: { //放一些公共函数供组件调用。getters 会暴露为 store.getters 对象，也就是说可以通过 store.getters[属性]来进行相应的调用。
      token: (state) => { //实时监听state值的变化(最新状态)
        const user = state.user
        return user && user.token
      },
      tokenInfo: (state) => {
        const user = state.user
        return user && user.tokenInfo // FIXME 根据实际情况填写
      },
      changeSta(state) {
        return state.status
      }
    },
    actions: { //action触发mutation
      init ({ commit }) {
        let user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
        if (user) {
          user = JSON.parse(user)
          commit('setUser', user)
        }
      },
      async login ({ commit }, { userName, password }) {
        // const user = await ajax.post('/api/user/login', { userName, password })
        const user = { userName, password }
        commit('setUser', user)
        commit('change','退出账户',true)
        console.log('vuex longin user=====')
        console.log(user)
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user))
      },
      async logout ({ commit }) {
        // await ajax.post('/admin/user/logout').catch((e) => console.error(e))
        commit('setUser', null)
        commit('change','登录',false)

        localStorage.removeItem(USER_LOCALSTORAGE_KEY)
      },
      refreshTokenInfo () {
        // TODO
      }
    }
  })


export default createStore
// export default store