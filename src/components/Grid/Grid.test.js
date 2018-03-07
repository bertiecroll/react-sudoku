import React from 'react'
import { shallow } from 'enzyme'
import { Grid } from 'components/Grid'

describe('Grid', () => {
  it('renders a GridRow for each props.cellsByRow, passing key and cells to each GridRow', () => {
    const cellsByRow = {
      0: [{ id: '0,0', value: 1 }, { id: '1,0', value: 2 }, { id: '2,0', value: 3 }],
      1: [{ id: '0,1', value: 4 }, { id: '1,1', value: 5 }, { id: '2,1', value: 6 }],
      2: [{ id: '0,2', value: 7 }, { id: '1,2', value: 8 }, { id: '2,2', value: 9 }],
    }
    const wrapper = shallow(<Grid cellsByRow={cellsByRow} />)
    expect(wrapper).toMatchSnapshot()
  })
})
