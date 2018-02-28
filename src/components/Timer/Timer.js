import React, { Component } from 'react'
import { displayCount } from 'lib/formatters'

import './Timer.css'

export default class Timer extends Component {

  state = {
    elapsedTime: 0,
    previousTime: Date.now(),
  }

  onTick = () => {
    const now = Date.now()
    this.setState({
      elapsedTime: (this.state.elapsedTime + (now - this.state.previousTime)),
      previousTime: Date.now(),
    })
  }

  componentDidMount () {
    this.interval = setInterval(this.onTick)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render () {
    const seconds = Math.floor(this.state.elapsedTime / 1000) % 60
    const minutes = Math.floor(this.state.elapsedTime / 1000 / 60)
    return (
      <div className="Timer">
        Timer: {displayCount(minutes)}:{displayCount(seconds)}
      </div>
    )
  }
}
