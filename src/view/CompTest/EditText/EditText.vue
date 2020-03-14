<template>
  <div class="modify-click">
    <div class="modify-click-item" v-if="show">
      <el-input
        ref="elInput"
        v-model="input"
        placeholder="请输入内容"
        size="mini"
        @blur="editBtn(false)"
        v-focus
      />
    </div>
    <div v-show="!show" class="modify-click-item">
      <span class="a-title">{{ text }}</span>
      <slot>
        <i :class="icon" @click="editBtn(true)"></i>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EditText',
  props: {
    icon: {
      type: String,
      default: () => 'el-icon-edit'
    },
    text: {
      type: [Number, String],
      default: () => ''
    },
    index: {
      type: Number,
      default: () => 0
    }
  },
  data() {
    return {
      input: '',
      show: false,
      width: 158
    }
  },
  components: {},
  methods: {
    editBtn(data) {
      this.show = data
      const text = this.input
      const index = this.index
      if (data) return
      this.$emit('editText', text, index)
      this.$bus.emit('editText', text, index)
    }
  },
  mounted() {
    this.input = this.text
  },
  directives: {
    // 注册一个局部的自定义指令 v-focus
    focus: {
      // 指令的定义
      inserted: el => {
        // 聚焦元素
        el.querySelector('input').focus()
      },
      upbind: (el, binding, vnode) => {
        el.querySelector('input').blur()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.modify-click {
  display: flex;
  align-items: center;
  width: 158px;
  height: 28px;
  margin: 0;
  .modify-click-item {
    display: flex;
    flex: 1;
  }
}
</style>
