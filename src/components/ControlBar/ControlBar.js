import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SwitchButton from 'components/SwitchButton'
import PenMarker from 'components/PenMarker'
import PencilMarker from 'components/PencilMarker'
import { PEN_MARKER, currentMarker } from 'redux/selectors/controlBar'

export function ControlBar ({ currentMarker }) {
  const Marker = currentMarker === PEN_MARKER ? PenMarker : PencilMarker

  return (
    <div className="ControlBar">
      <SwitchButton />
      <Marker />
    </div>
  )
}

const mapStateToProps = state => ({ currentMarker: currentMarker(state) })
export default connect(mapStateToProps)(ControlBar)

ControlBar.propTypes = {
  currentMarker: PropTypes.string.isRequired,
}
