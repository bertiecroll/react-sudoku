import React from 'react'
import { connect } from 'react-redux'

import './SwitchButton.css'
import { setCurrentMarker } from 'redux/actions/controlBar'
import { currentMarker, PEN_MARKER, PENCIL_MARKER } from 'redux/selectors/controlBar'

export function SwitchButton ({ currentMarker, setCurrentMarker }) {
  const handlePenButtonClick = () => setCurrentMarker(PEN_MARKER)
  const handlePencilButtonClick = () => setCurrentMarker(PENCIL_MARKER)

  return (
    <div className="SwitchButton">
      <button className={ currentMarker === PEN_MARKER ? 'selected' : '' } onClick={ handlePenButtonClick }>Pen</button>
      <button className={ currentMarker === PENCIL_MARKER ? 'selected' : '' } onClick={ handlePencilButtonClick }>Pencil</button>
    </div>
  )
}

const mapStateToProps = state => ({ currentMarker: currentMarker(state) })
const mapDispatchToProps = { setCurrentMarker }

export default connect(mapStateToProps, mapDispatchToProps)(SwitchButton)
