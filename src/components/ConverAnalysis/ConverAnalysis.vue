
<template>
    <el-container>
     <el-aside width="200px" class="side_container">
         side
     </el-aside>
     <el-main>
        <div class="common_container">
              <EchartComp :options="options"/>
         </div>
         <div class="common_container">
               <div>
                    <el-radio-group v-model="radio" @change="changeBtn">
                    <el-radio-button label="bar">Bar</el-radio-button>
                    <el-radio-button label="line">Line</el-radio-button>
                    <el-radio-button label="funel">Funel</el-radio-button>
                    <el-radio-button label="stack">Stack</el-radio-button>
                    <el-radio-button label="percent">Percent</el-radio-button>
                    <el-radio-button label="pie">Pie</el-radio-button>
                    </el-radio-group>
                </div>
              <EchartComp :options="options"/>
         </div>
         <div class="common_container">
             <TableComp />
         </div>
     </el-main>
</el-container>
</template>
<script>
/* eslint-disable no-console */
import TableComp from './TableComp/TableComp'
import EchartComp from './EchartComp/EchartComp'
import { getEventData } from '@/api/EventAnalysysApi'
export default { 
    name: "ConverAnalysis",
    data(){
        return {
            radio: 'line',
            options: {}
        }
    },
    components: {
        TableComp,
        EchartComp
     },
     methods:{
         pullEventData(){
             getEventData().then(res => {
                 console.log(res)
                 this.options = res.data
             })
         },
         changeBtn(val){
            //  drawEchart
            let options = this.$deepCopy(this.options)
            options.series.forEach(element => {
                
                const isStack = val === 'stack' ? 1 : 0
                if(!isStack) {
                    element.type = val
                    element.stack && delete element.stack
                    element.areaStyle && delete element.areaStyle
                } else {
                    element.stack = '总量'
                    element.areaStyle = {}
                    element.type = 'line'
                }
            });
            console.log('options',options);
            
             this.options = options
         }
     },
     mounted(){
         this.pullEventData()
     }
    };
</script>



<style lang='scss' scoped>
.side_container{
    background-color: skyblue;
}

.common_container{
    padding: 20px;
}
</style>


