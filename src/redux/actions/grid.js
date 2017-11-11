import { UPDATE_SELECTED_CELL, UPDATE_PUZZLE_CELL } from 'redux/actionTypes'

export const updateSelectedCell = (cell) => (
  { type: UPDATE_SELECTED_CELL, cell }
)
export const updatePuzzleCell = number => (
  { type: UPDATE_PUZZLE_CELL, number }
)
