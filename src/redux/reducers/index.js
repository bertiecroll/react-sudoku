import { combineReducers } from 'redux'
import cells from './grid'
import fault from './fault'
import controlBar from './controlBar'

export default combineReducers({
  cells,
  fault,
  controlBar,
})
