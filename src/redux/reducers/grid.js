import { combineReducers } from 'redux'
import { UPDATE_SELECTED_CELL_ID, MARK_CELL_COMPLETED, ADD_PENCIL_MARK, REMOVE_PENCIL_MARK } from 'redux/actionTypes'

export const byIdInitState = {
  '0,0': { id: '0,0', completed: true, row: 0, column: 0, value: 8, pencilMarks: [], },
  '0,1': { id: '0,1', completed: false, row: 0, column: 1, value: 5, pencilMarks: [], },
  '0,2': { id: '0,2', completed: false, row: 0, column: 2, value: 6, pencilMarks: [], },
  '0,3': { id: '0,3', completed: false, row: 0, column: 3, value: 1, pencilMarks: [], },
  '0,4': { id: '0,4', completed: true, row: 0, column: 4, value: 9, pencilMarks: [], },
  '0,5': { id: '0,5', completed: true, row: 0, column: 5, value: 2, pencilMarks: [], },
  '0,6': { id: '0,6', completed: false, row: 0, column: 6, value: 4, pencilMarks: [], },
  '0,7': { id: '0,7', completed: true, row: 0, column: 7, value: 7, pencilMarks: [], },
  '0,8': { id: '0,8', completed: false, row: 0, column: 8, value: 3, pencilMarks: [], },

  '1,0': { id: '1,0', completed: false, row: 1, column: 0, value: 7, pencilMarks: [], },
  '1,1': { id: '1,1', completed: false, row: 1, column: 1, value: 9, pencilMarks: [], },
  '1,2': { id: '1,2', completed: false, row: 1, column: 2, value: 2, pencilMarks: [], },
  '1,3': { id: '1,3', completed: false, row: 1, column: 3, value: 3, pencilMarks: [], },
  '1,4': { id: '1,4', completed: false, row: 1, column: 4, value: 8, pencilMarks: [], },
  '1,5': { id: '1,5', completed: true, row: 1, column: 5, value: 4, pencilMarks: [], },
  '1,6': { id: '1,6', completed: true, row: 1, column: 6, value: 1, pencilMarks: [], },
  '1,7': { id: '1,7', completed: false, row: 1, column: 7, value: 6, pencilMarks: [], },
  '1,8': { id: '1,8', completed: false, row: 1, column: 8, value: 5, pencilMarks: [], },

  '2,0': { id: '2,0', completed: false, row: 2, column: 0, value: 4, pencilMarks: [], },
  '2,1': { id: '2,1', completed: true, row: 2, column: 1, value: 1, pencilMarks: [], },
  '2,2': { id: '2,2', completed: true, row: 2, column: 2, value: 3, pencilMarks: [], },
  '2,3': { id: '2,3', completed: true, row: 2, column: 3, value: 6, pencilMarks: [], },
  '2,4': { id: '2,4', completed: true, row: 2, column: 4, value: 7, pencilMarks: [], },
  '2,5': { id: '2,5', completed: false, row: 2, column: 5, value: 5, pencilMarks: [], },
  '2,6': { id: '2,6', completed: false, row: 2, column: 6, value: 9, pencilMarks: [], },
  '2,7': { id: '2,7', completed: false, row: 2, column: 7, value: 2, pencilMarks: [], },
  '2,8': { id: '2,8', completed: true, row: 2, column: 8, value: 8, pencilMarks: [], },

  '3,0': { id: '3,0', completed: false, row: 3, column: 0, value: 1, pencilMarks: [], },
  '3,1': { id: '3,1', completed: false, row: 3, column: 1, value: 6, pencilMarks: [], },
  '3,2': { id: '3,2', completed: false, row: 3, column: 2, value: 8, pencilMarks: [], },
  '3,3': { id: '3,3', completed: true, row: 3, column: 3, value: 4, pencilMarks: [], },
  '3,4': { id: '3,4', completed: false, row: 3, column: 4, value: 2, pencilMarks: [], },
  '3,5': { id: '3,5', completed: false, row: 3, column: 5, value: 7, pencilMarks: [], },
  '3,6': { id: '3,6', completed: true, row: 3, column: 6, value: 5, pencilMarks: [], },
  '3,7': { id: '3,7', completed: false, row: 3, column: 7, value: 3, pencilMarks: [], },
  '3,8': { id: '3,8', completed: false, row: 3, column: 8, value: 9, pencilMarks: [], },

  '4,0': { id: '4,0', completed: false, row: 4, column: 0, value: 5, pencilMarks: [], },
  '4,1': { id: '4,1', completed: false, row: 4, column: 1, value: 3, pencilMarks: [], },
  '4,2': { id: '4,2', completed: false, row: 4, column: 2, value: 7, pencilMarks: [], },
  '4,3': { id: '4,3', completed: false, row: 4, column: 3, value: 8, pencilMarks: [], },
  '4,4': { id: '4,4', completed: false, row: 4, column: 4, value: 1, pencilMarks: [], },
  '4,5': { id: '4,5', completed: false, row: 4, column: 5, value: 9, pencilMarks: [], },
  '4,6': { id: '4,6', completed: true, row: 4, column: 6, value: 6, pencilMarks: [], },
  '4,7': { id: '4,7', completed: false, row: 4, column: 7, value: 4, pencilMarks: [], },
  '4,8': { id: '4,8', completed: true, row: 4, column: 8, value: 2, pencilMarks: [], },

  '5,0': { id: '5,0', completed: true, row: 5, column: 0, value: 9, pencilMarks: [], },
  '5,1': { id: '5,1', completed: true, row: 5, column: 1, value: 2, pencilMarks: [], },
  '5,2': { id: '5,2', completed: true, row: 5, column: 2, value: 4, pencilMarks: [], },
  '5,3': { id: '5,3', completed: true, row: 5, column: 3, value: 5, pencilMarks: [], },
  '5,4': { id: '5,4', completed: false, row: 5, column: 4, value: 3, pencilMarks: [], },
  '5,5': { id: '5,5', completed: false, row: 5, column: 5, value: 6, pencilMarks: [], },
  '5,6': { id: '5,6', completed: true, row: 5, column: 6, value: 7, pencilMarks: [], },
  '5,7': { id: '5,7', completed: false, row: 5, column: 7, value: 8, pencilMarks: [], },
  '5,8': { id: '5,8', completed: false, row: 5, column: 8, value: 1, pencilMarks: [], },

  '6,0': { id: '6,0', completed: true, row: 6, column: 0, value: 3, pencilMarks: [], },
  '6,1': { id: '6,1', completed: false, row: 6, column: 1, value: 8, pencilMarks: [], },
  '6,2': { id: '6,2', completed: false, row: 6, column: 2, value: 9, pencilMarks: [], },
  '6,3': { id: '6,3', completed: false, row: 6, column: 3, value: 7, pencilMarks: [], },
  '6,4': { id: '6,4', completed: true, row: 6, column: 4, value: 6, pencilMarks: [], },
  '6,5': { id: '6,5', completed: true, row: 6, column: 5, value: 1, pencilMarks: [], },
  '6,6': { id: '6,6', completed: false, row: 6, column: 6, value: 2, pencilMarks: [], },
  '6,7': { id: '6,7', completed: true, row: 6, column: 7, value: 5, pencilMarks: [], },
  '6,8': { id: '6,8', completed: true, row: 6, column: 8, value: 4, pencilMarks: [], },

  '7,0': { id: '7,0', completed: false, row: 7, column: 0, value: 6, pencilMarks: [], },
  '7,1': { id: '7,1', completed: false, row: 7, column: 1, value: 4, pencilMarks: [], },
  '7,2': { id: '7,2', completed: false, row: 7, column: 2, value: 1, pencilMarks: [], },
  '7,3': { id: '7,3', completed: false, row: 7, column: 3, value: 2, pencilMarks: [], },
  '7,4': { id: '7,4', completed: false, row: 7, column: 4, value: 5, pencilMarks: [], },
  '7,5': { id: '7,5', completed: true, row: 7, column: 5, value: 3, pencilMarks: [], },
  '7,6': { id: '7,6', completed: true, row: 7, column: 6, value: 8, pencilMarks: [], },
  '7,7': { id: '7,7', completed: false, row: 7, column: 7, value: 9, pencilMarks: [], },
  '7,8': { id: '7,8', completed: false, row: 7, column: 8, value: 7, pencilMarks: [], },

  '8,0': { id: '8,0', completed: true, row: 8, column: 0, value: 2, pencilMarks: [], },
  '8,1': { id: '8,1', completed: true, row: 8, column: 1, value: 7, pencilMarks: [], },
  '8,2': { id: '8,2', completed: false, row: 8, column: 2, value: 5, pencilMarks: [], },
  '8,3': { id: '8,3', completed: true, row: 8, column: 3, value: 9, pencilMarks: [], },
  '8,4': { id: '8,4', completed: false, row: 8, column: 4, value: 4, pencilMarks: [], },
  '8,5': { id: '8,5', completed: false, row: 8, column: 5, value: 8, pencilMarks: [], },
  '8,6': { id: '8,6', completed: false, row: 8, column: 6, value: 3, pencilMarks: [], },
  '8,7': { id: '8,7', completed: false, row: 8, column: 7, value: 1, pencilMarks: [], },
  '8,8': { id: '8,8', completed: false, row: 8, column: 8, value: 6, pencilMarks: [], },
}

export const markCellCompleted = (state, action) => ({
  ...state,
  [action.cellId]: { ...state[action.cellId], completed: true }
})

export const addPencilMark = (state, action) => {
  const cell = state[action.cellId]
  return {
    ...state,
    [action.cellId]: {
      ...cell,
      pencilMarks: cell.pencilMarks.concat(action.value)
    }
  }
}

export const removePencilMark = (state, action) => {
  const cell = state[action.cellId]
  return {
    ...state,
    [action.cellId]: {
      ...cell,
      pencilMarks: cell.pencilMarks.filter(value => value !== action.value)
    }
  }
}

function byId(state = byIdInitState, action) {
  switch (action.type) {
    case MARK_CELL_COMPLETED: return markCellCompleted(state, action)
    case ADD_PENCIL_MARK: return addPencilMark(state, action)
    case REMOVE_PENCIL_MARK: return removePencilMark(state, action)
    default: return state
  }
}

export const allCellsInitState = [
  '0,0','0,1','0,2','0,3','0,4','0,5','0,6','0,7','0,8',
  '1,0','1,1','1,2','1,3','1,4','1,5','1,6','1,7','1,8',
  '2,0','2,1','2,2','2,3','2,4','2,5','2,6','2,7','2,8',
  '3,0','3,1','3,2','3,3','3,4','3,5','3,6','3,7','3,8',
  '4,0','4,1','4,2','4,3','4,4','4,5','4,6','4,7','4,8',
  '5,0','5,1','5,2','5,3','5,4','5,5','5,6','5,7','5,8',
  '6,0','6,1','6,2','6,3','6,4','6,5','6,6','6,7','6,8',
  '7,0','7,1','7,2','7,3','7,4','7,5','7,6','7,7','7,8',
  '8,0','8,1','8,2','8,3','8,4','8,5','8,6','8,7','8,8',
]

function allIds(state = allCellsInitState, action) {
  switch (action.type) {
    default: return state
  }
}

function selectedCellId(state = null, action) {
  switch (action.type) {
    case UPDATE_SELECTED_CELL_ID: return action.cellId
    default: return state
  }
}

export default combineReducers({
  byId,
  allIds,
  selectedCellId,
});
