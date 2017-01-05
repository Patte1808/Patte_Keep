import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  notes: []
}

const mutations = {
  ADD_NOTE (state, title) {
    const newNote = {
      title: title
    }

    state.notes.push(newNote)
  }
}

const actions = {
  addNote ({ commit }, note) {
    commit('ADD_NOTE', note)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
