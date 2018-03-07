import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Puzzle.css'

import { Grid } from 'components/Grid'
import { cellsByRow } from 'redux/selectors/cells'
import ControlBar from 'components/ControlBar'
import ProgressBar from 'components/ProgressBar'
import Spinner from 'components/Spinner'

import { generateCells } from 'redux/actions/grid'
import { isFetching } from 'redux/selectors/cells'

export class Puzzle extends Component {

  componentDidMount () {
    if (this.props.generateCells) this.props.generateCells('MEDIUM')
  }

  render() {
    return this.props.isLoading
    ? (
      <div className="Puzzle">
        <Spinner />
      </div>
    )
    : (
      <div className="Puzzle">
        <ProgressBar />
        <Grid cellsByRow={this.props.cellsByRow} />
        <ControlBar />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cellsByRow: cellsByRow(state),
  isLoading: isFetching(state),
})

const mapDispatchToProps = { generateCells }

export default connect(mapStateToProps, mapDispatchToProps)(Puzzle)

Puzzle.defaultProps = {
  cellsByRow: {}
}

Puzzle.propTypes = {
  cellsByRow: PropTypes.object.isRequired,
}