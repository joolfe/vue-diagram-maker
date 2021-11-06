<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item>
          Processing Center
        </el-menu-item>
        <el-submenu index="1">
            <template slot="title">Diagram</template>
            <el-menu-item index="1-1">Open...</el-menu-item>
            <el-menu-item index="1-2">Import</el-menu-item>
            <el-menu-item index="1-3">Export</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">New</el-menu-item>
        <el-menu-item index="3">History</el-menu-item>
    </el-menu>
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

<style scoped>

</style>
