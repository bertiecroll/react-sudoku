import React from 'react'
import PropTypes from 'prop-types'
import './Grid.css'

export const GridCell = (props) => {
  return (
    <div className="GridCell">
      { props.number }
    </div>
  )
}

GridCell.propTypes = {
  number: PropTypes.number.isRequired
}
