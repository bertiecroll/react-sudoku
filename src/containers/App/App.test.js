import React from 'react';
import { shallow } from 'enzyme'
import { App } from './App';

describe('App', () => {
  it('renders header, footer and switch components', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})
