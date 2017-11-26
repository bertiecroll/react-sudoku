import * as selectors from './cells'

const state = {
  cells: {
    byId: {
      '0,0': { id: '0,0', completed: true, row: 0, column: 0, value: 1, notes: [], },
      '0,1': { id: '0,1', completed: false, row: 0, column: 1, value: 2, notes: [], },
      '0,2': { id: '0,2', completed: false, row: 0, column: 2, value: 3, notes: [], },
      '1,0': { id: '1,0', completed: false, row: 1, column: 0, value: 2, notes: [], },
      '1,1': { id: '1,1', completed: false, row: 1, column: 1, value: 3, notes: [], },
      '1,2': { id: '1,2', completed: true, row: 1, column: 2, value: 1, notes: [], },
      '2,0': { id: '2,0', completed: false, row: 2, column: 0, value: 3, notes: [], },
      '2,1': { id: '2,1', completed: true, row: 2, column: 1, value: 1, notes: [], },
      '2,2': { id: '2,2', completed: false, row: 2, column: 2, value: 2, notes: [], },
    },
    selectedCellId: '1,0',
  }
}

describe('cells selectors', () => {
  describe('#moduleState', () => {
    it('returns state of grid', () => {
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
          { id: '0,0', completed: true, row: 0, column: 0, value: 1, notes: [], },
          { id: '0,1', completed: false, row: 0, column: 1, value: 2, notes: [], },
          { id: '0,2', completed: false, row: 0, column: 2, value: 3, notes: [], },
        ],
        1: [
          { id: '1,0', completed: false, row: 1, column: 0, value: 2, notes: [], },
          { id: '1,1', completed: false, row: 1, column: 1, value: 3, notes: [], },
          { id: '1,2', completed: true, row: 1, column: 2, value: 1, notes: [], },
        ],
        2: [
          { id: '2,0', completed: false, row: 2, column: 0, value: 3, notes: [], },
          { id: '2,1', completed: true, row: 2, column: 1, value: 1, notes: [], },
          { id: '2,2', completed: false, row: 2, column: 2, value: 2, notes: [], },
        ],
      }
      expect(selectors.cellsByRow(state)).toEqual(expected)
    })
  })

  describe('#selectedCellId', () => {
    it('returns selected cell Id', () => {
      expect(selectors.selectedCellId(state)).toEqual(state.cells.selectedCellId)
    })
  })

  describe('#selectedCell', () => {
    it('returns selected Cell', () => {
      const expected = { id: '1,0', completed: false, row: 1, column: 0, value: 2, notes: [], }
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
})
