import React from 'react'
import { Link } from 'react-router-dom'

import './NotFound.css';

export default function NotFound (props) {
  return (
    <div className="NotFound">
      <h2>Oops, this ain't no page I ever heard of!</h2>
      <Link to="/">Return Home</Link>
    </div>
  )
}
