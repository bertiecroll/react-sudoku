import React from 'react'
import { shallow } from 'enzyme'
import ProgressBar from 'components/ProgressBar'

describe('ProgressBar', () => {
  it('renders FaultCounter and Timer components', () => {
    const wrapper = shallow(<ProgressBar />)
    expect(wrapper).toMatchSnapshot()
  })
})
