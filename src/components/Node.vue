<template>
    <div class="dm-node-wrap" ref="rectangleNode" >
      <div class="dm-node-icon">
        <span><i class="el-icon-help"></i></span>
      </div>
      <div class="dm-node-text">
        <div class="text-head">{{ text }}</div>
        <div class="text-little">Description</div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['counterValue', 'dispatch', 'node'],
  data () {
    return {
      val: '',
      counter: this.counterValue,
      text: this.node.consumerData.text
    }
  },
  computed: { },
  methods: {
    count: function (event) {
      console.log(this.node.id)
      console.log(this.dispatch)
      this.counter = this.counter + 1
      this.dispatch({
        type: 'CONSUMER_DATA_CHANGED',
        payload: {
          nodeId: this.node.id,
          consumerData: { text: 'hello' }
        }
      })
      // this.$emit('dummyEvent', { data: 'dummyData' })
    }
  }
}
</script>

<style>

</style>
