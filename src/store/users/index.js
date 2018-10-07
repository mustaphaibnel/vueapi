import {
    UserService
  } from '../../resource/modules/'
  
  const state = {
    users: {},
    user: {}
  };
  const actions = {
    async show(state, id) {
      state.commit('show', await UserService.UserShow(id))
    },
    async  index(state) {
      state.commit('index',await UserService.UserIndex())
    },
    async store(state, data) {
      state.commit('store', await UserService.UserStore(data))
    },
    async update(state, data) {
      state.commit('update', await UserService.UserUpdate(data.id, data.user))
    },
    async delete(state, id) {
      state.commit('delete', await UserService.UserDelete(id))
    }
  };
  const getters = {
    users(state) {
      return state.users
    },
    user(state) {
      return state.user
    }
  };
  const mutations = {
    index(state, users) {
      state.users = users
    },
    show(state, user) {
      state.user = user
    },
    store(state, user) {
      state.user = user
    },
    update(state, user) {
      state.user = user
    },
    delete(state, user) {
      state.user = user
    }
  
  }
  
  export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
  };