<template>
  <el-container>
    <el-header class="top_header">
      <div class="a-logo-container">
        <img src="@/assets/images/logo.png" alt="logo" class="a-logo" />
      </div>
      <TopMenu class="top_menu" />
      <div>
        <el-dropdown
          trigger="click"
          @command="selectLagurage"
          @click="selectLagurage"
        >
          <span class="el-dropdown-link">
            {{ selected }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus" command="中文">{{
              chinese
            }}</el-dropdown-item>
            <el-dropdown-item icon="el-icon-plus" command="English">{{
              english
            }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-main>
      <router-view> </router-view>
    </el-main>
  </el-container>
</template>
<script>
import TopMenu from './TopMenu/TopMenu'
export default {
  name: '',
  data() {
    return {
      chinese: '中文',
      english: 'English',
      selected: '中文'
    }
  },
  components: {
    TopMenu
  },
  methods: {
    selectLagurage(val) {
      this.$i18n.locale = val
      this.selected = val
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
}

.el-container {
  height: 100%;
  width: 100%;
  .top_header {
    display: flex;
    align-items: center;
    padding: 0 60px 1px;
    border-bottom: 1px solid #e6e6e6;
    .a-logo-container {
      display: flex;
      align-items: center;
      .a-logo {
        width: 40px;
      }
    }

    .top_menu {
      flex: 1;
      margin: 0 80px;
    }
  }
  .el-main {
    height: calc(100% - 60px);
  }
}

.el-menu.el-menu--horizontal {
  border-bottom: none;
}
</style>
