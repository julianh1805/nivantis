import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  currentUser: {
    userId: null,
    userEmail: null,
    userRole: null,
    isLogged: false,
  },
};

const mutations = {
  setUser(state, user) {
    state.currentUser = {
      userId: user.user.uid,
      userEmail: user.user.email,
      userRole: user.role,
      isLogged: true,
    };
  },
  logOut(state) {
    state.currentUser = {
      userId: null,
      userEmail: null,
      userRole: null,
      isLogged: false,
    };
  },
};

const actions = {
  setUser({ commit }, user) {
    commit("setUser", user);
  },
  logOut({ commit }) {
    commit("logOut", commit);
  },
};

const getters = {
  isLogged: (state) => state.currentUser.isLogged,
  getCurrentRole: (state) => state.currentUser.userRole,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
