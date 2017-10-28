import React from 'react'
import PropTypes from 'prop-types'
import './Grid.css'

export const GridCell = (props) => {
  let cellClassNames = props.number === 0 ? 'vacant' : 'occupied'
  if (props.selected) { cellClassNames += " cell-selected" }
  return (
    <div className="GridCell">
      <div className={cellClassNames}>{ props.number === 0 ? '' : props.number }</div>
    </div>
  )
}

GridCell.propTypes = {
  number: PropTypes.number.isRequired
}
