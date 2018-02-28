import React from 'react'

import './ProgressBar.css'
import FaultCounter from 'components/FaultCounter'
import Timer from 'components/Timer'

export const ProgressBar = props => {
  return (
    <div className="ProgressBar">
      < FaultCounter />
      < Timer />
    </div>
  )
}

export default ProgressBar
