<template>
<el-container>
  <el-header>Header</el-header>
  <el-main>
    <router-view>  </router-view>
  </el-main>
</el-container>
</template>
<script>
export default { name: "" };
</script>
<style lang='scss' scoped>
.main {
        width: 100%      ;
  height: 100%     ;
}
</style>