import compose from 'lodash/fp/compose'
import groupBy from 'lodash/fp/groupBy'
import filter from 'lodash/fp/filter'
import map from 'lodash/fp/map'
import sortBy from 'lodash/fp/sortBy'
import uniqBy from 'lodash/fp/uniqBy'
import values from 'lodash/fp/values'
import every from 'lodash/fp/every'

export const ERROR = 'ERROR'
export const LOADING = 'LOADING'
export const IN_PROGRESS = 'IN_PROGRESS'
export const COMPLETED = 'COMPLETED'


export const moduleState = state => state.cells

export const cellsById = state => moduleState(state).byId

export const cellsByRow = compose(groupBy('yCoord'), cellsById)

export const cells = compose(values, cellsById)

export const areAllCellsCompleted = compose(every('completed'), cellsById)

export const selectedCellId = state => moduleState(state).selectedCellId

export const selectedCell = state => cellsById(state)[selectedCellId(state)]

const sortedUniqCellValues = compose(
  map('value'),
  sortBy(['value']),
  uniqBy('value'),
)

export const allNumbers = compose(
  sortedUniqCellValues,
  cells,
)

export const availableNumbers = compose(
  sortedUniqCellValues,
  filter(['completed', false]),
  cells,
)

export const isFetching = state => moduleState(state).fetching

export const errorMessage = state => moduleState(state).error

export const currentStatus = state => {
  if (isFetching(state)) return LOADING
  if (areAllCellsCompleted(state)) return COMPLETED

  return IN_PROGRESS
}
