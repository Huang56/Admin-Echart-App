
<template>
  <div :id="id" ref="chartref" style="width:100%;height:376px"></div>
</template>
<script>
/* eslint-disable no-console */
import echarts from './lib/index'
import macarons from './lib/macaron'
export default {
  name: 'EchartComp',
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }]
        }
      }
    },
    id: {
      type: [Number, String],
      default: () => {
        return Math.random()
      }
    }
  },
  data () {
    return {
      instance: '',
      option: {}
    }
  },
  methods: {
    initEchart () {
      this.instance = echarts.init(document.getElementById(this.id), macarons)
    },
    drawEchart () {
      this.instance && this.instance.setOption(this.option)
    },
    resiseEchart () {
      window.onresize = () => {
        this.instance.resize()
      }
    }
  },
  mounted () {
    this.initEchart()
    this.drawEchart()
    this.$nextTick(this.resiseEchart())
  },
  watch: {
    options: {
      immediate: true,
      handler (val) {
        this.option = val
        this.drawEchart()
      },
      deep: true
    }
  }
}
</script>
<style lang='scss' scoped></style>
