import React from 'react'
import PropTypes from 'prop-types'
import './NumberSelect.css'

export const NumberSelect = (props) => {
  return (
    <div className="NumberSelect">
      {props.availableNumbers.map(number => <div key={number} onClick={() => props.handleClick(number)}>{number}</div>)}
    </div>
  )
}

NumberSelect.propTypes = {
  availableNumbers: PropTypes.array.isRequired
}
