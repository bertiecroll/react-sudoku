import * as cellActions from './cell'

describe('#setValue', () => {
  it('returns cells array with given cell value set', () => {
    const cells = [
      { xCoord: 0, yCoord: 0, value: null },
      { xCoord: 0, yCoord: 1, value: null },
      { xCoord: 0, yCoord: 2, value: null },
    ]
    const expected = [
      { xCoord: 0, yCoord: 0, value: 1 },
      { xCoord: 0, yCoord: 1, value: null },
      { xCoord: 0, yCoord: 2, value: null },
    ]

    expect(cellActions.setValue(1)(0, cells)).toEqual(expected)
  })
})

describe('#toggleCompleted', () => {
  it('returns cells array with given cell completed flag toggled', () => {
    const completedCell = [ { xCoord: 0, yCoord: 0, completed: true } ]
    const incompleteCell = [ { xCoord: 0, yCoord: 0, completed: false } ]

    expect(cellActions.toggleCompleted(0, completedCell)).toEqual(incompleteCell)
    expect(cellActions.toggleCompleted(0, incompleteCell)).toEqual(completedCell)
  })
})

describe('#clearExcludedValues', () => {
  it('returns cells array with all excluded values from given cell removed', () => {
    const cells = [
      { xCoord: 0, yCoord: 0, excludedValues: [1,2,3] },
      { xCoord: 0, yCoord: 1, excludedValues: [] },
      { xCoord: 0, yCoord: 2, excludedValues: [] },
    ]
    const expected = [
      { xCoord: 0, yCoord: 0, excludedValues: [] },
      { xCoord: 0, yCoord: 1, excludedValues: [] },
      { xCoord: 0, yCoord: 2, excludedValues: [] },
    ]

    expect(cellActions.clearExcludedValues(0, cells)).toEqual(expected)
  })
})

describe('#markValueAsExcluded', () => {
  it('returns cells array with current value of given cell added to excluded values and sets value to null', () => {
    const cells = [
      { xCoord: 0, yCoord: 0, value: 1, excludedValues: [] },
      { xCoord: 0, yCoord: 1, value: 2, excludedValues: [] },
      { xCoord: 0, yCoord: 2, value: 3, excludedValues: [] },
    ]
    const expected = [
      { xCoord: 0, yCoord: 0, value: null, excludedValues: [1] },
      { xCoord: 0, yCoord: 1, value: 2, excludedValues: [] },
      { xCoord: 0, yCoord: 2, value: 3, excludedValues: [] },
    ]

    expect(cellActions.markValueAsExcluded(0, cells)).toEqual(expected)
  })
})

describe('#toggleMirrorPair', () => {
  it('returns cells array with cell at given position and cell position from end completed flags toggled', () => {
    const cells = [
      { xCoord: 0, yCoord: 0, completed: true },
      { xCoord: 1, yCoord: 1, completed: true },
      { xCoord: 2, yCoord: 2, completed: true },
      { xCoord: 2, yCoord: 2, completed: true },
    ]

    const expected = [
      { xCoord: 0, yCoord: 0, completed: true },
      { xCoord: 1, yCoord: 1, completed: false },
      { xCoord: 2, yCoord: 2, completed: false },
      { xCoord: 2, yCoord: 2, completed: true },
    ]

    expect(cellActions.toggleMirrorPair(1, cells)).toEqual(expected)
  })
})

describe('#buildCell', () => {
  it('returns cell object for given coords with id, null value and empty excludedValues', () => {
    const expected = {
      id: `0,1`,
      xCoord: 0,
      yCoord: 1,
      value: null,
      completed: false,
      excludedValues: []
    }

    expect(cellActions.buildCell(0, 1)).toEqual(expected)
  })
})
