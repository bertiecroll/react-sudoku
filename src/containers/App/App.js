import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import logo from 'images/logo.svg';
import './App.css';

import { Grid } from 'components/Grid'
import { cellsByRow } from 'redux/selectors/cells'
import ControlBar from 'components/ControlBar'

export class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">React Sudoku</h2>
        </header>
        <div className="App-content">
          <Grid cellsByRow={this.props.cellsByRow} />
          <ControlBar />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cellsByRow: cellsByRow(state),
})

export default connect(mapStateToProps)(App)

App.propTypes = {
  cellsByRow: PropTypes.object.isRequired,
}
