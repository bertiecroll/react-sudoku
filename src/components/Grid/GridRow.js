import React from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/fp/map'

import './Grid.css'
import { CompleteGridCell, EmptyGridCell } from 'components/GridCell'

export function GridRow ({ cells }) {
  return (
    <div className="GridRow">
      {
        map(cell => cell.completed ?
          <CompleteGridCell key={cell.id} cell={cell} /> :
          <EmptyGridCell key={cell.id} cell={cell} />
        )(cells)
      }
    </div>
  )
}

GridRow.propTypes = {
  cells: PropTypes.array.isRequired
}
