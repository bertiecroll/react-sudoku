import React from 'react'
import { Link } from 'react-router-dom'
import './Result.css'

export default function Result (props) {
  return (
    <div className="Result">
      <h2>Well Done!</h2>
      <p>Puzzle completed</p>
      <Link to="/">Play Again</Link>
    </div>
  )
}
