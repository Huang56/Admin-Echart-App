<template>
  <el-container>
    <el-aside width="200px" class="side_container">
      side
    </el-aside>
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
      <div class="common_container">
        <TableComp />
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
      oringinOptions: {}
    }
  },
  components: {
    TableComp,
    EchartComp
  },
  methods: {
    pullEventData () {
      getEventData().then(res => {
        console.log(res)
        this.options = res.data
        this.oringinOptions = res.data
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
