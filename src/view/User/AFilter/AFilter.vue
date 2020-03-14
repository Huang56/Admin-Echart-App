<template>
  <div class="a-steps-container">
    <div class="a-step-item" v-for="value in number" :key="value">
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
          <el-select v-model="value1" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select v-model="value1" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select v-model="value1" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
    </div>
    <button @click="clickAdd" class="a-footer-btn">+</button>
  </div>
</template>
<script>
export default {
  name: 'AFilter',
  components: {},
  data() {
    return {
      input: ' ',
      number: 0,
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value1: ''
    }
  },
  methods: {
    click() {
      this.$emit('input', this.input)
    },
    clickAdd() {
      this.number++
    }
  }
}
</script>
<style lang="scss" scoped>
.a-steps-container {
  position: relative;
  .a-footer-btn {
    position: absolute;
    left: 8px;
  }
}
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
.a-step-item {
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
    transform: translateY(-20px);
  }
}
</style>
