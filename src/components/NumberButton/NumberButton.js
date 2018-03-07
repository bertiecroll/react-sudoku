import React from 'react'
import PropTypes from 'prop-types'

import './NumberButton.css'

export default function NumberButton ({ number, isAvailable, onClickHandler }) {
  const classNames = `NumberButton ${isAvailable ? '' : 'not-available'}`

  return (
    <div
      className={classNames}
      onClick={onClickHandler}>
      {number}
    </div>
  )
}

NumberButton.defaultProps = {
  isAvailable: false,
  onClickHandler: () => {},
}

NumberButton.propTypes = {
  number: PropTypes.number.isRequired,
  isAvailable: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
}
