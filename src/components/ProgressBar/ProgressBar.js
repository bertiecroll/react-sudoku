import React from 'react'

import './ProgressBar.css'
import FaultCounter from 'components/FaultCounter'
import Timer from 'components/Timer'

export default function ProgressBar (props) {
  return (
    <div className="ProgressBar">
      < FaultCounter />
      < Timer />
    </div>
  )
}
