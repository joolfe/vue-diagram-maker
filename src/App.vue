<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <DiagramEditor/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DiagramEditor from './components/DiagramEditor.vue'

export default {
  name: 'App',
  components: { HelloWorld, DiagramEditor }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
