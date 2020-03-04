<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="/dashboard">{{
      $t('top_menu.dashboard')
    }}</el-menu-item>
    <el-submenu index="/chart">
      <template slot="title">图形</template>
      <el-menu-item index="/chart/line">折现图</el-menu-item>
      <el-menu-item index="/chart/bar">柱形图</el-menu-item>
      <el-menu-item index="/chart/funnel">漏斗图</el-menu-item>
      <el-menu-item index="/chart/funnel">桑基图</el-menu-item>
    </el-submenu>
    <el-menu-item index="/dragvue" disabled>dragvue</el-menu-item>
    <el-menu-item index="/eventanalysis">{{
      $t('top_menu.event_analysis')
    }}</el-menu-item>
    <el-menu-item index="/converanalysis">{{
      $t('top_menu.convert_analysis')
    }}</el-menu-item>
    <el-menu-item index="/action">{{
      $t('top_menu.action_check')
    }}</el-menu-item>
    <el-menu-item index="/user">{{ $t('top_menu.user') }}</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: ''
    }
  },
  mounted() {
    this.activeIndex = this.$route.path
  },
  methods: {
    handleSelect(key, keyPath) {
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
<style lang="scss" scoped>
.el-menu-demo {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  height: 100%;
  min-width: 778px;
  .el-menu-item {
    padding: 0 20px;
  }
}
</style>
