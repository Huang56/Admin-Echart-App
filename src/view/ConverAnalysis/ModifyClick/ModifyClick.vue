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
      <slot>
        <span>{{ input }}</span>
        <el-tooltip
          placement="top"
          v-model="treeVisible"
          :manual="true"
          id="el-tooltip"
        >
          <div slot="content">
            <el-tree
              :data="data"
              :props="defaultProps"
              @node-click="handleNodeClick"
            ></el-tree>
          </div>
          <i :class="icon2" @click.stop="treeVisible = !treeVisible"></i>
        </el-tooltip>
        <i :class="icon" @click.stop="editBtn(true)"></i>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModifyClick',
  props: {
    icon: {
      type: String,
      default: () => 'el-icon-edit'
    },
    icon2: {
      type: String,
      default: () => 'el-icon-plus'
    },
    item: {
      type: Object,
      default: () => {
        return {
          text: ''
        }
      }
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
      width: 158,
      visible: false,
      treeVisible: false,
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  components: {},
  methods: {
    editBtn(data) {
      // console.log('editBtn', this.$refs.elInput)
      this.$nextTick(() => {
        // this.$refs.elInput.focus()
        // this.$refs.elInput.select()
      })
      this.show = data
      const text = this.input
      const index = this.index
      console.log('index', index, text)
      const params = {
        text: text,
        index: index
      }
      if (data) return
      this.$emit('editInput', params)
      this.$bus.emit('editInput', params)
    },
    handleNodeClick(data) {
      console.log(data)
    }
  },
  mounted() {
    // document.removeEventListener('click', () => {
    //   console.log('removeEventListener')
    // })
    document.addEventListener('click', () => {
      if (this.treeVisible) {
        this.treeVisible = false
      }
    })
    this.input = this.item.text && this.item.text
  },
  directives: {
    // 注册一个局部的自定义指令 v-focus
    focus: {
      // 指令的定义
      inserted: el => {
        // 聚焦元素
        console.log('inserted')
        el.querySelector('input').focus()
      },
      upbind: (el, binding, vnode) => {
        console.log('vnode', vnode)
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
