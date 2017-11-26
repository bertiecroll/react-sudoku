import React from 'react'
import { connect } from 'react-redux'
import './SwitchButton.css'

import { setCurrentMarker } from 'redux/actions/controlBar'

export const SwitchButton = props => {
  const handlePenButtonClick = () => props.setCurrentMarker('PEN_MARKER')
  const handlePencilButtonClick = () => props.setCurrentMarker('PENCIL_MARKER')

  return (
    <div className="SwitchButton">
      <button className={ props.currentMarker === 'PEN_MARKER' ? 'selected' : '' } onClick={ handlePenButtonClick }>Pen</button>
      <button className={ props.currentMarker === 'PENCIL_MARKER' ? 'selected' : '' } onClick={ handlePencilButtonClick }>Pencil</button>
    </div>
  )
}

const mapStateToProps = state => ({ currentMarker: state.controlBar.currentMarker })
const mapDispatchToProps = { setCurrentMarker }

export default connect(mapStateToProps, mapDispatchToProps)(SwitchButton)
