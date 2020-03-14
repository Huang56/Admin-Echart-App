<template>
  <div>
    <AFilter />
    <div>User...</div>

    <AFuther />
    <loadfile />
  </div>
</template>
<script>
import AFilter from './AFilter/AFilter'
import loadfile from './loadfile/loadfile'
import AFuther from './AFuther/AFuther'
export default {
  name: 'Upload',
  components: {
    AFilter,
    AFuther,
    loadfile
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
