import reducer from './fault'
import { INCREMENT_FAULT_COUNTER, UPDATE_FAULT_CELL_ID } from 'redux/actionTypes'
import * as actions from 'redux/actions/fault'

describe('fault reducer', () => {
  it('returns a state object', () => {
    const result = reducer(undefined, {type: 'ANYTHING'})
    expect(result).toBeDefined()
  })

  describe(`${INCREMENT_FAULT_COUNTER}`, () => {
    it('increments fault count by one', () => {
      const expectedState = {
        faultCount: 1,
        faultCellId: null
      }
      const result = reducer(undefined, actions.incrementFaultCounter())
      expect(result).toEqual(expectedState)
    })
  })

  describe(`${UPDATE_FAULT_CELL_ID}`, () => {
    it('updates faultCellId to given id', () => {
      const expectedState = {
        faultCount: 0,
        faultCellId: '0,1'
      }
      const result = reducer(undefined, actions.updateFaultCellId('0,1'))
      expect(result).toEqual(expectedState)
    })
  })
})
