import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './FaultCounter.css'
import { faultCount } from 'redux/selectors/fault'

export function FaultCounter ({ faultCount }) {
  return (
    <div className="FaultCounter">
      Faults: { faultCount === 0 ? 'none' : faultCount }
    </div>
  )
}

const mapStateToProps = state => ({ faultCount: faultCount(state) })
export default connect(mapStateToProps)(FaultCounter)

FaultCounter.defaultProps = {
  faultCount: 0,
}

FaultCounter.propTypes = {
  faultCount: PropTypes.number.isRequired,
}
