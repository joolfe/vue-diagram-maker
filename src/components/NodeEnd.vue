<template>
    <div :class="style" ref="adapter-node">
      <InnerNode :adapter_id="adapter_id" :icon_class="icon"></InnerNode>
    </div>
</template>

<script>
import InnerNode from './InnerNode.vue'

const ICONS = {
  node_success: 'el-icon-success',
  node_fail: 'el-icon-error'
}

export default {
  isEndNode: function (node) {
    if (node.typeId === 'node_success' || node.typeId === 'node_fail') {
      return true
    }
    return false
  },
  components: { InnerNode },
  props: ['node'],
  data () {
    return {
      adapter_id: this.node.consumerData.adapter_id,
      icon: ICONS[this.node.typeId],
      style: 'node-adapter node-end ' + this.node.typeId
    }
  }
}
</script>

<style>
.node-adapter.node-end  {
  border-radius: 30px;
}
.node-adapter.node-end .dm-node-wrap {
  padding: 6px 15px;
}
.node-adapter.node-end.node_success .dm-node-icon {
  color: #67C23A;
}
.node-adapter.node-end.node_fail .dm-node-icon {
  color: #E6A23C;
}
.node-adapter.node-end .text-head {
  padding-bottom: 2px;
}
</style>
