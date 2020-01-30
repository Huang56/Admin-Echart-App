<template>
<el-container>
  <el-header class="top_header">
    <div>Aaron-Admin</div>
    <TopMenu class="top_menu"/>
    <div>Login_out</div>
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
  .top_header {
    display: flex;
    align-items: center;
    padding: 0 60px 1px;
    border-bottom: 1px solid #e6e6e6; 
    .top_menu{
      flex: 1;
      margin: 0 80px;
    }
  }
  .el-main{
    height: calc(100% - 60px);
  }
}

.el-menu.el-menu--horizontal{
  border-bottom: none
}
</style>