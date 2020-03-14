<template>
  <el-table
    ref="tableRef"
    :data="tableDataComp"
    border
    @select="handleSelectionChange"
    @select-all="handleSelectionChangeAll"
    :max-height="300"
    style="width: 100%"
  >
    <el-table-column
      type="selection"
      :selectable="handleDisable"
      width="55"
    ></el-table-column>
    <template v-for="(item, index) in tableDataLabelComp">
      <el-table-column
        v-if="item.prop === 'event_ponint'"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :key="index"
        :sortable="item.sortable"
      >
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row)"
            type="text"
            size="small"
            :disabled="!scope.row.selected"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
      <el-table-column
        v-if="item.prop !== 'event_ponint'"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :key="index"
        :sortable="item.sortable"
      >
      </el-table-column>
    </template>
  </el-table>
</template>
<script>
export default {
  name: 'TableComp',
  props: {
    tableDataLabel: {
      type: Array,
      default: () => {
        return []
      }
    },
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    },
    multipleSelection: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      multipleSelectionComp: [],
      tableDataComp: []
    }
  },
  computed: {
    tableDataLabelComp: function() {
      return this.tableDataLabel
    }
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(selection, row) {
      // 点击触发

      this.$emit('mulSelectedData', selection, row.id)
    },
    handleSelectionChangeAll(selection) {
      // 点击ALL触发
      this.handleCheckData()
      this.$emit('mulSelectedAllData', selection)
    },
    handleDisable(row, index) {
      // 禁止点击
      if (row.checkbox_disabled) {
        return true
      } else {
        return false
      }
    },
    handleCheckData() {
      // 默认选中
      console.log('handleCheckData', this.tableDataComp)
      this.$refs.tableRef.clearSelection()
      const table = this.tableDataComp // 从后台获取到的数据
      table.forEach(item => {
        if (item.selected) {
          // toggleRowSelection可以切换表格行的选中状态,接收两个参数第一个是要切换的行,这里需要的对象格式,
          // 第二个参数是设置选中还是不选中,不传的话会取与原来相反的选择状态
          // 方法调用要等元素挂载才后才能执行,这里加一个判断,这个方法要放在数据获取后
          this.$refs.tableRef &&
            this.$refs.tableRef.toggleRowSelection(item, true)
        }
      })
    },
    handleClick(val) {
      // 默认选中
      this.$emit('eventBtn', val)
    }
  },
  updated() {
    console.log('updated')
    this.handleCheckData()
  },
  mounted() {
    // 获取需要绑定的table

    this.dom = this.$refs.tableRef.bodyWrapper

    this.dom.addEventListener('scroll', () => {
      // 滚动距离
      console.log('scroll')

      const scrollTop = this.dom.scrollTop

      // 变量windowHeight是可视区的高度

      const windowHeight = this.dom.clientHeight || this.dom.clientHeight

      // 变量scrollHeight是滚动条的总高度

      const scrollHeight = this.dom.scrollHeight || this.dom.scrollHeight

      if (scrollTop + windowHeight === scrollHeight) {
        // 获取到的不是全部数据 当滚动到底部 继续获取新的数据

        if (!this.allData) this.getMoreLog()

        console.log(
          'scrollTop',
          scrollTop + 'windowHeight',
          windowHeight + 'scrollHeight',
          scrollHeight
        )
      }
    })
  },
  watch: {
    tableData: {
      immediate: true,
      handler(val) {
        this.tableDataComp = this.tableData
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.side_container {
  background-color: skyblue;
}
</style>
