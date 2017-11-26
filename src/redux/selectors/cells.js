import {
  compose,
  groupBy,
  filter,
  map,
  sortBy,
  uniqBy,
  values
} from 'lodash/fp'

export const moduleState = state => state.cells

export const cellsById = state => moduleState(state).byId

export const cellsByRow = compose(groupBy('row'), cellsById)

export const cells = compose(values, cellsById)

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
