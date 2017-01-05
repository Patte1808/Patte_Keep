<template>
  <div class="container">
    <p class="control">
      <input type="text" class="input is-large" placeholder="Take a note..." v-on:keyup.enter="addNote">
    </p>
  </div>
</template>

<script>
export default {
  name: 'hello',
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
