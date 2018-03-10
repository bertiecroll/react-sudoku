import React from 'react'
import { shallow } from 'enzyme'
import { EmptyGridCell } from 'components/GridCell'

describe('EmptyGridCell', () => {
  it('renders GridCell passing render prop function', () => {
    const cell = { id: '0,0', value: 1, pencilMarks: [1, 2, 3] }
    const wrapper = shallow(<EmptyGridCell cell={cell} />)

    expect(wrapper).toMatchSnapshot()
  })
})
