import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './PencilMarker.css'
import NumberSelect from 'components/NumberSelect'
import { addPencilMark, removePencilMark } from 'redux/actions/grid'
import { selectedCell } from 'redux/selectors/cells'

export const PencilMarker = ({ selectedCell, addPencilMark, removePencilMark }) => {
  const onClickHandle = (selectedNumber) => {
    const { id, completed, pencilMarks } = selectedCell
    if (!completed) {
      pencilMarks.includes(selectedNumber) ? removePencilMark(id, selectedNumber) : addPencilMark(id, selectedNumber)
    }
  }

  return (
    <div className="PencilMarker">
      <NumberSelect onClickHandler={onClickHandle} />
    </div>
  )
}

const mapStateToProps = state => ({ selectedCell: selectedCell(state) })
const mapDispatchToProps = { addPencilMark, removePencilMark }

export default connect(mapStateToProps, mapDispatchToProps)(PencilMarker)

PencilMarker.defaultProps = {
  selectedCell: {},
}

PencilMarker.propTypes = {
  selectedCell: PropTypes.object,
  addPencilMark: PropTypes.func.isRequired,
  removePencilMark: PropTypes.func.isRequired,
}
