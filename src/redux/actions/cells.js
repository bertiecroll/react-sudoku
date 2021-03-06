import {
  GENERATE_CELLS,
  GENERATE_CELLS_SUCCEEDED,
  GENERATE_CELLS_FAILED,
  UPDATE_SELECTED_CELL_ID,
  MARK_CELL_COMPLETED,
  ADD_PENCIL_MARK,
  REMOVE_PENCIL_MARK,
} from 'redux/actionTypes'

export const generateCells = difficultyLevel => (
  { type: GENERATE_CELLS, difficultyLevel }
)
export const generateCellsSucceeded = cells => (
  { type: GENERATE_CELLS_SUCCEEDED, cells }
)
export const generateCellsFailed = error => (
  { type: GENERATE_CELLS_FAILED, error }
)
export const updateSelectedCellId = cellId => (
  { type: UPDATE_SELECTED_CELL_ID, cellId }
)
export const markCellCompleted = cellId => (
  { type: MARK_CELL_COMPLETED, cellId }
)
export const addPencilMark = (cellId, value) => (
  { type: ADD_PENCIL_MARK, cellId, value }
)
export const removePencilMark = (cellId, value) => (
  { type: REMOVE_PENCIL_MARK, cellId, value }
)
