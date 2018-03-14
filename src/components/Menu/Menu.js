import React from 'react'
import { Link } from 'react-router-dom'

import './Menu.css';

export default function Menu (props) {
  return (
    <div className="Menu">
      <h2>Welcome</h2>
      <p>Choose your difficulty level to begin.</p>
      <Link to="/puzzle/easy">Just Getting Started</Link>
      <Link to="/puzzle/medium">Middle Of The Road</Link>
      <Link to="/puzzle/hard">Ready For A Challenge</Link>
    </div>
  )
}
