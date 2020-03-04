<template>
  <el-container>
    <el-aside width="200px"><SideNav /></el-aside>
    <el-main>Main</el-main>
  </el-container>
</template>
<script>
import SideNav from './SideNav/SideNav'

export default {
  name: 'Dashboard',
  components: {
    SideNav
  }
}
</script>
<style lang="scss" scoped></style>
