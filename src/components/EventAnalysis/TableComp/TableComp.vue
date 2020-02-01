<template>
  <el-table
    ref="tableRef"
    :data="tableDataComp"
    border
    @select="handleSelectionChange"
    @select-all="handleSelectionChangeAll"
    style="width: 100%"
  >
    <el-table-column type="selection" :selectable="handleDisable" width="55"></el-table-column>
    <el-table-column
      v-for="(item,index) in tableDataLabelComp"
      :prop="item.prop"
      :label="item.label"
      :width="item.width"
      :key="index"
      :sortable="item.sortable"
    ></el-table-column>
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
  data () {
    return {
      multipleSelectionComp: [],
      tableDataComp: []
    }
  },
  computed: {
    tableDataLabelComp: function () {
      return this.tableDataLabel
    }
  },
  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (selection, row) {
      // 点击触发

      this.$emit('mulSelectedData', selection, row.id)
    },
    handleSelectionChangeAll (selection) {
      // 点击ALL触发
      this.handleCheckData()
      this.$emit('mulSelectedAllData', selection)
    },
    handleDisable (row, index) {
      // 禁止点击
      if (row.checkbox_disabled) {
        return true
      } else {
        return false
      }
    },
    handleCheckData () {
      // 默认选中
      console.log('handleCheckData', this.tableDataComp)
      this.$refs.tableRef.clearSelection()
      const table = this.tableDataComp // 从后台获取到的数据
      table.forEach(item => {
        if (item.selected) {
          // toggleRowSelection可以切换表格行的选中状态,接收两个参数第一个是要切换的行,这里需要的对象格式,
          // 第二个参数是设置选中还是不选中,不传的话会取与原来相反的选择状态
          // 方法调用要等元素挂载才后才能执行,这里加一个判断,这个方法要放在数据获取后
          this.$refs.tableRef && this.$refs.tableRef.toggleRowSelection(item, true)
        }
      })
    }
  },
  updated () {
    console.log('updated')
    this.handleCheckData()
  },
  watch: {
    tableData: {
      immediate: true,
      handler (val) {
        this.tableDataComp = this.tableData
      },
      deep: true
    }
  }
}
</script>

<style lang='scss' scoped>
.side_container {
  background-color: skyblue;
}
</style>

