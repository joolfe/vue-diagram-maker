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
  data () {
    return {
      adapter_id: 'Adapter Id',
      adapter_name: 'Adapter Name'
    }
  }
}
</script>

<style>

</style>
