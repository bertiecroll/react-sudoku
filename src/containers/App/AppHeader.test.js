import React from 'react';
import { shallow } from 'enzyme'
import { AppHeader } from './AppHeader';

describe('AppHeader', () => {
  it('renders component content', () => {
    const wrapper = shallow(<AppHeader />)
    expect(wrapper).toMatchSnapshot()
  })
})
