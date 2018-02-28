import {
  filters,
  maps,
  createCells,
  valuesForCellId,
  availableValuesForCell,
  completedCellsCount,
  compareCells
} from './grid'

describe('filters', () => {
  describe('#byId', () => {
    it('returns array of cells for filtered by given Id', () => {
      const cells = [
        { id: '0,0', xCoord: 0, yCoord: 0 },
        { id: '0,1', xCoord: 0, yCoord: 1 },
        { id: '0,2', xCoord: 0, yCoord: 2 },
        { id: '1,1', xCoord: 1, yCoord: 1 },
        { id: '2,2', xCoord: 2, yCoord: 2 },
      ]
      const expected = [
        { id: '0,0', xCoord: 0, yCoord: 0 },
      ]

      expect(filters.byId('0,0')(cells)).toEqual(expected)
    })
  })

  describe('#byXCoord', () => {
    it('returns array of cells for filtered by given xCoord', () => {
      const cells = [
        { xCoord: 0, yCoord: 0 },
        { xCoord: 0, yCoord: 1 },
        { xCoord: 0, yCoord: 2 },
        { xCoord: 1, yCoord: 1 },
        { xCoord: 2, yCoord: 2 },
      ]
      const expected = [
        { xCoord: 0, yCoord: 0 },
        { xCoord: 0, yCoord: 1 },
        { xCoord: 0, yCoord: 2 },
      ]

      expect(filters.byXCoord(0)(cells)).toEqual(expected)
    })
  })

  describe('#byYCoord', () => {
    it('returns array of cells for filtered by given yCoord', () => {
      const cells = [
        { xCoord: 0, yCoord: 0 },
        { xCoord: 0, yCoord: 1 },
        { xCoord: 0, yCoord: 2 },
        { xCoord: 1, yCoord: 1 },
        { xCoord: 2, yCoord: 2 },
      ]
      const expected = [
        { xCoord: 0, yCoord: 1 },
        { xCoord: 1, yCoord: 1 },
      ]

      expect(filters.byYCoord(1)(cells)).toEqual(expected)
    })
  })

  describe('#bySection', () => {
    it('returns array of cells for filtered by given section', () => {
      const cells = [
        { xCoord: 0, yCoord: 0 },
        { xCoord: 1, yCoord: 1 },
        { xCoord: 2, yCoord: 2 },
        { xCoord: 3, yCoord: 1 },
        { xCoord: 7, yCoord: 2 },
      ]
      const expected = [
        { xCoord: 0, yCoord: 0 },
        { xCoord: 1, yCoord: 1 },
        { xCoord: 2, yCoord: 2 },
      ]

      expect(filters.bySection(0)(cells)).toEqual(expected)
    })
  })

  describe('#complete', () => {
    it('returns array of cells for filtered by completed is true', () => {
      const cells = [
        { xCoord: 0, yCoord: 0, completed: true },
        { xCoord: 1, yCoord: 1, completed: true },
        { xCoord: 2, yCoord: 2, completed: false },
      ]
      const expected = [
        { xCoord: 0, yCoord: 0, completed: true },
        { xCoord: 1, yCoord: 1, completed: true },
      ]

      expect(filters.complete(cells)).toEqual(expected)
    })
  })

  describe('#incomplete', () => {
    it('returns array of cells for filtered by completed is false', () => {
      const cells = [
        { xCoord: 0, yCoord: 0, completed: true },
        { xCoord: 1, yCoord: 1, completed: true },
        { xCoord: 2, yCoord: 2, completed: false },
      ]
      const expected = [
        { xCoord: 2, yCoord: 2, completed: false },
      ]

      expect(filters.incomplete(cells)).toEqual(expected)
    })
  })
})

describe('maps', () => {
  describe('#markAllCompleted', () => {
    it('returns given cells all marked as completed', () => {
      const cells = [
        { xCoord: 0, yCoord: 0, completed: true },
        { xCoord: 1, yCoord: 1, completed: false },
        { xCoord: 2, yCoord: 2, completed: false },
      ]
      const expected = [
        { xCoord: 0, yCoord: 0, completed: true },
        { xCoord: 1, yCoord: 1, completed: true },
        { xCoord: 2, yCoord: 2, completed: true },
      ]

      expect(maps.markAllCompleted(cells)).toEqual(expected)
    })
  })

  describe('#clearAllExcludedValues', () => {
    it('returns given cells all with excludedValues as empty', () => {
      const cells = [
        { xCoord: 0, yCoord: 0, excludedValues: [1, 2, 3] },
        { xCoord: 1, yCoord: 1, excludedValues: [4, 5, 6] },
        { xCoord: 2, yCoord: 2, excludedValues: [7, 8, 9] },
      ]
      const expected = [
        { xCoord: 0, yCoord: 0, excludedValues: [] },
        { xCoord: 1, yCoord: 1, excludedValues: [] },
        { xCoord: 2, yCoord: 2, excludedValues: [] },
      ]

      expect(maps.clearAllExcludedValues(cells)).toEqual(expected)
    })
  })

  describe('#clearIncompleteCellValues', () => {
    it('returns given cells with incomplete cells having null value', () => {
      const cells = [
        { xCoord: 0, yCoord: 0, completed: true, value: 1 },
        { xCoord: 1, yCoord: 1, completed: false, value: 2 },
        { xCoord: 2, yCoord: 2, completed: false, value: 3 },
      ]
      const expected = [
        { xCoord: 0, yCoord: 0, completed: true, value: 1 },
        { xCoord: 1, yCoord: 1, completed: false, value: null },
        { xCoord: 2, yCoord: 2, completed: false, value: null },
      ]

      expect(maps.clearIncompleteCellValues(cells)).toEqual(expected)
    })
  })

  describe('#cellIdValuePairs', () => {
    it('returns array of id value pairs for each given cell', () => {
      const cells = [
        { id: '0,0', xCoord: 0, yCoord: 0, completed: true, value: 1 },
        { id: '1,1', xCoord: 1, yCoord: 1, completed: false, value: 2 },
        { id: '2,2', xCoord: 2, yCoord: 2, completed: false, value: 3 },
      ]
      const expected = [
        { '0,0': 1 },
        { '1,1': 2 },
        { '2,2': 3 },
      ]

      expect(maps.cellIdValuePairs(cells)).toEqual(expected)
    })
  })
})

describe('#createCells', () => {
  it('returns array of cells for 9x9 grid', () => {
    const cells = createCells()

    expect(cells).toHaveLength(81)
  })
})

describe('#valuesForCellId', () => {
  it('returns array of values, after filtering cells by Id', () => {
    const cells = [
      { id: '0,0', xCoord: 0, yCoord: 0, completed: true, value: 1 },
      { id: '1,1', xCoord: 1, yCoord: 1, completed: false, value: 2 },
      { id: '2,2', xCoord: 2, yCoord: 2, completed: false, value: 3 },
    ]
    const expected = [2]

    expect(valuesForCellId('1,1')(cells)).toEqual(expected)
  })
})

describe('#availableValuesForCell', () => {
  it('returns array of available values, removing values used by neighbouring cells and excluded values', () => {
    const cells = [
      { id: '0,0', xCoord: 0, yCoord: 0, completed: true, value: 1 },
      { id: '1,1', xCoord: 1, yCoord: 1, completed: false, value: 2 },
      { id: '2,2', xCoord: 2, yCoord: 2, completed: false, value: null, excludedValues: [3,4,5,6] },
    ]
    const expected = [7,8,9]

    expect(availableValuesForCell(cells[2])(cells)).toEqual(expected)
  })
})

describe('#completedCellsCount', () => {
  it('returns number of completed cells', () => {
    const cells = [
      { xCoord: 0, yCoord: 0, completed: true },
      { xCoord: 1, yCoord: 1, completed: true },
      { xCoord: 2, yCoord: 2, completed: false },
    ]

    expect(completedCellsCount(cells)).toEqual(2)
  })
})

describe('#compareCells', () => {
  it('returns true if given cell arrays have equal ids and values', () => {
    const cells = [
      { id: '0,0', xCoord: 0, yCoord: 0, value: 1, excludedValues: [] },
      { id: '1,1', xCoord: 1, yCoord: 1, value: 2, excludedValues: []},
      { id: '2,2', xCoord: 2, yCoord: 2, value: 3, excludedValues: [] },
    ]

    const otherCells = [
      { id: '0,0', xCoord: 0, yCoord: 0, value: 1, excludedValues: [] },
      { id: '1,1', xCoord: 1, yCoord: 1, value: 2, excludedValues: [2,3] },
      { id: '2,2', xCoord: 2, yCoord: 2, value: 3, excludedValues: [1] },
    ]

    expect(compareCells(cells)(otherCells)).toBe(true)
  })

  it('returns false if given cell arrays do not have equal ids and values', () => {
    const cells = [
      { id: '0,0', xCoord: 0, yCoord: 0, value: 1, excludedValues: [] },
      { id: '1,1', xCoord: 1, yCoord: 1, value: 2, excludedValues: []},
      { id: '2,2', xCoord: 2, yCoord: 2, value: 3, excludedValues: [] },
    ]

    const otherCells = [
      { id: '0,0', xCoord: 0, yCoord: 0, value: 1, excludedValues: [] },
      { id: '1,1', xCoord: 1, yCoord: 1, value: 2, excludedValues: [2,3] },
      { id: '2,2', xCoord: 2, yCoord: 2, value: 4, excludedValues: [1] },
    ]

    expect(compareCells(cells)(otherCells)).toBe(false)
  })
})
