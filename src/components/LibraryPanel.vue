<template>
    <div data-event-target="true" data-dropzone="true">
        <div class="panel-section">Adapters</div>
        <NodeToCreate></NodeToCreate>
        <div class="panel-section">Selectors</div>
    </div>
</template>

<script>
import NodeToCreate from './NodeToCreate.vue'
export default {
  components: { NodeToCreate },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style>
.panel-section {
  color: #909399;
  font-size: 13px;
  font-weight: bold;
  padding: 20px 0px 13px 0px;
}
</style>
