import React from 'react'
import PropTypes from 'prop-types'
import './Grid.css'
import { GridCell } from './GridCell'

export const GridRow = (props) => {
  return (
    <div className="GridRow">
      {props.row.map((number, index) => <GridCell key={index} number={number} selected={ props.selected && index === props.selectedCell.column } />)}
    </div>
  )
}

GridRow.propTypes = {
  row: PropTypes.array.isRequired
}
