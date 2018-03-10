import React from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/fp/map'
import includes from 'lodash/fp/includes'

import GridCell from 'components/GridCell'

export function EmptyGridCell ({ cell }) {
  return <GridCell cell={cell} render={_renderEmptyGridCell} />
}

function _renderEmptyGridCell ({ cell, selectedCell, faultCellId, onCellClick }) {
  const hasFault = faultCellId === cell.id
  const pencilMarkExists = includes(selectedCell.value)(cell.pencilMarks)
  const isSelected = (cell === selectedCell || (selectedCell.completed && pencilMarkExists))
  const cellClassNames = isSelected ? 'empty cell-selected' : 'empty'

  return (
    <div className={cellClassNames} onClick={onCellClick} >
      {hasFault && <div className="fault">X</div>}
      {map((number, key) => <div className="pencil-marks" key={key}>{number}</div>)(cell.pencilMarks)}
    </div>
  )
}

EmptyGridCell.defaultProps = { cell: {} }
EmptyGridCell.propTypes = { cell: PropTypes.object.isRequired }
