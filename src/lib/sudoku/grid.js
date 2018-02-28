import filter from 'lodash/fp/filter'
import map from 'lodash/fp/map'
import isEqual from 'lodash/isEqual'
import difference from 'lodash/fp/difference'
import range from 'lodash/fp/range'
import compose from 'lodash/fp/compose'
import { genMap } from 'lib/utils'
import { buildCell } from './cell'

const GRID_SIZE = 9
const SECTION_SIZE = 3

export const filters = {
  byId: id => filter({ id }),

  byXCoord: xCoord => filter({ xCoord }),

  byYCoord: yCoord => filter({ yCoord }),

  bySection: section => filter(cell => _sectionForCell(cell) === section),

  complete: filter('completed'),

  incomplete: filter(['completed', false ]),

  neighboursForCell: ({ xCoord, yCoord }) => cells => ([
    ...filters.byXCoord(xCoord)(cells),
    ...filters.byYCoord(yCoord)(cells),
    ...filters.bySection(_sectionForCell({ xCoord, yCoord }))(cells)
  ]),
}

export const maps = {
  markAllCompleted: map(cell => (
    { ...cell, completed: true }
  )),

  clearAllExcludedValues: map(cell => (
    { ...cell, excludedValues: [] }
  )),

  clearIncompleteCellValues: map(cell => (
    cell.completed ? cell : { ...cell,  value: null }
  )),

  cellIdValuePairs: map(cell => (
    { [cell.id]: cell.value }
  )),

  values: map('value')
}

export const createCells = () => _gridMap(
  xCoord => _gridMap(yCoord => buildCell(xCoord, yCoord))
)

export const valuesForCellId = id => compose(
  maps.values,
  filters.byId(id)
)

export const availableValuesForCell = cell => compose(
  difference(difference(_defaultValues)(cell.excludedValues)),
  _usedValuesForCell(cell),
)

export const completedCellsCount = cells => filters.complete(cells).length

export const compareCells = cells => otherCells => isEqual(
  maps.cellIdValuePairs(cells),
  maps.cellIdValuePairs(otherCells)
)

const _defaultValues = range(1, GRID_SIZE + 1)
const _gridMap = genMap(GRID_SIZE)

const _sectionForCell = ({ xCoord, yCoord }) => (
  Math.floor(xCoord / SECTION_SIZE) + (Math.floor(yCoord / SECTION_SIZE) * SECTION_SIZE)
)

const _usedValuesForCell = cell => compose(
  maps.values,
  filters.neighboursForCell(cell)
)
