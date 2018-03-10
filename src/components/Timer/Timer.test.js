import React from 'react'
import { shallow } from 'enzyme'
import Timer from 'components/Timer'

describe('Timer', () => {

  it('renders div with timer count', () => {
    const wrapper = shallow(<Timer />)
    expect(wrapper).toMatchSnapshot()
  })
})
