<template>
  <div id="app">
    <el-container>
      <el-header height="61">
        <TopMenu></TopMenu>
      </el-header>
        <el-container>
        <el-main>
          <DiagramEditor></DiagramEditor>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu.vue'
import DiagramEditor from './components/DiagramEditor.vue'

export default {
  name: 'app',
  components: { TopMenu, DiagramEditor }
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

.el-header {
  border-bottom: 1px solid #e6e6e6;
}
</style>
