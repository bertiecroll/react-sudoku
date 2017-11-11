import reducer from './grid'
import { UPDATE_SELECTED_CELL } from 'redux/actionTypes'
import * as actions from 'redux/actions/grid'

describe('grid reducer', () => {
  it('returns a state object', () => {
    const result = reducer(undefined, {type: 'ANYTHING'})
    expect(result).toBeDefined()
  })

  describe(`${UPDATE_SELECTED_CELL}`, () => {
    it('updates selected cell row and column referenec', () => {
      const initialState = {
        numbers: [],
        puzzle: [],
        solution: [],
        selectedCell: {
          row: null,
          column: null,
          value: null,
        },
      }
      const expectedState = {
        numbers: [],
        puzzle: [],
        solution: [],
        selectedCell: {
          row: 1,
          column: 5,
          value: 2,
        },
      }
      const result = reducer(initialState, actions.updateSelectedCell({ row: 1 ,column: 5 , value: 2 }))
      expect(result).toEqual(expectedState)
    })
  })
})
