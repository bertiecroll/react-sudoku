import React from 'react'
import { shallow } from 'enzyme'
import { FaultCounter } from 'components/FaultCounter'

describe('FaultCounter', () => {
  it('renders a div containing text "none" when props.faultCount equals 0', () => {
    const wrapper = shallow(<FaultCounter faultCount={0} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a div containing faultCount when props.faultCount is greater than 0', () => {
    const wrapper = shallow(<FaultCounter faultCount={2} />)
    expect(wrapper).toMatchSnapshot()
  })
})
