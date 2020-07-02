import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  currentUser: {
    userId: null,
    userEmail: null,
    isLogged: false,
  },
};

const mutations = {
  setUser(state, user) {
    state.currentUser = {
      userId: user.user.uid,
      userEmail: user.user.email,
      isLogged: true,
    };
  },
};

const actions = {
  setUser({ commit }, user) {
    commit("setUser", user);
  },
};

const getters = {
  isLogged: (state) => state.currentUser.isLogged,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
