import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from 'images/logo.svg';
import './App.css';
import { Grid } from 'components/Grid'
import NumberSelect from 'components/NumberSelect'

export class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">React Sudoku</h2>
        </header>
        <div className="App-content">
          <Grid puzzle={this.props.grid.puzzle} selectedCell={this.props.grid.selectedCell} />
          <NumberSelect />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(App)
