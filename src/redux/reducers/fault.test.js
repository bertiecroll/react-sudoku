import reducer from './fault'
import { INCREMENT_FAULT_COUNTER, SET_FAULT_CELL } from 'redux/actionTypes'
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
        faultCell: { row: null, column: null }
      }
      const result = reducer(undefined, actions.incrementFaultCounter())
      expect(result).toEqual(expectedState)
    })
  })

  describe(`${SET_FAULT_CELL}`, () => {
    it('sets fault cell', () => {
      const expectedState = {
        faultCount: 0,
        faultCell: { row: 1, column: 1 }
      }
      const result = reducer(undefined, actions.setFaultCell(1,1))
      expect(result).toEqual(expectedState)
    })
  })
})
