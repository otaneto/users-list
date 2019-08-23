import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default {
  namespaced: true,
  devtools: false,
  state: {
    users: [],
  },
  mutations: {
    SET_USERS: (state, payload) => {
      Object.assign(state, { users: payload });
    },
  },
  actions: {
    setUsers({ commit }, payload) {
      commit('SET_USERS', payload);
    },
  },
  getters: {
    users: state => state.users,
  },
};
