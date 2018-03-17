import React from 'react'
import { shallow } from 'enzyme'
import { Puzzle } from 'components/Puzzle'

const routerMatch = { params: { difficultyLevel: 'test ' } }
const mockGenerateCells = jest.fn()

describe('Puzzle', () => {
  it('renders Spinner component when props.puzzleStatus is LOADING', () => {
    const wrapper = shallow(
      <Puzzle puzzleStatus='LOADING' match={routerMatch} generateCells={mockGenerateCells} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('renders ProgressBar, Grid and Control Bar when props.puzzleStatus is IN_PROGRESS', () => {
    const wrapper = shallow(
        <Puzzle puzzleStatus='IN_PROGRESS' match={routerMatch} generateCells={mockGenerateCells} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders Result when props.puzzleStatus is COMPLETED', () => {
    const wrapper = shallow(
      <Puzzle puzzleStatus='COMPLETED' match={routerMatch} generateCells={mockGenerateCells} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
