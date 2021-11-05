<template>
    <div class="edgeBadge" ref="tagEdge">{{ val }}</div>
</template>

<script>
export default {
  props: ['dispatch', 'edge'],
  data () {
    return {
      val: 'hola'
    }
  },
  computed: { },
  methods: { }
}
</script>

<style>
.edgeBadge {
    background-color: white;
    border: 1px solid grey;
    padding: 5px;
    border-radius: 3px;
}
</style>
