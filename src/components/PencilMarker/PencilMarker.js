import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './PencilMarker.css'
import NumberSelect from 'components/NumberSelect'
import { addPencilMark, removePencilMark } from 'redux/actions/grid'

export function PencilMarker ({ addPencilMark, removePencilMark }) {

  const onClickAction = (selectedCell, selectedNumber) => {
    const { id, pencilMarks } = selectedCell
    pencilMarks.includes(selectedNumber) ? removePencilMark(id, selectedNumber) : addPencilMark(id, selectedNumber)
  }

  return (
    <div className="PencilMarker">
      <NumberSelect onClickAction={onClickAction} />
    </div>
  )
}

const mapDispatchToProps = { addPencilMark, removePencilMark }
export default connect(null, mapDispatchToProps)(PencilMarker)

PencilMarker.propTypes = {
  addPencilMark: PropTypes.func,
  removePencilMark: PropTypes.func,
}
