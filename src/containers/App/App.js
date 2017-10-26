import React, { Component } from 'react';
import logo from 'images/logo.svg';
import './App.css';
import { Grid } from 'components/Grid'

export class App extends Component {
  state = {
    numbers: [
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4 className="App-title">React Sudoku</h4>
        </header>
        <div className="App-content">
          <Grid numbers={this.state.numbers} />
        </div>
      </div>
    );
  }
}
