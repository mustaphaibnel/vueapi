import Vue from 'vue'
import Vuex from 'vuex'
/* modules */
import PostModule from './posts'



Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        post: PostModule
      }
  })

export default store