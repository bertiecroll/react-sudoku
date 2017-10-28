import React, { Component } from 'react';
import logo from 'images/logo.svg';
import './App.css';
import { Grid } from 'components/Grid'
import { NumberSelect } from 'components/NumberSelect'

export class App extends Component {
  state = {
    puzzle: [
      [8,0,0,0,9,2,0,7,0],
      [0,0,0,0,0,4,1,0,0],
      [0,1,3,6,7,0,0,0,8],
      [0,0,0,4,0,0,5,0,0],
      [0,0,0,0,0,0,6,0,2],
      [9,2,4,5,0,0,7,0,0],
      [3,0,0,0,6,1,0,5,4],
      [0,0,0,0,0,3,8,0,0],
      [2,7,0,9,0,0,0,0,0],
    ],
    solution: [
      [8,5,6,1,9,2,4,7,3],
      [7,9,2,3,8,4,1,6,5],
      [4,1,3,6,7,5,9,2,8],
      [1,6,8,4,2,7,5,3,9],
      [5,3,7,8,1,9,6,4,2],
      [9,2,4,5,3,6,7,8,1],
      [3,8,9,7,6,1,2,5,4],
      [6,4,1,2,5,3,8,9,7],
      [2,7,5,9,4,8,3,1,6],
    ],
    availableNumbers: [1,2,3,4,5,6,7,8,9,],
    selectedCell: {
      row: 1,
      column: 4,
    },
    selectedNumber: null,
  }

  handleNumberClick = (number) => {
    this.setState({selectedNumber: number})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">React Sudoku</h2>
        </header>
        <div className="App-content">
          <Grid puzzle={this.state.puzzle} selectedCell={this.state.selectedCell} />
          <NumberSelect availableNumbers={this.state.availableNumbers} handleClick={this.handleNumberClick} />
        </div>
      </div>
    )
  }
}
