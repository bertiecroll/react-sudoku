import { UPDATE_SELECTED_CELL_ID, MARK_CELL_COMPLETED, ADD_PENCIL_MARK, REMOVE_PENCIL_MARK } from 'redux/actionTypes'
import * as actions from './grid'

describe('grid actions', () => {
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
