<template>
  <div>
    <h1>index...</h1>
    <router-link to="/login">Login</router-link>
    <br />
    <button @click="add">add one</button>
    <button @click="reduce">- 1</button>
    <div>add one counts: {{ addOne }}</div>
    <div>getter: {{ doneTodosCount }}</div>
    <div>reduce one: {{ reduce_one }}</div>
    <div>reduce getter: {{ reduceCount }}</div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Login',
  computed: {
    ...mapState({
      addOne: state => state.add_one,
      reduce_one: state => state.reduce_one
    }),
    ...mapGetters(['doneTodosCount', 'reduceCount'])
  },
  methods: {
    add () {
      // eslint-disable-next-line no-console
      console.log('sad', this.$store)
      this.$store.commit('add_one', 1)
    },
    reduce () {
      // eslint-disable-next-line no-console
      console.log('sad', this.$store)
      this.$store.commit('reduce_one', 1)
    }
  }
}
</script>
<style lang="scss" scoped></style>
