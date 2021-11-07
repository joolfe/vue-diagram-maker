<template>
    <div class="node-adapter" ref="adapter-node">
      <InnerNode :adapter_id="adapter_id" :adapter_name="adapter_name"></InnerNode>
    </div>
</template>

<script>
import InnerNode from './InnerNode.vue'

export default {
  components: { InnerNode },
  props: ['node'],
  data () {
    return {
      adapter_id: this.node.consumerData.adapter_id,
      adapter_name: this.node.consumerData.adapter_name
    }
  }
}
</script>

<style>
.node-adapter {
  border: 1px solid #e9ecef !important;
  background-color: white;
  border-radius: 6px;
  -webkit-box-shadow: 0px 2px 1px 0px rgba(224, 224, 224, 0.47);
  box-shadow: 0px 2px 1px 0px rgba(224, 224, 224, 0.47);
}

.dm-node .dm-content {
  z-index: 0;
}
</style>
