import React from 'react'
import PropTypes from 'prop-types'
import './Grid.css'
import { GridRow } from './GridRow'

export const Grid = (props) => {
  return (
    <div className="Grid">
      {props.numbers.map(number => <GridRow numbers={number} />)}
    </div>
  )
}

Grid.propTypes = {
  numbers: PropTypes.array.isRequired
}
