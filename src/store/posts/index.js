import { PostService } from '../../resource'

const state = {
  posts: {},
  post:{}
};
const actions={
  getPosts(state){
      state.commit('setPosts',PostService.getPosts())
  },
  getPost (state) {
    state.commit('setPost',PostService.getPost())
    },

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
  setPosts(state,posts){

    state.posts=posts
  },
  setPost(state,post){
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