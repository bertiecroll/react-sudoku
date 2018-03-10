import React from 'react'
import { shallow } from 'enzyme'
import { NumberSelect } from 'components/NumberSelect'
import NumberButton from 'components/NumberButton'

describe('PencilMarker', () => {
  const mockOnClickAction = jest.fn()

  afterEach(() => {
    mockOnClickAction.mockClear()
  })

  it('renders NumberButton component for each number in allNumbers array', () => {
    const wrapper = shallow(
      <NumberSelect
        allNumbers={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        availableNumbers={[1, 3, 5, 7, 9]}
        onClickAction={mockOnClickAction}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  describe('#onClickHandler', () => {
    it('calls #onClickAction when selectedCell given and completed is false', () => {
      const selectedCell = { id: '0,0', value: 1 }
      const selectedNumber = 1
      const wrapper = shallow(
        <NumberSelect
          selectedCell={selectedCell}
          allNumbers={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          availableNumbers={[1, 3, 5, 7, 9]}
          onClickAction={mockOnClickAction}
        />
      )

      wrapper.find(NumberButton).first().props().onClickHandler(selectedNumber)

      expect(mockOnClickAction).toHaveBeenCalledWith(selectedCell, selectedNumber)
    })

    it('does not call #onClickAction when selectedCell is undefined', () => {
      const selectedNumber = 1
      const wrapper = shallow(
        <NumberSelect
          allNumbers={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          availableNumbers={[1, 3, 5, 7, 9]}
          onClickAction={mockOnClickAction}
        />
      )

      wrapper.find(NumberButton).first().props().onClickHandler(selectedNumber)

      expect(mockOnClickAction).not.toHaveBeenCalled()
    })

    it('does not call #onClickAction when selectedCell is completed', () => {
      const selectedCell = { id: '0,0', value: 1, completed: true }
      const selectedNumber = 1
      const wrapper = shallow(
        <NumberSelect
          selectedCell={selectedCell}
          allNumbers={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          availableNumbers={[1, 3, 5, 7, 9]}
          onClickAction={mockOnClickAction}
        />
      )

      wrapper.find(NumberButton).first().props().onClickHandler(selectedNumber)

      expect(mockOnClickAction).not.toHaveBeenCalled()
    })
  })
})
