import { VisibleConnectorTypes } from 'diagram-maker'

export default {
  'node-start': {
    size: { width: 165, height: 55 },
    visibleConnectorTypes: VisibleConnectorTypes.OUTPUT_ONLY
  },
  'node-end': {
    size: { width: 165, height: 55 },
    visibleConnectorTypes: VisibleConnectorTypes.INPUT_ONLY
  },
  'node-adapter': {
    size: { width: 165, height: 55 }
  }
}
