<template>
  <el-container>
    User...
  </el-container>
</template>
<script>
export default {
  name: 'User',
  components: {},
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
