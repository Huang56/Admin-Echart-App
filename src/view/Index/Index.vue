<template>
<el-container>
  <el-header>
    <TopMenu />
  </el-header>
  <el-main>
    <router-view>  </router-view>
  </el-main>
</el-container>
</template>
<script>
import TopMenu from './TopMenu/TopMenu'
export default { 
  name: "",
  components: {
    TopMenu
  }
};
</script>
<style lang='scss' scoped>
.main {
  width: 100% ;
  height: 100% ;
}

.el-container {
  height: 100%;
  width: 100%;
.el-main{
  height: calc(100% - 60px);
}
}
</style>