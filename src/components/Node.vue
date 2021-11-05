<template>
    <div class="rectangle" ref="rectangleNode" >
        <p>{{ text }} {{ counter }} </p>
        <button v-on:click="count" data-event-target="true" data-draggable="true">Button</button>
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
