import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './NumberSelect.css'
import { allNumbers, availableNumbers } from 'redux/selectors/cells'

export const NumberSelect = ({ allNumbers, availableNumbers, onClickHandler }) => {
  return (
    <div className="NumberSelect">
      {allNumbers.map(number => {
          const isAvailable = availableNumbers.includes(number)
          const handleOnClick = isAvailable ? () => onClickHandler(number) : () => {}

          return (
            <div
              className={isAvailable ? '' : 'not-available'}
              key={number}
              onClick={handleOnClick}>
              {number}
            </div>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = state => ({
  allNumbers: allNumbers(state),
  availableNumbers: availableNumbers(state),
})

export default connect(mapStateToProps)(NumberSelect)

NumberSelect.propTypes = {
  allNumbers: PropTypes.array.isRequired,
  availableNumbers: PropTypes.array.isRequired,
  onClickHandler: PropTypes.func.isRequired,
}
