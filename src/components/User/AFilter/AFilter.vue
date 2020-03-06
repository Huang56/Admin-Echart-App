<template>
  <div class="a-container">
    <div class="a-left">
      <div class="a-step-container">
        <button>AND</button>
        <div class="a-h-line"></div>
      </div>
      <div class="a-v-line"></div>
    </div>
    <div class="a-right">
      <div>
        <span>做过</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AFilter',
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
.a-step-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .a-h-line {
    position: absolute;
    z-index: -1;
    right: -110px;
    width: 120px;
    height: 1px;
    background-color: #000;
  }
}
.a-container {
  display: flex;
  .a-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .a-v-line {
      width: 1px;
      height: 100%;
      background-color: #000;
    }
  }
  .a-right {
    padding: 0 10px 10px 120px;
  }
}
</style>
