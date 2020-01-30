
<template>
  <div id="echartId" ref="chartref" style="width:100%;height:376px"></div>
</template>
<script>
/* eslint-disable no-console */
import echarts from './lib/index'
import macarons from './lib/macaron'
export default { 
    name: "EchartComp", 
    data(){
        return {
            instance: '',
            options: {
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
    methods:{
        initEchart(){
            this.instance = echarts.init(document.getElementById("echartId"), macarons)
        },
        drawEchart(){
            this.instance.setOption(this.options)
        },
        resiseEchart(){
            window.onresize = ()=> {
            this.instance.resize()
         
        };
      }
    },
    mounted(){
        this.initEchart()
        this.drawEchart()
        this.$nextTick(this.resiseEchart());
    }
};
</script>
<style lang='scss' scoped></style>