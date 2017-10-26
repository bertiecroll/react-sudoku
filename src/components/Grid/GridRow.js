import React from 'react'
import PropTypes from 'prop-types'
import './Grid.css'
import { GridCell } from './GridCell'

export const GridRow = (props) => {
  return (
    <div className="GridRow">
      {props.numbers.map(number => <GridCell number={number} />)}
    </div>
  )
}

GridRow.propTypes = {
  numbers: PropTypes.array.isRequired
}
