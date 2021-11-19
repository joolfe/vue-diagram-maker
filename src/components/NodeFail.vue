<template>
    <div class="node-adapter node-fail" ref="adapter-node">
      <InnerNode :adapter_id="adapter_id" icon_class="el-icon-circle-close"></InnerNode>
    </div>
</template>

<script>
import InnerNode from './InnerNode.vue'

export default {
  components: { InnerNode },
  props: ['node'],
  data () {
    return {
      adapter_id: this.node.consumerData.adapter_id
    }
  }
}
</script>

<style>
.node-adapter.node-fail {
  border-radius: 30px;
}

.node-adapter.node-fail .dm-node-wrap {
  padding: 6px 15px;
}

</style>
