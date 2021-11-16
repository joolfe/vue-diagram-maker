<template>
    <div class="header-container">
      <div class="logo-image">
        <img src="/logo.svg" alt="element-logo" class="header-logo" style="width:35px">
        <div><span class="san-red">Authn</span> <span class="san-dark">Flow</span> <span class="san-red">Editor</span></div>
      </div>
      <el-menu :default-active="activeIndex" class="el-menu-top" mode="horizontal" @select="handleSelect">
        <el-submenu index="1">
            <template slot="title">Diagram</template>
            <el-menu-item index="1-1">Open...</el-menu-item>
            <el-menu-item index="1-2">Import</el-menu-item>
            <el-menu-item index="1-3">Export</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">New</el-menu-item>
        <el-menu-item index="3">History</el-menu-item>
      </el-menu>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.el-menu-top {
  float: right;
}
.el-menu-top.el-menu.el-menu--horizontal {
  border-bottom: 0px;
}
.header-container {
  height: 100%;
}
.logo-image {
  display: inline-flex;
  height: 100%;
  align-items: center;
}
.logo-image > div {
  padding-left: 13px;
  font-weight: 900;
  font-size: 18px;
  padding-bottom: 5px;
}
</style>
