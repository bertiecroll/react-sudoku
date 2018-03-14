import { PUZZLE_TOGGLE_COMPLETED } from 'redux/actionTypes'
import * as actions from './puzzle'

describe('puzzle actions', () => {
  describe('#toggleCompleted', () => {
    it('creates an action to toggle completed', () => {
      const expectedAction = { type: PUZZLE_TOGGLE_COMPLETED }
      expect(actions.toggleCompleted()).toEqual(expectedAction)
    })
  })
})
