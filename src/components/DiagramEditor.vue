<template>
  <div id="main">
    <div id="diagram-container" ref="diagramRoot">
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { produce } from 'immer'
import { DiagramMaker, ConnectorPlacement, VisibleConnectorTypes } from 'diagram-maker'
import 'diagram-maker/dist/diagramMaker.css'
import Node from './Node.vue'
import Edge from './Edge.vue'

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
      console.log(container)
      console.log('esto' + container.innerHTML + '|')
      if (container.innerHTML === '') {
        console.log('Entra 2')
        var NodeClass = Vue.extend(Edge)
        console.log(this.diagram)
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
      console.log(node)
      /*
      return new Vue({
        components: { Node },
        el: container,
        render (h) { return h(Node) }
      }).$refs.rectangleNode
      */
      var NodeClass = Vue.extend(Node)
      console.log(this.diagram)
      var instance = new NodeClass({
        propsData: {
          counterValue: 3,
          dispatch: (event) => this.diagram.api.dispatch(event),
          node
        }
      })
      /*
      instance.$on('dummyEvent', e => {
        console.log('dummy get fired', e)
        this.diagram.api.dispatch({
          type: 'CONSUMER_DATA_CHANGED',
          payload: {
            nodeId: myNodeId,
            consumerData: { hola: 'hello' }
          }
        })
      })
      */
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
            console.log('is called')
            return this.createNode(node, container)
          },
          edge: (edge, container) => {
            console.log(container)
            return this.createEdge(edge, container)
          }
        },
        nodeTypeConfig: {
          'node-start': {
            size: { width: 150, height: 50 },
            visibleConnectorTypes: VisibleConnectorTypes.OUTPUT_ONLY
          },
          'node-end': {
            size: { width: 150, height: 50 },
            visibleConnectorTypes: VisibleConnectorTypes.INPUT_ONLY
          }
        }
      },
      {
        consumerRootReducer: this.myConsumerDataReducer,
        initialData: {
          nodes: {
            start: {
              id: 'start',
              typeId: 'node-start',
              diagramMakerData: {
                position: { x: 200, y: 150 },
                size: { width: 100, height: 50 }
              },
              consumerData: {
                text: 'adios'
              }
            },
            end: {
              id: 'end',
              typeId: 'node-end',
              diagramMakerData: {
                position: { x: 400, y: 150 },
                size: { width: 100, height: 50 }
              },
              consumerData: {
                text: 'adios'
              }
            }
          },
          edges: {
            edge1: {
              id: 'edge1',
              src: 'start',
              dest: 'end',
              diagramMakerData: { }
            }
          }
        }
      }
    )
  },
  beforeUnmount () {
    this.diagram.destroy()
  }
}
</script>

<style scoped>
.dm-dots {
    text-align: left;
}
#main {
  height: 100%;
  width: 100%;
  top: 120px;
  left: 0;
  position: absolute;
}
#diagram-container {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}
#main /deep/ .dm-node {
  border: 1px solid black !important;
  background-color: white;
}
</style>
