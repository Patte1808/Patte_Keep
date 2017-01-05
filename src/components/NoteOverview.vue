<template>
  <div class="columns is-multiline">
    <div class="column is-one-quarter" v-for="(note, id) in notes">
      <div class="box">
        <div class="content">
          <p>
            <strong>{{note.title}}</strong>
          </p>
          <nav class="level">
            <div class="level-left">
              <a class="level-item">
                <a>Edit</a>
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
  computed: {
    notes () {
      return this.$store.getters.notes
    }
  },
  methods: {
    deleteNote (id) {
      this.$store.dispatch('deleteNote', id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
