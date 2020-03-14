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
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
            }
          ]
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
  data() {
    return {
      instance: '',
      triggerOn: false,
      option: {
        title: {
          text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis',
          triggerOn: 'click',
          alwaysShowContent: true,
          show: true,
          formatter: (params, ticket, callback) => {
            let htmlStr = this.triggerOn ? '1' : '0'
            const isTrue = this.triggerOn ? '1' : '0'
            if (isTrue) {
              htmlStr = this.toHtml(params)
            } else {
              htmlStr = this.toHtml(params)
            }
            return htmlStr
          }
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
          formatter: function(name) {
            return <span>legend</span> + name
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
    }
  },
  methods: {
    initEchart() {
      this.instance = echarts.init(document.getElementById(this.id), macarons)
    },
    drawEchart() {
      this.instance && this.instance.setOption(this.option)
    },
    resiseEchart() {
      window.onresize = () => {
        this.instance.resize()
        this.onEvent()
      }
    },
    onEvent() {
      if (!this.instance) return
      this.instance.off('click', function(params) {
        // console.log(params)
      })
      this.instance.on('click', 'series', (params, event) => {
        this.triggerOn = true
        this.option.tooltip.triggerOn = 'click'
        this.option.tooltip.trigger = 'item'
        this.instance.setOption(this.option)
        this.instance.dispatchAction({
          type: 'downplay'
          // 可选，系列 index，可以是一个数组指定多个系列
        })
        this.instance.dispatchAction({
          type: 'hideTip'
        })
        this.instance.dispatchAction({
          type: 'showTip',
          // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
          seriesIndex: params.seriesIndex,
          // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
          dataIndex: params.dataIndex,
          // 可选，数据名称，在有 dataIndex 的时候忽略
          name: params.name
          // 本次显示 tooltip 的位置。只在本次 action 中生效。
          // 缺省则使用 option 中定义的 tooltip 位置。
          // position: [params.event.offsetX, params.event.offsetY]
        })
        this.instance._dom.children[1].style.zIndex = '9999999'
        setTimeout(() => {
          this.instance.dispatchAction({
            type: 'restore'
          })
          // console.log('showTip')
        }, 2000)
      })

      this.instance.off('legendselectchanged', function(params) {
        // console.log(params)
      })
      this.instance.on('legendselectchanged', function(params) {
        // console.log(params)
      })

      this.instance.off('click', 'series.line', function(params, event) {
        // console.log(params, event)
      })
      this.instance.on('click', 'series.line', function(params, event) {
        // event.stopPropagation()
        console.log('series.line')
      })
      this.instance.on('click', 'series.line', function(params, event) {
        // event.stopPropagation()
        console.log('series.line')
      })

      this.instance.on('mouseover', { seriesIndex: 1, name: 'xx' }, function(
        params
      ) {
        // console.log(params)
      })
      this.instance.on('globalout', params => {
        this.triggerOn = false
        this.option.tooltip.triggerOn = 'mousemove'
        this.option.tooltip.trigger = 'axis'
        this.instance.setOption(this.option)
        // this.instance.dispatchAction({
        //   type: 'hideTip'
        // })
        // const this.instance
        console.log('this.instance', this.instance._dom.children[1])
        this.instance._dom.children[1].style.display = 'none'
        this.instance._dom.children[1].style.zIndex = '9999999'
      })
      this.instance.on('mouseout', function(params) {
        // console.log(params)
      })
    },
    toHtml(params) {
      console.log('params', params)
      const isArr = Array.isArray(params)
      let htmlStr = ''
      if (!isArr) {
        return (htmlStr = `<div>seriesName:${params.seriesName}<div/>
             <div id="microscopeMenu">
            <button id="newDateAnnotation" onclick="microscope.createAnnotation();" style="display: block;">新建日期批注</button>
            <button id="saveCohort" onclick="microscope.saveCohort();" style="display: block;">存为用户分群</button>
            <button id="downloadUser" onclick="microscope.downloadUser();" style="display: block;">导出用户</button>
            <button id="previewUser" onclick="microscope.previewUser();">用户预览</button>
            <span id="microscopeInspect" onclick="${this.modal}microscope.resetTooltip();" class="inspectHover">收起</span>
          </div>
        `)
      }
      params.forEach(item => {
        htmlStr += `<div>seriesName:${item.seriesName}<div/>`
      })
      return htmlStr
    },
    modal() {
      this.$message('info')
    }
  },
  mounted() {
    this.initEchart()
    this.onEvent()
    this.drawEchart()
    this.$nextTick(this.resiseEchart())
  },
  watch: {
    options: {
      immediate: true,
      handler(val) {
        // this.option = val
        this.drawEchart()
        // this.onEvent()
      },
      deep: true
    }
  }
}
</script>
<style lang="scss" scoped>
#microscopeMenu {
  position: relative;
  z-index: 9990009;
}
</style>
