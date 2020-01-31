<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="/dashboard">{{
      $t("top_menu.dashboard")
    }}</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="/eventanalysis">事件分析</el-menu-item>
    <el-menu-item index="/converanalysis">转化分析</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: ''
    }
  },
  mounted () {
    this.activeIndex = this.$route.path
  },
  methods: {
    handleSelect (key, keyPath) {
      // eslint-disable-next-line no-console
      console.log(key, keyPath)
      this.$router.push(key).catch(err => {
        err
      })
      this.activeIndex = key
    }
  }
}
</script>
