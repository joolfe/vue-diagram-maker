<template>
    <div class="dm-node-wrap">
      <div class="dm-node-icon">
        <span><i :class="icon"></i></span>
      </div>
      <div class="dm-node-text">
        <div class="text-head">{{ adapter_id }}</div>
        <div class="text-little">{{ adapter_name }}</div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['adapter_id', 'adapter_name'],
  data () {
    return {
      icon: 'el-icon-help'
    }
  },
  computed: {}
}
</script>

<style>
.dm-node-wrap {
  padding: 10px;
}

.dm-node-icon {
    display: inline-block;
    vertical-align:middle;
    font-size: 24px;
    color: #abb5c5;
}

.dm-node-text {
    display: inline-block;
    vertical-align:middle;
    margin-left: 10px;
}

.text-head {
    font-size: 12px;
    font-weight: bold;
    text-transform: capitalize;
}

.text-little {
    font-size: 11px;
    text-transform: capitalize;
    color: #9197a3;
}
</style>
