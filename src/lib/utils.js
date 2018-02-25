import map from 'lodash/fp/map'
import flatMap from 'lodash/fp/flatMap'
import range from 'lodash/fp/range'
import curry from 'lodash/curry'

const mapWithIndex = map.convert({ 'cap': false })

const _updateArrayItem = (transformer, itemIndex, array) => mapWithIndex(
  (cell, index) => index === itemIndex ? transformer(cell) : cell
)(array)

export const updateArrayItem = curry(_updateArrayItem)

export const genMap = length => transformer => flatMap(transformer)(range(0, length))
