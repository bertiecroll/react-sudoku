import React from 'react'
import PropTypes from 'prop-types'
import './Grid.css'
import { GridRow } from './GridRow'
import { mapWithIndex } from 'lib/utils'

export function Grid (props) {
  return (
    <div className="Grid">
      { mapWithIndex((cells, key) => <GridRow key={key} cells={cells} />)(props.cellsByRow) }
    </div>
  )
}

Grid.defaultProps = {
  cellsByRow: {}
}

Grid.propTypes = {
  cellsByRow: PropTypes.object.isRequired,
}
