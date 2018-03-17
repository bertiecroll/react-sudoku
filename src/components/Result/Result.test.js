import React from 'react';
import { shallow } from 'enzyme'
import Result from './Result';

describe('Result', () => {
  it('renders component content', () => {
    const wrapper = shallow(<Result />)
    expect(wrapper).toMatchSnapshot()
  })
})
