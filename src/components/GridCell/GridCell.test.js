import React from 'react'
import { shallow } from 'enzyme'
import { GridCell } from 'components/GridCell'

describe('GridCell', () => {
  let wrapper

  const mockUpdateSelectedCellId = jest.fn()

  beforeEach(() => {
    const cell = { id: '0,0', value: 1, pencilMarks: [1, 2, 3] }
    const selectedCell = { id: '1,1', value: 2, pencilMarks: [] }

    wrapper = shallow(
      <GridCell
        cell={cell}
        selectedCell={selectedCell}
        updateSelectedCellId={mockUpdateSelectedCellId}
        render={props => <div>Test render component {props.selectedCell.id}</div>}
      />
    )
  })

  afterEach( () => mockUpdateSelectedCellId.mockClear() )

  it('renders div and function passed using props.render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
