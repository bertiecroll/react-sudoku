import { combineReducers } from 'redux'
import cells from './cells'
import fault from './fault'
import controlBar from './controlBar'

export default combineReducers({
  cells,
  fault,
  controlBar,
})
