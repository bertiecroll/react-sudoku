import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SwitchButton from 'components/SwitchButton'
import PenMarker from 'components/PenMarker'
import PencilMarker from 'components/PencilMarker'
import { PEN_MARKER, currentMarker } from 'redux/selectors/controlBar'

export const ControlBar = props => {
  return (
    <div>
      <SwitchButton />
      { props.currentMarker === PEN_MARKER ? <PenMarker /> : <PencilMarker /> }
    </div>
  )
}

const mapStateToProps = state => ({ currentMarker: currentMarker(state) })

export default connect(mapStateToProps)(ControlBar)

ControlBar.propTypes = {
  currentMarker: PropTypes.string.isRequired,
}
