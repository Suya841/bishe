import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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

export default store