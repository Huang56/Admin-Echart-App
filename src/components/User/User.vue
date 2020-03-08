<template>
  <div>
    <div>User...</div>
    <AFilter />
    <AFuther />
  </div>
</template>
<script>
import AFilter from './AFilter/AFilter'
import AFuther from './AFuther/AFuther'
export default {
  name: 'User',
  components: {
    AFilter,
    AFuther
  },
  data() {
    return {
      input: ' ',
      number: 0
    }
  },
  methods: {
    click() {
      this.$emit('input', this.input)
    }
  }
}
</script>
<style lang="scss" scoped></style>
