import React from 'react'
import { shallow } from 'enzyme'
import NumberButton from 'components/NumberButton'

describe('NumberButton', () => {
  it('renders div with when props.isAvailable is true', () => {
    const wrapper = shallow(<NumberButton number={1} isAvailable />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders div with not-available className when props.isAvailable is false', () => {
    const wrapper = shallow(<NumberButton number={1} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('calls onClickHandler when clicked', () => {
    const onClickMock = jest.fn()
    const wrapper = shallow(<NumberButton number={1} onClickHandler={onClickMock} />)
    wrapper.simulate('click')
    expect(onClickMock).toHaveBeenCalled()
  })
})
