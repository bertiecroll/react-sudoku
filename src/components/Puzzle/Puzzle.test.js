import React from 'react'
import { shallow } from 'enzyme'
import { Puzzle } from 'components/Puzzle'

describe('Puzzle', () => {
  it('renders Spinner component when props.isLoading is true', () => {
    const wrapper = shallow(<Puzzle isLoading />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders ProgressBar, Grid and Control Bar when props.isLoading is false', () => {
    const wrapper = shallow(<Puzzle />)
    expect(wrapper).toMatchSnapshot()
  })
})
