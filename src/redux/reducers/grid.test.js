import reducer from './grid'
import { UPDATE_SELECTED_CELL_ID, MARK_CELL_COMPLETED, ADD_PENCIL_MARK, REMOVE_PENCIL_MARK } from 'redux/actionTypes'
import * as actions from 'redux/actions/grid'

const initialState = {
  byId: {
    '0,0': { id: '0,0', completed: true, row: 0, column: 0, value: 8, pencilMarks: [], },
    '0,1': { id: '0,1', completed: false, row: 0, column: 1, value: 5, pencilMarks: [], },
  },
  allIds: ['0,0', '0,1'],
  selectedCellId: null,
}

describe('grid reducer', () => {
  it('returns a state object', () => {
    const result = reducer(undefined, {type: 'ANYTHING'})
    expect(result).toBeDefined()
  })

  describe(`${UPDATE_SELECTED_CELL_ID}`, () => {
    it('sets selected cell Id to given Id', () => {
      const expectedState = {
        byId: {
          '0,0': { id: '0,0', completed: true, row: 0, column: 0, value: 8, pencilMarks: [], },
          '0,1': { id: '0,1', completed: false, row: 0, column: 1, value: 5, pencilMarks: [], },
        },
        allIds: ['0,0', '0,1'],
        selectedCellId: '0,1',
      }
      const result = reducer(initialState, actions.updateSelectedCellId('0,1'))
      expect(result).toEqual(expectedState)
    })
  })

  describe(`${MARK_CELL_COMPLETED}`, () => {
    it('marks given cell as completed', () => {
      const expectedState = {
        byId: {
          '0,0': { id: '0,0', completed: true, row: 0, column: 0, value: 8, pencilMarks: [], },
          '0,1': { id: '0,1', completed: true, row: 0, column: 1, value: 5, pencilMarks: [], },
        },
        allIds: ['0,0', '0,1'],
        selectedCellId: null,
      }
      const result = reducer(initialState, actions.markCellCompleted('0,1'))
      expect(result).toEqual(expectedState)
    })
  })

  describe(`${ADD_PENCIL_MARK}`, () => {
    it('marks given cell as completed', () => {
      const expectedState = {
        byId: {
          '0,0': { id: '0,0', completed: true, row: 0, column: 0, value: 8, pencilMarks: [], },
          '0,1': { id: '0,1', completed: false, row: 0, column: 1, value: 5, pencilMarks: [1], },
        },
        allIds: ['0,0', '0,1'],
        selectedCellId: null,
      }
      const result = reducer(initialState, actions.addPencilMark('0,1', 1))
      expect(result).toEqual(expectedState)
    })
  })

  describe(`${REMOVE_PENCIL_MARK}`, () => {
    it('marks given cell as completed', () => {
      const state = reducer(initialState, actions.addPencilMark('0,1', 1))
      const expectedState = {
        byId: {
          '0,0': { id: '0,0', completed: true, row: 0, column: 0, value: 8, pencilMarks: [], },
          '0,1': { id: '0,1', completed: false, row: 0, column: 1, value: 5, pencilMarks: [], },
        },
        allIds: ['0,0', '0,1'],
        selectedCellId: null,
      }
      const result = reducer(state, actions.removePencilMark('0,1', 1))
      expect(result).toEqual(expectedState)
    })
  })
})
