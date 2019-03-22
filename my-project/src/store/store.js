import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        author: 'Wise Wrong'
    },
    actions: {
        saveForm (context) {
            axios({
                method: 'post',
                url: '/user',
                data: context.state.test
            })
        }
    }
})



const USER_LOCALSTORAGE_KEY = 'user'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null
    },
    mutations: {
      setUser (state, payload = null) {
        state.user = payload
      }
    },
    getters: {
      token: (state) => {
        const user = state.user
        return user && user.token
      },
      tokenInfo: (state) => {
        const user = state.user
        return user && user.tokenInfo // FIXME 根据实际情况填写
      }
    },
    actions: {
      init ({ commit }) {
        let user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
        if (user) {
          user = JSON.parse(user)
          commit('setUser', user)
        }
      },
      async login ({ commit }, { phone, password }) {
        const user = await axios.post('/user/auth/adminLogin', { phone, password })
        commit('setUser', user)

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user))
      },
      async logout ({ commit }) {
        await axios.post('/admin/user/logout').catch((e) => console.error(e))
        commit('setUser', null)

        localStorage.removeItem(USER_LOCALSTORAGE_KEY)
      },
      refreshTokenInfo () {
        // TODO
      }
    }
  })
}

export default createStore
// export default store