<template>
  <div class="a-steps-container">
    <div class="a-wrapper">
      <div
        v-if="optDatas.length && !(optDatas.length === 1)"
        class="a-border-box"
        :style="{ height: optDatas.length * (40 + 10) - 50 + 'px' }"
      >
        <div class="a-futher">且</div>
      </div>
      <div class="a-content-container">
        <div
          class="a-step-item"
          v-for="(value, index) in optDatas"
          :key="'optDatas' + index"
        >
          <div
            class="a-line"
            v-if="
              optDatas.length !== 1 &&
                (index === 0 || optDatas.length === index + 1)
            "
          ></div>
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
            <el-select v-model="value2" multiple placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :clearable="true"
              >
              </el-option>
            </el-select>
            <span @click="clickDel">del</span>
          </div>
        </div>
      </div>
    </div>
    <button @click="clickAdd" class="a-footer-btn">+</button>
  </div>
</template>
<script>
export default {
  name: 'AFuther',
  components: {},
  data() {
    return {
      input: ' ',
      optDatas: [{}, {}, {}],
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
        },
        {
          value: '选项6',
          label: '北京烤鸭'
        }
      ],
      value1: '',
      value2: []
    }
  },
  methods: {
    click() {
      this.$emit('input', this.input)
    },
    clickAdd() {
      this.optDatas.push({})
    },
    clickDel() {
      this.optDatas.shift()
    }
  }
}
</script>
<style lang="scss" scoped>
.a-wrapper {
  position: relative;
  display: flex;
  // align-items: center;

  .a-border-box {
    position: absolute;
    z-index: 1;
    width: 200px;
    border-left: 1px solid #ccc;
    .a-futher {
      position: absolute;
      left: 0;
      top: 50%;
      z-index: 3;
      display: inline-block;
      padding: 4px;
      border: 1px solid #ccc;

      transform: translate(-50%, -50%);
      background-color: #fff;
    }
  }
  .a-content-container {
    position: relative;
    z-index: 5;
  }
}
.a-steps-container {
  position: relative;
  z-index: 4;

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
    width: 120px;
    height: 1px;
    background-color: #000;
  }
}
.a-step-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 10px 10px 0px;
  transform: translateY(-20px);
  margin-left: 100px;
  background-color: #fff;
  .a-line {
    position: absolute;
    left: -100px;
    width: 100px;
    height: 1px;
    background-color: #ccc;
  }
}
/deep/.el-select__tags {
  max-height: 28px;
  overflow-y: auto;
}
</style>
