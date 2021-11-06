export default {
  nodes: {
    start: {
      id: 'start',
      typeId: 'node-start',
      diagramMakerData: {
        position: { x: 100, y: 150 },
        size: { width: 150, height: 50 }
      },
      consumerData: {
        text: 'Hola'
      }
    },
    end: {
      id: 'end',
      typeId: 'node-end',
      diagramMakerData: {
        position: { x: 400, y: 150 },
        size: { width: 150, height: 50 }
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
