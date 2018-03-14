import React from 'react'
import { shallow } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { Puzzle } from 'components/Puzzle'

const initialEntries = [{ pathname: '/', key: 'TestKey' }]

describe('Puzzle', () => {
  it('renders Spinner component when props.isLoading is true', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={initialEntries} >
        <Puzzle isLoading />
      </MemoryRouter>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('renders ProgressBar, Grid and Control Bar when props.isLoading is false', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={initialEntries} >
        <Puzzle />
      </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
