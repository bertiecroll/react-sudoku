import reducer from './puzzle'
import { PUZZLE_TOGGLE_COMPLETED, GENERATE_CELLS } from 'redux/actionTypes'
import * as actions from 'redux/actions/puzzle'
import { generateCells } from 'redux/actions/grid'

const initialState = {
  completed: false,
  difficultyLevel: null,
}

describe('puzzle reducer', () => {
  it('returns a state object', () => {
    const result = reducer(initialState, {type: 'ANYTHING'})
    expect(result).toBeDefined()
  })

  describe(`${PUZZLE_TOGGLE_COMPLETED}`, () => {
    it('toggles completed to true if completed is false', () => {
      const result = reducer(initialState, actions.toggleCompleted())

      expect(result.completed).toEqual(true)
    })

    it('updates completed to false if completed is true', () => {
      const result = reducer({ completed: true }, actions.toggleCompleted())

      expect(result.completed).toEqual(false)
    })
  })

  describe(`${GENERATE_CELLS}`, () => {
    it('sets difficulty level to given difficultyLevel', () => {
      const expectedLevel = 'TEST'
      const result = reducer(initialState, generateCells('TEST'))

      expect(result.difficultyLevel).toEqual(expectedLevel)
    })
  })
})
