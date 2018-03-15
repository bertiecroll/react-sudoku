import map from 'lodash/fp/map'
import reduce from 'lodash/fp/reduce'
import mapValues from 'lodash/fp/mapValues'
import compose from 'lodash/fp/compose'
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
import { filters } from 'lib/sudoku/grid'

const generateCellsById = (state, action) => reduce(
  (cellsById, cell) => {
    cellsById[cell.id] = { ...cell, pencilMarks: [] }
    return cellsById
  }, {}
)(action.cells)

const generateAllIds = (state, action) => map('id')(action.cells)

const markCompletedAndRemovePencilMarks = (state, action) => {
  const cell = state[action.cellId]
  return compose(
    removeNeighbouringPencilMarks(cell),
    markCellCompleted(cell)
  )(state)
}

const markCellCompleted = cell => state => ({
  ...state,
  [cell.id]: { ...state[cell.id], completed: true }
})

const removeNeighbouringPencilMarks = completedCell => state => {
  const neighbourIds = _neighbouringCellIds(completedCell)(state)

  return mapValues(cell => (
    neighbourIds.includes(cell.id) ? _removeCellPencilMark(cell, completedCell.value) : cell
  ))(state)
}

const removePencilMark = (state, action) => {
  const cell = state[action.cellId]
  return {
    ...state,
    [action.cellId]: _removeCellPencilMark(cell, action.value)
  }
}

const addPencilMark = (state, action) => {
  const cell = state[action.cellId]
  return {
    ...state,
    [action.cellId]: {
      ...cell,
      pencilMarks: cell.pencilMarks.concat(action.value)
    }
  }
}

const _removeCellPencilMark = (cell, valueToRemove) => ({
    ...cell,
    pencilMarks: cell.pencilMarks.filter(value => value !== valueToRemove)
})

const _neighbouringCellIds = cell => compose(
  map('id'),
  filters.neighboursForCell(cell)
)

const byId = (state = {}, action) => {
  switch (action.type) {
    case GENERATE_CELLS_SUCCEEDED: return generateCellsById(state, action)
    case GENERATE_CELLS_FAILED: return state
    case MARK_CELL_COMPLETED: return markCompletedAndRemovePencilMarks(state, action)
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
    case GENERATE_CELLS_SUCCEEDED:
    case GENERATE_CELLS_FAILED: return false
    default: return state
  }
}

const error = (state = null, action) => {
  switch(action.type) {
    case GENERATE_CELLS_FAILED: return action.error
    default: return state
  }
}

export default combineReducers({
  byId,
  allIds,
  selectedCellId,
  fetching,
  error,
})
