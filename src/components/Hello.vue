<template>
  <div class="container">
    <p class="control">
      <input type="text" class="input is-large" placeholder="Take a note..." v-on:keyup.enter="addNote">
    </p>
    <note-overview />
  </div>
</template>

<script>
import NoteOverview from './NoteOverview'
export default {
  name: 'hello',
  components: {
    NoteOverview
  },
  methods: {
    addNote (e) {
      this.$store.dispatch('addNote', e.target.value)
      e.target.value = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
