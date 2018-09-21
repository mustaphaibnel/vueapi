import Vue from 'vue'
import Vuex from 'vuex'
import getters from './root/getters'
import mutations from './root/mutations'
import actions from './root/actions'
/* modules */
import PostModule from './posts'



Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        post: PostModule
      },
    state: {
        message: 'my message',
        count:3
      },
      getters,
      mutations,
      actions

  })

export default store