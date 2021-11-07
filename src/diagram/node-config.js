import { VisibleConnectorTypes } from 'diagram-maker'

export default {
  'node-start': {
    size: { width: 150, height: 50 },
    visibleConnectorTypes: VisibleConnectorTypes.OUTPUT_ONLY
  },
  'node-end': {
    size: { width: 150, height: 50 },
    visibleConnectorTypes: VisibleConnectorTypes.INPUT_ONLY
  },
  'node-adapter': {
    size: { width: 150, height: 50 }
  }
}
