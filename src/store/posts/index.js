import {
  PostService
} from '../../resource'

const state = {
  posts: {},
  post: {}
};
const actions = {
  async show(state, id) {
    state.commit('show', await PostService.PostShow(id))
  },
  async  index(state) {
    state.commit('index',await PostService.postIndex())
  },
  async store(state, data) {
    state.commit('store', await PostService.PostStore(data))
  },
  async update(state, data) {
    state.commit('update', await PostService.PostUpdate(data.id, data.post))
  },
  async delete(state, id) {
    state.commit('delete', await PostService.PostDelete(id))
  }
};
const getters = {
  posts(state) {
    return state.posts
  },
  post(state) {
    return state.post
  }
};
const mutations = {
  index(state, posts) {
    state.posts = posts
  },
  show(state, post) {
    state.post = post
  },
  store(state, post) {
    state.post = post
  },
  update(state, post) {
    state.post = post
  },
  delete(state, post) {
    state.post = post
  }

}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};