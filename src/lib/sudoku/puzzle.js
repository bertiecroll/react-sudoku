import sample from 'lodash/fp/sample'
import compose from 'lodash/fp/compose'
import without from 'lodash/fp/without'
import random from 'lodash/random'
import includes from 'lodash/fp/includes'
import * as cellActions from './cell'
import {
  maps,
  createCells,
  valuesForCellId,
  availableValuesForCell,
  completedCellsCount,
  compareCells,
} from './grid'

const DIFFICULTY_LEVELS = {
  'TEST': 80,
  'EASY': 48,
  'MEDIUM': 38,
  'HARD': 29,
}

export const generatePuzzle = (difficulty= 'EASY') => compose(
  _hideMirrorPairs(difficulty),
  maps.markAllCompleted,
  _generateSolution()
)(createCells())

export const confirmUniqueSolution = cells => compose(
  compareCells(cells),
  _generateSolution(cells),
  maps.clearIncompleteCellValues,
  maps.clearAllExcludedValues
)(cells)

// While loop used to prevent maximum callstack exceeded errors on higher difficulty solutions.
// Loop traverses cells adding a value to each cell whilst conforming to the rules of sudoku.
// Optional previous solution can be given to provide base values
const _generateSolution = (prevSolution= []) => startCells => {
  let [ cells, position, direction ] = [ startCells, 0, 1 ]

  while (position >= 0 && position < cells.length) {
    const cell = cells[position]

    // If cell completed, no action required, move to next position
    if (!cell.completed) {
      cells = (cell.value) ? cellActions.markValueAsExcluded(position, cells) : cells
      const values = availableValuesForCell(cells[position])(cells)

      // If multiple available values, remove value from previous solution
      // Ensures previous solution will not be repeated if possible
      const updatedValues = (values.length > 1) ? without(valuesForCellId(cell.id)(prevSolution))(values) : values

      // If no available values, clear excluded values for cell and return to previous position
      // Else find new value, add to cell and move on to next position
      if (updatedValues.length === 0) {
        cells = cellActions.clearExcludedValues(position, cells)
        direction = -1
      } else {
        cells = cellActions.setValue(sample(updatedValues))(position, cells)
        direction = 1
      }
    }

    position += direction
  }

  return cells
}

// Recursively sets cell pairs as imcomplete until number of completed cells
// is less than or equal to difficulty level. If after removing pair, the solution
// is no longer unique, action is reverted.
const _hideMirrorPairs = (difficulty, usedPositions= []) => cells => {
  if (completedCellsCount(cells) <= DIFFICULTY_LEVELS[difficulty]) return cells

  const position = _randomPositionGenerator(Math.floor(cells.length / 2), usedPositions)
  const nextUsedPositions = usedPositions.concat([position])

  const newCells = cellActions.toggleMirrorPair(position, cells)
  const unique = confirmUniqueSolution(newCells)
  const nextCells = unique ? newCells : cells

  return _hideMirrorPairs(difficulty, nextUsedPositions)(nextCells)
}

// Returns integer between 0 and maxValue inclusively,
// excluding any value contained in excludedValues array
const _randomPositionGenerator = (maxValue, excludedValues) => {
  const candidate = random(maxValue)
  return includes(candidate)(excludedValues) ? _randomPositionGenerator(maxValue, excludedValues) : candidate
}
