import React from 'react';
import { shallow } from 'enzyme'
import Menu from './Menu';

describe('Menu', () => {
  it('renders component content', () => {
    const wrapper = shallow(<Menu />)
    expect(wrapper).toMatchSnapshot()
  })
})
