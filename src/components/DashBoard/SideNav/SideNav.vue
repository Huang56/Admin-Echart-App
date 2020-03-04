<template>
  <div class="side-nav">
    <el-row>
      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span class="linit_text">导航导航导航导航导航导航导航导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组sadasda一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
/* eslint-disable no-console */
export default {
  name: 'SideNav',
  props: {
    menuData: {
      type: Array,
      default: () => {
        return [
          {
            index: 'nav1',
            icon: 'el-icon-location',
            text: '导航导航导航导航导航导航导航导航一'
          }
        ]
      }
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.side-nav {
  height: 100%;
  width: 100%;
  /deep/ .el-row {
    height: 100%;
    .el-col {
      height: 100%;
    }
    .el-menu-vertical-demo {
      height: 100%;
    }
  }
}
.el-menu-item {
  text-align: left;
}
.el-menu-item-group__title,
/deep/.el-submenu__title {
  text-align: left;
}
.linit_text {
  display: inline-block;
  width: 100px;
  @extend %Single_Line_Omitted;
}
</style>
