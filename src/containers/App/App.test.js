import React from 'react';
import { shallow } from 'enzyme'
import { App } from './App';

describe('App', () => {
  it('renders header and Puzzle component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})
