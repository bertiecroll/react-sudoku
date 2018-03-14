import { combineReducers } from 'redux'
import { PUZZLE_TOGGLE_COMPLETED, GENERATE_CELLS } from 'redux/actionTypes'

const completed = (state = false, action) => {
  switch(action.type) {
    case PUZZLE_TOGGLE_COMPLETED: return !state
    default: return state
  }
}

const difficultyLevel = (state = null, action) => {
  switch(action.type) {
    case GENERATE_CELLS: return action.difficultyLevel
    default: return state
  }
}

export default combineReducers({
  completed,
  difficultyLevel,
})
