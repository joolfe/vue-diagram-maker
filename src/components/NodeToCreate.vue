<template>
    <div class="node-adapter" data-id="node-adapter" data-type="DiagramMaker.PotentialNode"
    data-draggable="true" data-event-target="true" >
      <InnerNode :adapter_id="adapter_id" :adapter_name="adapter_name"></InnerNode>
    </div>
</template>

<script>
import InnerNode from './InnerNode.vue'

export default {
  components: { InnerNode },
  props: ['adapter_id', 'adapter_name'],
  data () {
    return {}
  }
}
</script>

<style>

</style>
