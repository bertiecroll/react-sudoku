import React from 'react'
import './Spinner.css'
import logo from 'images/logo.svg';

export const Spinner = () => (
  <div className="Spinner">
    <img src={logo} className="Spinner-logo" alt="logo" />
    <h4>Loading Puzzle...</h4>
  </div>
)

export default Spinner
