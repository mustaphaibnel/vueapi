import Vue from 'vue'
import Vuex from 'vuex'
/* modules */
import PostModule from './posts'
import UserModule from './users'



Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        post: PostModule,
        user:UserModule
      }
  })

export default store