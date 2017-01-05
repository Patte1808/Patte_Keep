<template>
  <div class="columns is-multiline">
    <div class="column is-one-quarter" v-for="note in notes">
      <div class="box">
        <div class="content">
          <p>
            <strong>{{note.title}}</strong>
          </p>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
