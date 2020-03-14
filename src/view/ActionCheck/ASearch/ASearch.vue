<template>
  <div class="a-container">
    <div class="a-input-button">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="click">
        搜索
      </el-button>
      <el-tooltip
        class="a-tooltip"
        effect="dark"
        content="Top Left 提示文字"
        placement="top-start"
      >
        <i class="el-icon-warning"></i>
      </el-tooltip>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ASearch',

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
.a-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  // input-button-start
  .a-input-button {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    width: 400px;
    height: 200px;
    .a-tooltip {
      margin: 0 12px;
    }
  }
  // input-button-end
}
</style>
