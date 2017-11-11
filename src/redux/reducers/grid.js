import { UPDATE_SELECTED_CELL, UPDATE_PUZZLE_CELL } from 'redux/actionTypes'
import { updateArrayItem } from 'redux/utils'

export const updateSelectedCell = (state, action) => (
  { ...state, selectedCell: action.cell }
)
export const updatePuzzleCell = (state, action) => {
  const updatePuzzleCallBack = row => updateArrayItem(() => action.number)(row, state.selectedCell.column)
  return {
    ...state,
    puzzle: updateArrayItem(updatePuzzleCallBack)(state.puzzle, state.selectedCell.row),
    selectedCell: { ...state.selectedCell, value: action.number }
  }
}

export const initialState = {
  numbers: [1,2,3,4,5,6,7,8,9,],
  puzzle: [
    [8,0,0,0,9,2,0,7,0],
    [0,0,0,0,0,4,1,0,0],
    [0,1,3,6,7,0,0,0,8],
    [0,0,0,4,0,0,5,0,0],
    [0,0,0,0,0,0,6,0,2],
    [9,2,4,5,0,0,7,0,0],
    [3,0,0,0,6,1,0,5,4],
    [0,0,0,0,0,3,8,0,0],
    [2,7,0,9,0,0,0,0,0],
  ],
  solution: [
    [8,5,6,1,9,2,4,7,3],
    [7,9,2,3,8,4,1,6,5],
    [4,1,3,6,7,5,9,2,8],
    [1,6,8,4,2,7,5,3,9],
    [5,3,7,8,1,9,6,4,2],
    [9,2,4,5,3,6,7,8,1],
    [3,8,9,7,6,1,2,5,4],
    [6,4,1,2,5,3,8,9,7],
    [2,7,5,9,4,8,3,1,6],
  ],
  selectedCell: { row: null, column: null, value: null },
}

export default function grid(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SELECTED_CELL: return updateSelectedCell(state, action)
    case UPDATE_PUZZLE_CELL: return updatePuzzleCell(state, action)
    default: return state
  }
}
