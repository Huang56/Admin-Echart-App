
<template>
    <el-container>
     <el-aside width="200px" class="side_container">
         side
     </el-aside>
     <el-main>
         <div class="common_container">
              <EchartComp />
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
    name: "EventAnalysis",
    components: {
        TableComp,
        EchartComp
     },
     methods:{
         pullEventData(){
             getEventData().then(data => {
                 console.log(data)
             })
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


