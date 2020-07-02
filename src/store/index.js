import Vuex from 'vuex'
import { vuexfireMutations, firebaseAction } from 'vuexfire'
import { db } from '../db.js'

export default new Vuex.Store({
  state: {
    medicaments: [],
  },

  mutations: vuexfireMutations,

  actions: {
    bindMedic: firebaseAction(({ bindFirebaseRef }) => {
      return bindFirebaseRef('medicaments', db.ref('medicaments'))
    }),
  },
})