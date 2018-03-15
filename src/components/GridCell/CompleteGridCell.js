import React from 'react'
import PropTypes from 'prop-types'

import GridCell from 'components/GridCell'

export function CompleteGridCell ({ cell }) {
  return <GridCell key={cell.id} cell={cell} render={_renderCompleteGridCell} />
}

function _renderCompleteGridCell ({cell, selectedCell, onCellClick }) {
  const { completed, value } = selectedCell
  const cellClassNames = `complete ${(completed && cell.value === value) ? 'cell-selected' : ''}`

  return <div className={cellClassNames} onClick={onCellClick} >{ cell.value }</div>
}

CompleteGridCell.defaultProps = { cell: {} }
CompleteGridCell.propTypes = { cell: PropTypes.object.isRequired }
