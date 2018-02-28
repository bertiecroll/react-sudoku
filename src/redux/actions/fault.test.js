import { INCREMENT_FAULT_COUNTER, UPDATE_FAULT_CELL_ID } from 'redux/actionTypes'
import * as actions from './fault'

describe('fault actions', () => {
  describe('#incrementFaultCounter', () => {
    it('creates an action to increment fault counter', () => {
      const expectedAction = {
        type: INCREMENT_FAULT_COUNTER,
      }
      expect(actions.incrementFaultCounter()).toEqual(expectedAction)
    })
  })

  describe('#updateFaultCellId', () => {
    it('creates an action to update fault cell id to given id', () => {
      const expectedAction = {
        type: UPDATE_FAULT_CELL_ID,
        id: '0,1'
      }
      expect(actions.updateFaultCellId('0,1')).toEqual(expectedAction)
    })
  })
})
