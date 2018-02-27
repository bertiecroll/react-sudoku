import compose from 'lodash/fp/compose'
import { updateArrayItem } from 'lib/utils'

export const setValue = value => updateArrayItem(cell => (
  { ...cell, value }
))

export const toggleCompleted = updateArrayItem(cell => (
  { ...cell, completed: !cell.completed }
))

export const clearExcludedValues = updateArrayItem(cell => (
  { ...cell, excludedValues: [] }
))

export const markValueAsExcluded = updateArrayItem(cell => (
  { ...cell, value: null, excludedValues: [...cell.excludedValues, cell.value] }
))

export const toggleMirrorPair = (position, cells) => compose(
  toggleCompleted(cells.length - position - 1),
  toggleCompleted(position),
)(cells)

export const buildCell = (xCoord, yCoord) => ({
  id: `${xCoord},${yCoord}`,
  xCoord,
  yCoord,
  value: null,
  completed: false,
  excludedValues: []
})
