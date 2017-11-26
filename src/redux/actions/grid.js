import { UPDATE_SELECTED_CELL_ID, MARK_CELL_COMPLETED, ADD_PENCIL_MARK, REMOVE_PENCIL_MARK } from 'redux/actionTypes'

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
