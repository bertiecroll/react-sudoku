import React from 'react'
import logo from 'images/logo.svg'

export function AppHeader () {
  return (
    <header className="AppHeader">
      <img src={logo} className="App-logo" alt="logo" />
      <h2 className="App-title">React Sudoku</h2>
    </header>
  )
}
