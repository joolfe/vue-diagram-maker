export default {
  nodes: {
    START: {
      id: 'START',
      typeId: 'node_start',
      diagramMakerData: {
        position: { x: 100, y: 100 },
        size: { width: 130, height: 55 }
      },
      consumerData: {
        adapter_id: 'START',
        adapter_name: null
      }
    },
    OTP: {
      id: 'OTP',
      typeId: 'node_adapter',
      diagramMakerData: {
        position: { x: 400, y: 100 },
        size: { width: 165, height: 55 }
      },
      consumerData: {
        adapter_id: 'OTP',
        adapter_name: 'OTP adapter'
      }
    },
    SUCCESS: {
      id: 'SUCCESS',
      typeId: 'node_success',
      diagramMakerData: {
        position: { x: 700, y: 107 },
        size: { width: 130, height: 43 }
      },
      consumerData: {
        adapter_id: 'SUCCESS',
        adapter_name: null
      }
    },
    FAIL: {
      id: 'FAIL',
      typeId: 'node_fail',
      diagramMakerData: {
        position: { x: 700, y: 170 },
        size: { width: 130, height: 43 }
      },
      consumerData: {
        adapter_id: 'FAIL',
        adapter_name: null
      }
    }
  },
  edges: {
    edge1: {
      id: 'edge1',
      src: 'OTP',
      dest: 'SUCCESS',
      diagramMakerData: { }
    },
    edge2: {
      id: 'edge2',
      src: 'START',
      dest: 'OTP',
      diagramMakerData: { }
    }
  }
}
