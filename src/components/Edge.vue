<template>
    <div class="dm-edge-badge" ref="tagEdge">
      <i class="el-icon-check"></i>
    </div>
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
.dm-edge-badge {
  background-color: white;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  font-size: 12px;
}

.dm-edge .dm-path.dm-path-inner {
  stroke-width: 1.7px;
}
</style>
