import React from 'react'
import { shallow } from 'enzyme'
import { PenMarker } from 'components/PenMarker'
import NumberSelect from 'components/NumberSelect'

describe('PenMarker', () => {
  let wrapper
  const mockMarkCellCompleted = jest.fn()
  const mockIncrementFaultCounter = jest.fn()
  const mockUpdateFaultCellId = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <PenMarker
        markCellCompleted={mockMarkCellCompleted}
        incrementFaultCounter={mockIncrementFaultCounter}
        updateFaultCellId={mockUpdateFaultCellId}
      />
    )
  })

  afterEach(() => {
    mockMarkCellCompleted.mockClear()
    mockIncrementFaultCounter.mockClear()
    mockUpdateFaultCellId.mockClear()
  })

  it('renders NumberSelect component passing onClickAction', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('#onClickAction', () => {
    const selectedCell = { id: '0,0', value: 1 }

    it('calls #markCellCompleted when selectedCell value is equal to selectedNuber', () => {
      const selectedNumber = 1

      wrapper.find(NumberSelect).props().onClickAction(selectedCell, selectedNumber)

      expect(mockMarkCellCompleted).toHaveBeenCalledWith(selectedCell.id)
    })

    it('calls #incrementFaultCounter and #updateFaultCellId when selectedCell value is not equal to selectedNuber', () => {
      const selectedNumber = 2

      wrapper.find(NumberSelect).props().onClickAction(selectedCell, selectedNumber)

      expect(mockIncrementFaultCounter).toHaveBeenCalled()
      expect(mockUpdateFaultCellId).toHaveBeenCalledWith(selectedCell.id)
    })
  })
})
