import { UPDATE_SELECTED_CELL, UPDATE_PUZZLE_CELL } from 'redux/actionTypes'
import * as actions from './grid'

describe('grid actions', () => {
  describe('#updateSelectedCell', () => {
    it('creates an action to update selected cell', () => {
      const cell = { row: 1, column: 1, value: 2 }
      const expectedAction = {
        type: UPDATE_SELECTED_CELL,
        cell
      }
      expect(actions.updateSelectedCell(cell)).toEqual(expectedAction)
    })
  })

  describe('#updatePuzzleCell', () => {
    it('creates an action to update the puzzle cell', () => {
      const expectedAction = {
        type: UPDATE_PUZZLE_CELL,
        number: 1,
      }
      expect(actions.updatePuzzleCell(1)).toEqual(expectedAction)
    })
  })
})
