import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Puzzle.css'

import { Grid } from 'components/Grid'
import { cellsByRow } from 'redux/selectors/cells'
import ControlBar from 'components/ControlBar'
import ProgressBar from 'components/ProgressBar'
import Spinner from 'components/Spinner'
import Result from 'components/Result'

import { generateCells } from 'redux/actions/cells'
import { currentStatus, LOADING, IN_PROGRESS, COMPLETED } from 'redux/selectors/cells'

export class Puzzle extends Component {

  componentDidMount () {
    const difficultyLevel = this.props.match.params.difficultyLevel
    difficultyLevel && this.props.generateCells(difficultyLevel.toUpperCase())
  }

  render() {
    const { cellsByRow, puzzleStatus } = this.props

    return (
      <div className="Puzzle">
        { _puzzleContentToRender(cellsByRow)[puzzleStatus] }
      </div>
    )
  }
}

const _puzzleContentToRender = cellsByRow => {
  return {
    LOADING: <Spinner />,
    IN_PROGRESS: (
      <Fragment>
        <ProgressBar />
        <Grid cellsByRow={cellsByRow} />
        <ControlBar />
      </Fragment>
    ),
    COMPLETED: <Result />
  }
}

const mapStateToProps = state => ({
  cellsByRow: cellsByRow(state),
  puzzleStatus: currentStatus(state),
})

const mapDispatchToProps = { generateCells }

export default connect(mapStateToProps, mapDispatchToProps)(Puzzle)

Puzzle.defaultProps = {
  cellsByRow: {},
  puzzleStatus: LOADING,
}

Puzzle.propTypes = {
  cellsByRow: PropTypes.object.isRequired,
  puzzleStatus: PropTypes.oneOf([LOADING, IN_PROGRESS, COMPLETED]),
}
