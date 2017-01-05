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
  },

  DELETE_NOTE (state, id) {
    state.notes.splice(id, 1)
  }
}

const actions = {
  addNote ({ commit }, note) {
    commit('ADD_NOTE', note)
  },

  deleteNote ({ commit }, id) {
    commit('DELETE_NOTE', id)
  }
}

const getters = {
  notes (state) {
    return state.notes
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
