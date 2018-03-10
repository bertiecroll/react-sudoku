import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import map from 'lodash/fp/map'

import './NumberSelect.css'
import NumberButton from 'components/NumberButton'
import { selectedCell, allNumbers, availableNumbers } from 'redux/selectors/cells'

export function NumberSelect ({ selectedCell, allNumbers, availableNumbers, onClickAction }) {

  const onClickHandler = selectedNumber => {
    if (!selectedCell) {
      console.log('no cell selected')
    } else if (selectedCell.completed) {
      console.log('selected cell already completed')
    } else {
      onClickAction(selectedCell, selectedNumber)
    }
  }

  return (
    <div className="NumberSelect">
      {
        map(number => {
          const isAvailable = availableNumbers.includes(number)
          const handleOnClick = isAvailable ? () => onClickHandler(number) : null

          return <NumberButton key={number} number={number} isAvailable={isAvailable} onClickHandler={handleOnClick} />
        })(allNumbers)
      }
    </div>
  )
}

const mapStateToProps = state => ({
  selectedCell: selectedCell(state),
  allNumbers: allNumbers(state),
  availableNumbers: availableNumbers(state),
})

export default connect(mapStateToProps)(NumberSelect)

NumberSelect.propTypes = {
  selectedCell: PropTypes.object,
  allNumbers: PropTypes.array.isRequired,
  availableNumbers: PropTypes.array.isRequired,
  onClickAction: PropTypes.func.isRequired,
}
