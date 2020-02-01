<template>
  <el-container>
    <el-aside width="200px" class="side_container">side</el-aside>
    <el-main>
      <div class="common_container">
        <EchartComp :options="options" :index="1" />
      </div>
      <div class="common_container">
        <div>
          <el-radio-group v-model="radio" @change="changeBtn">
            <el-radio-button label="bar">Bar</el-radio-button>
            <el-radio-button label="line">Line</el-radio-button>
            <el-radio-button label="stack">Stack</el-radio-button>
            <el-radio-button label="percent">Percent</el-radio-button>
            <el-radio-button label="pie">Pie</el-radio-button>
          </el-radio-group>
        </div>
        <EchartComp :options="options" :index="2" />
      </div>
      <el-button type="primary" @click="pullEventData()">切换数据</el-button>
      <div class="common_container">
        <TableComp
          :tableData="tableData"
          :tableDataLabel="tableDataLabel"
          :multipleSelection="multipleSelection"
          @mulSelectedData="onMulSelectedData"
          @mulSelectedAllData="onMulSelectedAllData"
        />
      </div>
    </el-main>
  </el-container>
</template>
<script>
import TableComp from './TableComp/TableComp'
import EchartComp from './EchartComp/EchartComp'
import { getEventData } from '@/api/EventAnalysysApi'
export default {
  name: 'EventAnalysis',
  data () {
    return {
      radio: 'line',
      options: {},
      oringinOptions: {},
      tableDataLabel: [],
      tableData: [],
      multipleSelection: [],
      switch: false
    }
  },
  components: {
    TableComp,
    EchartComp
  },
  methods: {
    pullEventData () {
      this.switch = !this.switch
      const params = {
        switch: this.switch
      }
      getEventData(params).then(res => {
        console.log(res)
        this.options = res.data
        this.oringinOptions = res.data
        if (res.code === 200) {
          this.handleTableData(res.data.chart)
        }
      })
    },
    changeBtn (val) {
      //  drawEchart
      let options
      console.log('val === ', val === 'percent')
      if (val === 'percent') {
        options = this.percentEchart()
      } else if (val === 'pie') {
        options = this.pieEchart()
      } else {
        options = this.changeEchart(val)
      }

      this.options = options
    },
    percentEchart () {
      const options = this.$deepCopy(this.oringinOptions)
      const arr = []
      options.series.forEach(element => {
        element.stack = '总量'
        element.areaStyle = {}
        element.type = 'line'
        element.data.forEach((item, index) => {
          const isTrue = arr[index] ? 1 : 0
          if (!isTrue) arr[index] = 0
          arr[index] += item
        })
      })
      arr.forEach((item, index) => {
        options.series.forEach(element => {
          element.data[index] = ((element.data[index] / item) * 100).toFixed(2)
        })
      })
      return options
    },
    pieEchart () {
      const options = this.$deepCopy(this.oringinOptions)
      options.series.forEach(element => {
        element.type = 'pie'
        element.stack && delete element.stack
        element.areaStyle && delete element.areaStyle
      })
      return options
    },
    changeEchart (val) {
      const options = this.$deepCopy(this.oringinOptions)
      options.series.forEach(element => {
        const isStack = val === 'stack' ? 1 : 0
        if (!isStack) {
          element.type = val
          element.stack && delete element.stack
          element.areaStyle && delete element.areaStyle
        } else {
          element.stack = '总量'
          element.areaStyle = {}
          element.type = 'line'
          console.log('sdas')
        }
      })
      return options
    },
    handleTableData (val) {
      const tableData = []
      const tableDataLabel = []
      const series = val.series
      const xAxis = val.xAxis.data
      xAxis.forEach((item, index) => {
        // const tableDataItem = {}
        const tableDataLabelItem = {}
        tableDataLabelItem.prop = item
        tableDataLabelItem.label = item
        tableDataLabelItem.width = '120'
        tableDataLabelItem.sortable = true
        tableDataLabel[index] = tableDataLabelItem
      })
      series.forEach((item, index) => {
        const tableDataItem = {}
        item.data.forEach((item, index) => {
          const prop = xAxis[index]
          tableDataItem[prop] = item
        })
        tableDataItem.event_ponint = []
        tableDataItem.sum = item.sum
        tableDataItem.avg = item.avg
        if (index < 20) {
          tableDataItem.selected = true
          tableDataItem.checkbox_disabled = true
        } else {
          tableDataItem.selected = false
          tableDataItem.checkbox_disabled = false
        }
        if (series.length === 1) {
          tableDataItem.checkbox_disabled = false
        }
        tableDataItem.id = index
        tableData[index] = tableDataItem
      })

      const fontLable = [
        { prop: 'event_ponint', label: '事件.指标', width: '140' },
        { prop: 'sum', label: '总数' },
        { prop: 'avg', label: '平均值', width: '140' }
      ]
      this.tableDataLabel = [...fontLable, ...tableDataLabel]
      this.tableData = tableData
      console.log('tableDataLabel', this.tableDataLabel)
      console.log('tableData', this.tableData)
    },
    onMulSelectedData (val, rowId) {
      const length = val.length
      const tableData = this.$deepCopy(this.tableData)

      if (length === 1) {
        tableData.forEach(item => {
          item.checkbox_disabled = true
          item.selected = false
          const isTrue = val.some((filterItem) => {
            return item.id === filterItem.id
          })
          if (isTrue) {
            item.selected = true
            item.checkbox_disabled = false
          }
        })
      } else if (length < 20) {
        tableData.forEach(item => {
          item.checkbox_disabled = true
          if (item.id === rowId) {
            item.selected = !item.selected
          }
        })
      } else if (length === 20) {
        tableData.forEach(item => {
          const isTrue = val.some((filterItem) => {
            return item.id === filterItem.id
          })
          if (isTrue) {
            item.selected = true
            item.checkbox_disabled = true
          } else {
            item.selected = false
            item.checkbox_disabled = false
          }
        })
      }
      this.tableData = tableData
    },
    onMulSelectedAllData (val) {
      const length = val.length
      const tableData = this.$deepCopy(this.tableData)
      if (length === 20) {
        tableData.forEach((item, index) => {
          item.checkbox_disabled = true
          if (index === 0) {
            item.selected = true
            item.checkbox_disabled = false
          } else {
            item.selected = false
          }
        })
      } else if (length > 20) {
        let flag = tableData.filter((item, index) => {
          return item.selected === true
        }).length
        if (flag < 20) {
          tableData.forEach((item, index) => {
            item.checkbox_disabled = true
            const isFalse = item.selected === false
            if (flag < 20 && isFalse) {
              item.selected = true
              flag++
            } else if (item.selected !== true) {
              item.selected = false
              item.checkbox_disabled = false
            }
          })
        }
      }
      this.tableData = tableData
      console.log('onMulSelectedALLData162', val)
    }
  },
  mounted () {
    this.pullEventData()
  }
}
</script>

<style lang="scss" scoped>
.side_container {
  background-color: skyblue;
}

.common_container {
  padding: 20px;
}
</style>
