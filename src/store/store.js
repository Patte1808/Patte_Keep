import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  notes: [],
  activeNoteEdit: null
}

const mutations = {
  ADD_NOTE (state, title) {
    const newNote = {
      _id: (state.notes.length === 0) ? 0 : state.notes[state.notes.length - 1]._id + 1,
      title: title
    }

    state.notes.push(newNote)
  },

  DELETE_NOTE (state, id) {
    state.notes.splice(id, 1)
  },

  EDIT_NOTE (state, id, activeNote) {
    state.notes[id] = activeNote
  },

  SET_ACTIVE_NOTE_EDIT (state, note) {
    state.activeNoteEdit = note
  }
}

const actions = {
  addNote ({ commit }, note) {
    commit('ADD_NOTE', note)
  },

  deleteNote ({ commit }, id) {
    commit('DELETE_NOTE', id)
  },

  editNote ({ commit }, id, activeNote) {
    commit('EDIT_NOTE', id, activeNote)
  },

  setActiveNoteEdit ({ commit }, note) {
    commit('SET_ACTIVE_NOTE_EDIT', note)
  }
}

const getters = {
  notes (state) {
    return state.notes
  },
  activeNoteEdit (state) {
    return state.activeNoteEdit
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
