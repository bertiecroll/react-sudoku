import React from 'react'
import { shallow } from 'enzyme'
import { SwitchButton } from 'components/SwitchButton'
import { PEN_MARKER, PENCIL_MARKER } from 'redux/selectors/controlBar'

describe('SwitchButton', () => {
  const mockSetCurrentMarker = jest.fn()

  afterEach(() => {
    mockSetCurrentMarker.mockClear()
  })

  it('renders two button components and correct styles when props.currentMarker equals PEN_MARKER', () => {
    const wrapper = shallow(<SwitchButton setCurrentMarker={mockSetCurrentMarker} currentMarker={PEN_MARKER} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders two button components and correct styles when props.currentMarker equals PENCIL_MARKER', () => {
    const wrapper = shallow(<SwitchButton setCurrentMarker={mockSetCurrentMarker} currentMarker={PENCIL_MARKER} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('calls setCurrentMarker with PEN_MARKER when first button clicked', () => {
    const wrapper = shallow(<SwitchButton setCurrentMarker={mockSetCurrentMarker} currentMarker={PEN_MARKER} />)

    wrapper.find('button').first().simulate('click')

    expect(mockSetCurrentMarker).toHaveBeenCalledWith(PEN_MARKER)
  })

  it('calls setCurrentMarker with PENCIL_MARKER when second button clicked', () => {
    const wrapper = shallow(<SwitchButton setCurrentMarker={mockSetCurrentMarker} currentMarker={PENCIL_MARKER} />)

    wrapper.find('button').last().simulate('click')

    expect(mockSetCurrentMarker).toHaveBeenCalledWith(PENCIL_MARKER)
  })
})
