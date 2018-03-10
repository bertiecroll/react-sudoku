import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './GridCell.css'
import { updateSelectedCellId } from 'redux/actions/grid'
import { selectedCell } from 'redux/selectors/cells'
import { faultCellId } from 'redux/selectors/fault'

export function GridCell ({ render, cell, selectedCell, faultCellId, updateSelectedCellId }) {
  return (
    <div className="GridCell">
      { render({ cell, selectedCell, faultCellId, onCellClick: () => updateSelectedCellId(cell.id) }) }
    </div>
  )
}

const mapStateToProps = state => ({ selectedCell: selectedCell(state), faultCellId: faultCellId(state) })
const mapDispatchToProps = { updateSelectedCellId }

export default connect(mapStateToProps, mapDispatchToProps)(GridCell)

GridCell.defaultProps = {
  selectedCell: {}
}

GridCell.propTypes = {
  faultCellId: PropTypes.string,
  selectedCell: PropTypes.object.isRequired,
  updateSelectedCellId: PropTypes.func.isRequired,
}
