import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './PenMarker.css'
import NumberSelect from 'components/NumberSelect'
// import { incrementFaultCounter, setFaultCell } from 'redux/actions/fault'
import { markCellCompleted } from 'redux/actions/grid'
import { selectedCell } from 'redux/selectors/cells'

export const PenMarker = ({ selectedCell,  markCellCompleted }) => {
  const onClickHandle = (selectedNumber) => {
    const { id, completed, value } = selectedCell
    if (!completed) {
      if (value === selectedNumber) markCellCompleted(id)
    } else {
      console.log('no cell selected')
    }
  }

  // const showTempFaultMessage = () => {
  //   props.incrementFaultCounter()
  //   props.setFaultCell(props.selectedCell.row, props.selectedCell.column)
  //   setTimeout(() => props.setFaultCell(null, null), 1000)
  // }

  return (
    <div className="PenMarker">
      <NumberSelect onClickHandler={onClickHandle} />
    </div>
  )
}

const mapStateToProps = state => ({ selectedCell: selectedCell(state) })
const mapDispatchToProps = { markCellCompleted }

export default connect(mapStateToProps, mapDispatchToProps)(PenMarker)

PenMarker.defaultProps = {
  selectedCell: {},
}

PenMarker.propTypes = {
  selectedCell: PropTypes.object,
  markCellCompleted: PropTypes.func.isRequired,
}
