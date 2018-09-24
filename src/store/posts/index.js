import { PostService } from '../../resource'

const state = {
  posts: {},
  post:{}
};
const actions={
  show(state,id){
      state.commit('show',PostService.PostShow(id))
  },
  index (state) {
    state.commit('index',PostService.postIndex())
  },
  store (state,data) {
    state.commit('store',PostService.PostStore(data))
  },
  update (state,data) {
      state.commit('update',PostService.PostUpdate(data.id,data.post))
  },
  delete (state,id) {
      state.commit('delete',PostService.PostDelete(id))
  }
};
const getters={
posts(state){
  return state.posts
},
post(state){
  return state.post
}
};
const mutations={
  index(state,posts){
    state.posts=posts
  },
  show(state,post){
    state.post=post
  },
  store(state,post){
    state.post=post
  },
  update(state,post){
    state.post=post
  },
  delete(state,post){
    state.post=post
  }
  
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};