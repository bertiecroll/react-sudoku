import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from 'images/logo.svg';
import './App.css';

import Puzzle from 'components/Puzzle'

export class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">React Sudoku</h2>
        </header>
        <Puzzle />
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(App)
