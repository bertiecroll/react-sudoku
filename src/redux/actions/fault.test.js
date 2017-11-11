import { INCREMENT_FAULT_COUNTER, SET_FAULT_CELL } from 'redux/actionTypes'
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

  describe('#setFaultCell', () => {
    it('creates an action to set fault cell', () => {
      const expectedAction = {
        type: SET_FAULT_CELL,
        row: 1,
        column: 1,
      }
      expect(actions.setFaultCell(1, 1)).toEqual(expectedAction)
    })
  })
})
