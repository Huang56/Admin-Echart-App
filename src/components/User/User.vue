<template>
  <div>
    <div>User...</div>
    <AFilter />
  </div>
</template>
<script>
import AFilter from './AFilter/AFilter'
export default {
  name: 'User',
  components: {
    AFilter
  },
  data() {
    return {
      input: ' '
    }
  },
  methods: {
    click() {
      this.$emit('input', this.input)
    }
  }
}
</script>
<style lang="scss" scoped>
.a-input-button {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}
</style>
