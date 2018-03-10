import React from 'react'
import { shallow } from 'enzyme'
import { ControlBar } from 'components/ControlBar'
import { PEN_MARKER, PENCIL_MARKER } from 'redux/selectors/controlBar'

describe('ControlBar', () => {
  it('renders SwitchButton with PenMarker when props.currentMarker is PEN_MARKER', () => {
    const wrapper = shallow(<ControlBar currentMarker={PEN_MARKER} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders SwitchButton with PencilMarker when props.currentMarker is PENCIL_MARKER', () => {
    const wrapper = shallow(<ControlBar currentMarker={PENCIL_MARKER} />)
    expect(wrapper).toMatchSnapshot()
  })
})
