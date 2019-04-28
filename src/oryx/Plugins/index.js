import AbstractPlugin from './AbstractPlugin'
import AbstractLayouter from './AbstractLayouter'
import Edit from './Edit'
import View from './View'
import Loading from './Loading'
import CanvasResize from './CanvasResize'
import CanvasResizeButton from './CanvasResizeButton'
import RenameShapes from './RenameShapes'
import ProcessLink from './ProcessLink'
import Save from './Save'
import SelectedRect from './SelectedRect'
import DragDropResize from './DragDropResize'
import GridLine from './GridLine'
import ShapeHighlighting from './ShapeHighlighting'
import HighlightingSelectedShapes from './HighlightingSelectedShapes'
import Resizer from './Resizer'
import DragDocker from './DragDocker'
import AddDocker from './AddDocker'
import SelectionFrame from './SelectionFrame'
import Overlay from './Overlay'
import KeysMove from './KeysMove'
import Layouter from './Layouter'
import BPMN2_0 from './BPMN2_0'
import Arrangement from './Arrangement'
import PoolAsProperty from './PoolAsProperty'
import ORYX_Log from '../Log'

const Plugins = {
  availablePlugins: [],
  AbstractPlugin: AbstractPlugin,
  AbstractLayouter: AbstractLayouter,
  Edit: Edit,
  View: View,
  Loading: Loading,
  CanvasResize: CanvasResize,
  CanvasResizeButton: CanvasResizeButton,
  RenameShapes: RenameShapes,
  ProcessLink: ProcessLink,
  Save: Save,
  SelectedRect: SelectedRect,
  DragDropResize: DragDropResize,
  GridLine: GridLine,
  ShapeHighlighting: ShapeHighlighting,
  HighlightingSelectedShapes: HighlightingSelectedShapes,
  Resizer: Resizer,
  DragDocker: DragDocker,
  AddDocker: AddDocker,
  SelectionFrame: SelectionFrame,
  Overlay: Overlay,
  KeysMove: KeysMove,
  Layouter: Layouter,
  BPMN2_0: BPMN2_0,
  Arrangement: Arrangement,
  PoolAsProperty: PoolAsProperty,
  _loadPlugins: function(plugins) {
    const availablePlugins = []
    plugins.map(plugin => {
      let pluginData = new Map()
      if (!plugin.name) {
        ORYX_Log.error('A plugin is not providing a name. Ingnoring this plugin.')
        return
      }
      pluginData.set('name', plugin.name)
      availablePlugins.push(pluginData)
    })
    this.availablePlugins = availablePlugins
  }
}

export default Plugins