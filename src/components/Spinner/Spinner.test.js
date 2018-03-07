import React from 'react'
import { shallow } from 'enzyme'
import Spinner from 'components/Spinner'

describe('Spinner', () => {
  it('renders logo with loading text', () => {
    const wrapper = shallow(<Spinner />)
    expect(wrapper).toMatchSnapshot()
  })
})
