export default {
  nodes: {
    start: {
      id: 'start',
      typeId: 'node-start',
      diagramMakerData: {
        position: { x: 100, y: 100 },
        size: { width: 165, height: 55 }
      },
      consumerData: {
        adapter_id: 'OTP',
        adapter_name: 'OTP adapter'
      }
    },
    end: {
      id: 'end',
      typeId: 'node-end',
      diagramMakerData: {
        position: { x: 400, y: 100 },
        size: { width: 165, height: 55 }
      },
      consumerData: {
        adapter_id: 'Password',
        adapter_name: 'Security number'
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
