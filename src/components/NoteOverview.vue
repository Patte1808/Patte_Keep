<template>
  <div class="columns is-multiline">
    <div class="column is-one-quarter" v-for="(note, id) in notes">
      <div class="box">
        <div class="content">
          <p class="control" v-if="isEditMode(id)">
            <input class="input" type="text" v-model="activeNote.title">
          </p>
          <p v-else>
            <strong>{{note.title}}</strong>
          </p>
          <nav class="level">
            <div class="level-left">
              <a class="level-item">
                <a v-if="isEditMode(id)" @click="editNote(id, activeNote)">Save</a>
                <a @click="setActiveNote(note)" v-else>Edit</a>          
              </a>
              <a class="level-item">
                <a @click="deleteNote(id)">Delete</a>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'note-overview',
  data () {
    return {
      activeNote: null
    }
  },
  computed: {
    notes () {
      return this.$store.getters.notes
    }
  },
  methods: {
    setActiveNote (note) {
      this.activeNote = note
    },
    editNote (id, activeNote) {
      this.activeNote = null
      this.$store.dispatch('editNote', id, activeNote)
    },
    deleteNote (id) {
      this.$store.dispatch('deleteNote', id)
    },
    isEditMode (id) {
      return this.activeNote !== null && this.activeNote._id === id
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
