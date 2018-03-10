import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './PenMarker.css'
import NumberSelect from 'components/NumberSelect'
import { incrementFaultCounter, updateFaultCellId } from 'redux/actions/fault'
import { markCellCompleted } from 'redux/actions/grid'

export function PenMarker ({ markCellCompleted, incrementFaultCounter, updateFaultCellId }) {

  const onClickAction = (selectedCell, selectedNumber) => {
    const { id, value } = selectedCell
    value === selectedNumber ? markCellCompleted(id) : showTempFaultAlert(id)
  }

  const showTempFaultAlert = id => {
    incrementFaultCounter()
    updateFaultCellId(id)
    setTimeout(() => updateFaultCellId(null), 1000)
  }

  return (
    <div className="PenMarker">
      <NumberSelect onClickAction={onClickAction} />
    </div>
  )
}

const mapDispatchToProps = { markCellCompleted, incrementFaultCounter, updateFaultCellId }
export default connect(null, mapDispatchToProps)(PenMarker)

PenMarker.propTypes = {
  markCellCompleted: PropTypes.func.isRequired,
  incrementFaultCounter: PropTypes.func.isRequired,
  updateFaultCellId: PropTypes.func.isRequired,
}
