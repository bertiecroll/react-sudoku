import React from 'react';
import { shallow } from 'enzyme'
import { AppFooter } from './AppFooter';

describe('AppFooter', () => {
  it('renders component content', () => {
    const wrapper = shallow(<AppFooter />)
    expect(wrapper).toMatchSnapshot()
  })
})
