<template>
  <div id="app">
    <el-container>
      <el-header>
        <TopMenu></TopMenu>
      </el-header>
        <el-container>
        <el-aside width="200px">
          <SideBar></SideBar>
        </el-aside>
        <el-main>
          <DiagramEditor></DiagramEditor>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu.vue'
import SideBar from './components/SideBar.vue'
import DiagramEditor from './components/DiagramEditor.vue'

export default {
  name: 'app',
  components: { TopMenu, DiagramEditor, SideBar }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

body, html {
  height: 100%;
  margin: 0px;
}

.el-container.is-vertical {
  height: 100%;
}

.el-main {
  padding: 0px !important;
}
</style>
