import map from 'lodash/fp/map'
import reduce from 'lodash/fp/reduce'
import { combineReducers } from 'redux'
import {
  GENERATE_CELLS,
  GENERATE_CELLS_SUCCEEDED,
  GENERATE_CELLS_FAILED,
  UPDATE_SELECTED_CELL_ID,
  MARK_CELL_COMPLETED,
  ADD_PENCIL_MARK,
  REMOVE_PENCIL_MARK
} from 'redux/actionTypes'

export const generateCellsById = (state, action) => reduce(
  (cellsById, cell) => {
    cellsById[cell.id] = { ...cell, pencilMarks: [] }
    return cellsById
  }, {}
)(action.cells)

export const generateAllIds = (state, action) => map('id')(action.cells)

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

const byId = (state = {}, action) => {
  switch (action.type) {
    case GENERATE_CELLS_SUCCEEDED: return generateCellsById(state, action)
    case GENERATE_CELLS_FAILED: return state
    case MARK_CELL_COMPLETED: return markCellCompleted(state, action)
    case ADD_PENCIL_MARK: return addPencilMark(state, action)
    case REMOVE_PENCIL_MARK: return removePencilMark(state, action)
    default: return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case GENERATE_CELLS_SUCCEEDED: return generateAllIds(state, action)
    default: return state
  }
}

const selectedCellId = (state = null, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_CELL_ID: return action.cellId
    default: return state
  }
}

const fetching = (state = false, action) => {
  switch (action.type) {
    case GENERATE_CELLS: return true
    default: return false
  }
}

const error = (state= null, action) => {
  switch(action.type) {
    case GENERATE_CELLS_FAILED: return action.error
    default: return null
  }
}

export default combineReducers({
  byId,
  allIds,
  selectedCellId,
  fetching,
  error,
});
