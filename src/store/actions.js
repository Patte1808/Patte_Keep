export const addNote = ({ dispatch }, e) => {
  dispatch('ADD_NOTE', e.target.value)
}
