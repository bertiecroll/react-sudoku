import React from 'react'
import { shallow } from 'enzyme'
import { PencilMarker } from 'components/PencilMarker'
import NumberSelect from 'components/NumberSelect'

describe('PencilMarker', () => {
  let wrapper
  // our mock redux action functions
  const mockAddPencilMark = jest.fn()
  const mockRemovePencilMark = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <PencilMarker
        addPencilMark={mockAddPencilMark}
        removePencilMark={mockRemovePencilMark}
      />
    )
  })

  afterEach(() => {
    mockAddPencilMark.mockClear()
    mockRemovePencilMark.mockClear()
  })

  it('renders NumberSelect component passing onClickAction', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('#onClickAction', () => {
    const selectedCell = { id: '0,0', pencilMarks: [1, 2, 3] }

    it('calls #addPencilMark when selectedCell pencilMarks does not include selectedNuber', () => {
      const selectedNumber = 4

      wrapper.find(NumberSelect).props().onClickAction(selectedCell, selectedNumber)

      expect(mockAddPencilMark).toHaveBeenCalledWith(selectedCell.id, selectedNumber)
    })

    it('calls #removePencilMark when selectedCell pencilMarks includes selectedNuber', () => {
      const selectedNumber = 1

      wrapper.find(NumberSelect).props().onClickAction(selectedCell, selectedNumber)

      expect(mockRemovePencilMark).toHaveBeenCalledWith(selectedCell.id, selectedNumber)
    })
  })
})
