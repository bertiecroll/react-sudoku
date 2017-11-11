import React from 'react'
import PropTypes from 'prop-types'
import './Grid.css'
import { GridRow } from './GridRow'

export const Grid = (props) => {
  return (
    <div className="Grid">
      {props.puzzle.map((row, index) => <GridRow key={index} row={row} rowIndex={index} />)}
    </div>
  )
}

Grid.propTypes = {
  puzzle: PropTypes.array.isRequired,
  selectedCell: PropTypes.object,
}
