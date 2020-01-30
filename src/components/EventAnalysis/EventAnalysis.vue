<template>
    <el-container>
     <el-aside width="200px" class="side_container">
         side
     </el-aside>
     <el-main>
         <div class="common_container">
              <EchartComp />
             <TableComp />
         </div>
     </el-main>
</el-container>
</template>
<script>
import TableComp from './TableComp/TableComp'
import EchartComp from './EchartComp/EchartComp'
export default { 
    name: "EventAnalysis",
    components: {
        TableComp,
        EchartComp
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


