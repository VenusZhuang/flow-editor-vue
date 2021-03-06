import ORYX_Utils from '../Utils'
import ORYX_Config from '../CONFIG'

export default class SelectedRect {
  UI_CONFIG = ORYX_Config.CustomConfigs.UI_CONFIG

  constructor (parentId) {
    this.parentId = parentId
    this.node = ORYX_Utils.graft('http://www.w3.org/2000/svg', $(parentId),
      ['g'])
    this.dashedArea = ORYX_Utils.graft('http://www.w3.org/2000/svg', this.node,
      ['rect', {
        x: 0, y: 0,
        'stroke-width': 2, stroke: this.UI_CONFIG.SelectedRect_Border_color, fill: 'none',
        'stroke-dasharray': '2,2',
        'pointer-events': 'none'
      }])

    this.hide()
  }

  hide () {
    this.node.setAttributeNS(null, 'display', 'none')
  }

  show () {
    this.node.setAttributeNS(null, 'display', '')
  }

  resize (bounds) {
    let upL = bounds.upperLeft()
    let padding = this.UI_CONFIG.SELECTED_AREA_PADDING

    this.dashedArea.setAttributeNS(null, 'width', bounds.width() + 2 * padding)
    this.dashedArea.setAttributeNS(null, 'height', bounds.height() + 2 * padding)
    this.node.setAttributeNS(null, 'transform', 'translate(' + (upL.x - padding) + ', ' + (upL.y - padding) + ')')
  }
}
