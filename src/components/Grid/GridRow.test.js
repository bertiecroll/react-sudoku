import React from 'react'
import { shallow } from 'enzyme'
import { GridRow } from 'components/Grid'

describe('GridRow', () => {
  it('renders CompleteGridCell or EmptyGridCell for each props.cells based on completed attribute', () => {
    const cells = [
      { id: '0,0', value: 1 },
      { id: '1,0', value: 2 },
      { id: '2,0', value: 3, completed: true },
    ]

    const wrapper = shallow(<GridRow cells={cells} />)
    expect(wrapper).toMatchSnapshot()
  })
})
