<template>
  <div id="main">
    <div id="diagram-container" ref="diagramRoot">
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import 'diagram-maker/dist/diagramMaker.css'

import { produce } from 'immer'
import { DiagramMaker, ConnectorPlacement } from 'diagram-maker'
import Node from './Node.vue'
import Edge from './Edge.vue'

import InitialData from '../diagram/data.js'
import NodeConfig from '../diagram/node-config.js'

export default {
  name: 'diagramMaker',
  data () {
    return {
      diagram: null
    }
  },

  methods: {
    handleDiagramMakerChange () {
      const state = this.diagram.store.getState()
      console.log(state)
    },
    handleResize () {
      this.diagram.updateContainer()
    },
    myConsumerDataReducer (state, action) {
      if (action.type === 'CONSUMER_DATA_CHANGED') {
        return produce(state, (draftState) => {
          draftState.nodes[action.payload.nodeId].consumerData = action.payload.consumerData
        })
      }
      return state
    },
    createEdge (edge, container) {
      if (container.innerHTML === '') {
        var NodeClass = Vue.extend(Edge)
        var instance = new NodeClass({
          propsData: {
            dispatch: (event) => this.diagram.api.dispatch(event),
            edge
          }
        })
        instance.$mount() // pass nothing
        container.appendChild(instance.$el)
      }
    },
    createNode (node, container) {
      var NodeClass = Vue.extend(Node)
      var instance = new NodeClass({
        propsData: {
          counterValue: 3,
          dispatch: (event) => this.diagram.api.dispatch(event),
          node
        }
      })
      instance.$mount() // pass nothing
      container.innerHTML = ''
      container.appendChild(instance.$el)
    }
  },
  mounted () {
    this.diagram = new DiagramMaker(
      this.$refs.diagramRoot,
      {
        options: {
          connectorPlacement: ConnectorPlacement.LEFT_RIGHT,
          showArrowHead: true
        },
        renderCallbacks: {
          node: (node, container) => {
            return this.createNode(node, container)
          },
          edge: (edge, container) => {
            return this.createEdge(edge, container)
          }
        },
        nodeTypeConfig: NodeConfig
      },
      {
        consumerRootReducer: this.myConsumerDataReducer,
        initialData: InitialData
      }
    )
  },
  beforeUnmount () {
    this.diagram.destroy()
  }
}
</script>

<style>
.dm-dots {
    text-align: left;
}
#main {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
#diagram-container {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.dm-node {
  border: 1px solid #e9ecef !important;
  background-color: white;
  border-radius: 6px;
}

.dm-node-wrap {
    padding: 10px;
}

.dm-canvas {
    background-color: #f1f5f8;
}
.dm-dots pattern path {
    fill: #dce7ef;
}

.dm-connector {
    border-radius: 100%;
    height: 28px;
    width: 28px;
    top: 0;
    left: 0;
    margin-left: -15px;
    margin-top: -15px;
    position: absolute;
}

.dm-connector .dm-handle {
    border: 2px solid #409EFF !important;
    background: white;
    border-radius: 100%;
    box-sizing: border-box;
    height: 11px;
    width: 11px;
    margin: 9px;
    transition: background-color .4s ease,border .4s ease,transform .25s ease;
}

.dm-edge .dm-path.dm-path-inner {
    stroke: #409EFF;
}
.dm-edge:hover .dm-path.dm-path-inner {
    stroke: #409EFF;
}

.text-head {
    font-size: 13px;
    font-weight: bold;
    text-transform: capitalize;
}

.text-little {
    font-size: 11px;
    text-transform: capitalize;
    color: #909399;
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

</style>
