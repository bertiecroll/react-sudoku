import * as selectors from './cells'

const state = {
  cells: {
    byId: {
      '0,0': { id: '0,0', completed: true, xCoord: 0, yCoord: 0, value: 1, pencilMarks: [], },
      '0,1': { id: '0,1', completed: false, xCoord: 0, yCoord: 1, value: 2, pencilMarks: [], },
      '0,2': { id: '0,2', completed: false, xCoord: 0, yCoord: 2, value: 3, pencilMarks: [], },
      '1,0': { id: '1,0', completed: false, xCoord: 1, yCoord: 0, value: 2, pencilMarks: [], },
      '1,1': { id: '1,1', completed: false, xCoord: 1, yCoord: 1, value: 3, pencilMarks: [], },
      '1,2': { id: '1,2', completed: true, xCoord: 1, yCoord: 2, value: 1, pencilMarks: [], },
      '2,0': { id: '2,0', completed: false, xCoord: 2, yCoord: 0, value: 3, pencilMarks: [], },
      '2,1': { id: '2,1', completed: true, xCoord: 2, yCoord: 1, value: 1, pencilMarks: [], },
      '2,2': { id: '2,2', completed: false, xCoord: 2, yCoord: 2, value: 2, pencilMarks: [], },
    },
    selectedCellId: '1,0',
    fetching: false,
    error: null
  }
}

const fetchingState = { ...state, cells: { ...state.cells, fetching: true } }

const allCompletedState = {
  cells: {
    byId: {
      '0,0': { id: '0,0', completed: true, xCoord: 0, yCoord: 0, value: 1, pencilMarks: [], },
      '0,1': { id: '0,1', completed: true, xCoord: 0, yCoord: 1, value: 2, pencilMarks: [], },
      '0,2': { id: '0,2', completed: true, xCoord: 0, yCoord: 2, value: 3, pencilMarks: [], },
    },
    selectedCellId: '1,0',
    fetching: false,
    error: null
  }
}

describe('cells selectors', () => {
  describe('#moduleState', () => {
    it('returns state of cells', () => {
      expect(selectors.moduleState(state)).toEqual(state.cells)
    })
  })

  describe('#cellsById', () => {
    it('returns cellsById', () => {
      expect(selectors.cellsById(state)).toEqual(state.cells.byId)
    })
  })

  describe('#cellsByRow', () => {
    it('returns cells grouped by row', () => {
      const expected = {
        0: [
          { id: '0,0', completed: true, xCoord: 0, yCoord: 0, value: 1, pencilMarks: [], },
          { id: '1,0', completed: false, xCoord: 1, yCoord: 0, value: 2, pencilMarks: [], },
          { id: '2,0', completed: false, xCoord: 2, yCoord: 0, value: 3, pencilMarks: [], },
        ],
        1: [
          { id: '0,1', completed: false, xCoord: 0, yCoord: 1, value: 2, pencilMarks: [], },
          { id: '1,1', completed: false, xCoord: 1, yCoord: 1, value: 3, pencilMarks: [], },
          { id: '2,1', completed: true, xCoord: 2, yCoord: 1, value: 1, pencilMarks: [], },

        ],
        2: [
          { id: '0,2', completed: false, xCoord: 0, yCoord: 2, value: 3, pencilMarks: [], },
          { id: '1,2', completed: true, xCoord: 1, yCoord: 2, value: 1, pencilMarks: [], },
          { id: '2,2', completed: false, xCoord: 2, yCoord: 2, value: 2, pencilMarks: [], },
        ],
      }
      expect(selectors.cellsByRow(state)).toEqual(expected)
    })
  })

  describe('#areAllCellsCompleted', () => {
    it('returns true if every cell in cellsById are completed', () => {
      expect(selectors.areAllCellsCompleted(allCompletedState)).toEqual(true)
    })

    it('returns false if one or more cells in cellsById are not completed', () => {
      expect(selectors.areAllCellsCompleted(state)).toEqual(false)
    })
  })

  describe('#selectedCellId', () => {
    it('returns selected cell Id', () => {
      expect(selectors.selectedCellId(state)).toEqual(state.cells.selectedCellId)
    })
  })

  describe('#selectedCell', () => {
    it('returns selected Cell', () => {
      const expected = { id: '1,0', completed: false, xCoord: 1, yCoord: 0, value: 2, pencilMarks: [], }
      expect(selectors.selectedCell(state)).toEqual(expected)
    })
  })

  describe('#allNumbers', () => {
    it('returns array of unique cell values', () => {
      expect(selectors.allNumbers(state)).toEqual([1, 2, 3])
    })
  })

  describe('#availableNumbers', () => {
    it('returns array of unique cell values where completed is false', () => {
      expect(selectors.availableNumbers(state)).toEqual([2, 3])
    })
  })

  describe('#isFetching', () => {
    it('returns fetching boolean state', () => {
      expect(selectors.isFetching(state)).toEqual(false)
      expect(selectors.isFetching(fetchingState)).toEqual(true)
    })
  })

  describe('#errorMessage', () => {
    it('returns error state', () => {
      expect(selectors.errorMessage(state)).toEqual(null)

      const errorState = { ...state, cells: { ...state.cells, error: 'Test Error' } }
      expect(selectors.errorMessage(errorState)).toEqual('Test Error')
    })
  })

  describe('#currentStatus', () => {
    it('returns LOADING when fetching is true', () => {
      expect(selectors.currentStatus(fetchingState)).toEqual(selectors.LOADING)
    })

    it('returns COMPLETED when fetching is false and areAllCellsCompleted is true', () => {
      expect(selectors.currentStatus(allCompletedState)).toEqual(selectors.COMPLETED)
    })

    it('returns IN_PROGRESS when fetching and areAllCellsCompleted are both false', () => {
      expect(selectors.currentStatus(state)).toEqual(selectors.IN_PROGRESS)
    })
  })
})
