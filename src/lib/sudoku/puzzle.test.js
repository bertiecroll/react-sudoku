import range from 'lodash/fp/range'
import { generatePuzzle, confirmUniqueSolution } from './puzzle'
import { filters } from './grid'

describe('#generatePuzzle', () => {
  it('adds value to each cell in grid so that every row, column, and section contains 1..9 only once', () => {
    const solution = generatePuzzle()

    range(0, 9).forEach(number => {
      const xValues = filters.byXCoord(number)(solution).map(cell => cell.value)
      const yValues = filters.byYCoord(number)(solution).map(cell => cell.value)
      const sectionValues = filters.bySection(number)(solution).map(cell => cell.value)

      expect(xValues).toEqual(expect.arrayContaining(range(1, 10)))
      expect(yValues).toEqual(expect.arrayContaining(range(1, 10)))
      expect(sectionValues).toEqual(expect.arrayContaining(range(1, 10)))
    })
  })
})

describe('#confirmUniqueSolution', () => {
  it('returns true if only one solution exists for given puzzle', () => {
    const uniqueSolution = generatePuzzle('TEST')

    expect(confirmUniqueSolution(uniqueSolution)).toBe(true)
  })

  it('returns false if multiple solutions exists for given puzzle', () => {
    const nonUniqueSolution = [
      { id: '0,0', xCoord: 0, yCoord: 0, completed: true, value: 1 },
      { id: '1,1', xCoord: 1, yCoord: 1, completed: false, value: 2 },
      { id: '2,2', xCoord: 2, yCoord: 2, completed: false, value: 3 },
    ]

    expect(confirmUniqueSolution(nonUniqueSolution)).toBe(false)
  })
})
