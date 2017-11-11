import { combineReducers } from 'redux'
import grid from './grid'
import fault from './fault'

export default combineReducers({
  grid,
  fault,
})
