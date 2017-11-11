import { UPDATE_SELECTED_CELL, UPDATE_PUZZLE_CELL } from 'redux/actionTypes'

export const updateSelectedCell = (row, column, value) => (
  { type: UPDATE_SELECTED_CELL, row, column, value }
)
export const updatePuzzleCell = number => (
  { type: UPDATE_PUZZLE_CELL, number }
)
