import reducer from './cells'
import {
  GENERATE_CELLS,
  GENERATE_CELLS_SUCCEEDED,
  GENERATE_CELLS_FAILED,
  UPDATE_SELECTED_CELL_ID,
  MARK_CELL_COMPLETED,
  ADD_PENCIL_MARK,
  REMOVE_PENCIL_MARK
} from 'redux/actionTypes'
import * as actions from 'redux/actions/cells'

const initialState = {
  byId: {
    '0,0': { id: '0,0', completed: true, xCoord: 0, yCoord: 0, value: 8, pencilMarks: [], },
    '0,1': { id: '0,1', completed: false, xCoord: 0, yCoord: 1, value: 5, pencilMarks: [], },
  },
  allIds: ['0,0', '0,1'],
  selectedCellId: null,
  fetching: false,
  error: null,
}

describe('cells reducer', () => {
  it('returns a state object', () => {
    const result = reducer(undefined, {type: 'ANYTHING'})
    expect(result).toBeDefined()
  })

  describe(`${GENERATE_CELLS}`, () => {
    it('sets fetching to true', () => {
      const result = reducer(initialState, actions.generateCells())
      expect(result.fetching).toEqual(true)
    })
  })

  describe(`${GENERATE_CELLS_SUCCEEDED}`, () => {
    it('updates byId and allIds with given cells and sets fetching to false', () => {
      const fetchingState = { ...initialState, fetching: true }
      const cells = [
        { id: '0,0', completed: true, xCoord: 0, yCoord: 0, value: 1, },
        { id: '1,0', completed: false, xCoord: 1, yCoord: 0, value: 2, },
        { id: '2,0', completed: true, xCoord: 2, yCoord: 0, value: 3, },
      ]
      const expectedState = {
        byId: {
          '0,0': { id: '0,0', completed: true, xCoord: 0, yCoord: 0, value: 1, pencilMarks: [], },
          '1,0': { id: '1,0', completed: false, xCoord: 1, yCoord: 0, value: 2, pencilMarks: [], },
          '2,0': { id: '2,0', completed: true, xCoord: 2, yCoord: 0, value: 3, pencilMarks: [], },
        },
        allIds: [ '0,0', '1,0', '2,0' ],
        selectedCellId: null,
        fetching: false,
        error: null,
      }

      const result = reducer(fetchingState, actions.generateCellsSucceeded(cells))
      expect(result).toEqual(expectedState)
    })
  })

  describe(`${GENERATE_CELLS_FAILED}`, () => {
    it('sets error to given error message', () => {
      const errorMessage = 'Test Error Message'
      const result = reducer(initialState, actions.generateCellsFailed(errorMessage))
      expect(result.error).toEqual(errorMessage)
    })
  })

  describe(`${UPDATE_SELECTED_CELL_ID}`, () => {
    it('sets selected cell Id to given Id', () => {
      const result = reducer(initialState, actions.updateSelectedCellId('0,1'))
      expect(result.selectedCellId).toEqual('0,1')
    })
  })

  describe(`${MARK_CELL_COMPLETED}`, () => {
    it('marks given cell as completed', () => {
      const expectedState = {
        '0,0': { id: '0,0', completed: true, xCoord: 0, yCoord: 0, value: 8, pencilMarks: [], },
        '0,1': { id: '0,1', completed: true, xCoord: 0, yCoord: 1, value: 5, pencilMarks: [], },
      }

      const result = reducer(initialState, actions.markCellCompleted('0,1'))
      expect(result.byId).toEqual(expectedState)
    })
  })

  describe(`${ADD_PENCIL_MARK}`, () => {
    it('marks given cell as completed', () => {
      const expectedState = {
        '0,0': { id: '0,0', completed: true, xCoord: 0, yCoord: 0, value: 8, pencilMarks: [], },
        '0,1': { id: '0,1', completed: false, xCoord: 0, yCoord: 1, value: 5, pencilMarks: [1], },
      }

      const result = reducer(initialState, actions.addPencilMark('0,1', 1))
      expect(result.byId).toEqual(expectedState)
    })
  })

  describe(`${REMOVE_PENCIL_MARK}`, () => {
    it('marks given cell as completed', () => {
      const state = reducer(initialState, actions.addPencilMark('0,1', 1))
      const expectedState = {
        '0,0': { id: '0,0', completed: true, xCoord: 0, yCoord: 0, value: 8, pencilMarks: [], },
        '0,1': { id: '0,1', completed: false, xCoord: 0, yCoord: 1, value: 5, pencilMarks: [], },
      }

      const result = reducer(state, actions.removePencilMark('0,1', 1))
      expect(result.byId).toEqual(expectedState)
    })
  })
})
