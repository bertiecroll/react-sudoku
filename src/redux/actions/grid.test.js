import {
  GENERATE_CELLS,
  GENERATE_CELLS_SUCCEEDED,
  GENERATE_CELLS_FAILED,
  UPDATE_SELECTED_CELL_ID,
  MARK_CELL_COMPLETED,
  ADD_PENCIL_MARK,
  REMOVE_PENCIL_MARK,
} from 'redux/actionTypes'
import * as actions from './grid'

describe('grid actions', () => {
  describe('#generateCells', () => {
    it('creates an action to generate cells', () => {
      const difficultyLevel = 'TEST'

      const expectedAction = {
        type: GENERATE_CELLS,
        difficultyLevel
      }
      expect(actions.generateCells(difficultyLevel)).toEqual(expectedAction)
    })
  })

  describe('#generateCellsSucceeded', () => {
    it('creates an action to confirm generate cells succeeded', () => {
      const cells = [
        { id: '0,0', value: 1 },
        { id: '1,0', value: 2 },
        { id: '2,0', value: 3 },
      ]
      const expectedAction = {
        type: GENERATE_CELLS_SUCCEEDED,
        cells,
      }
      expect(actions.generateCellsSucceeded(cells)).toEqual(expectedAction)
    })
  })

  describe('#generateCellFailed', () => {
    it('creates an action to confirm generate cells failed', () => {
      const error = 'Test error message'
      const expectedAction = {
        type: GENERATE_CELLS_FAILED,
        error,
      }
      expect(actions.generateCellsFailed(error)).toEqual(expectedAction)
    })
  })

  describe('#updateSelectedCellId', () => {
    it('creates an action to update selected cell', () => {
      const cellId = '0,0'
      const expectedAction = {
        type: UPDATE_SELECTED_CELL_ID,
        cellId
      }
      expect(actions.updateSelectedCellId(cellId)).toEqual(expectedAction)
    })
  })

  describe('#markCellCompleted', () => {
    it('creates an action to mark given cell as completed', () => {
      const cellId = '0,0'
      const expectedAction = {
        type: MARK_CELL_COMPLETED,
        cellId,
      }
      expect(actions.markCellCompleted('0,0')).toEqual(expectedAction)
    })
  })

  describe('#addPencilMark', () => {
    it('adds given value to cells pencil marks array', () => {
      const cellId = '0,0'
      const expectedAction = {
        type: ADD_PENCIL_MARK,
        cellId,
        value: 1,
      }
      expect(actions.addPencilMark('0,0', 1)).toEqual(expectedAction)
    })
  })

  describe('#removePencilMark', () => {
    it('removes given value to cells pencil marks array', () => {
      const cellId = '0,0'
      const expectedAction = {
        type: REMOVE_PENCIL_MARK,
        cellId,
        value: 1,
      }
      expect(actions.removePencilMark('0,0', 1)).toEqual(expectedAction)
    })
  })
})
