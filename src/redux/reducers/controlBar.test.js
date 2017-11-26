import reducer from './controlBar'
import { SET_CURRENT_MARKER } from 'redux/actionTypes'
import * as actions from 'redux/actions/controlBar'

describe('fault reducer', () => {
  it('returns a state object', () => {
    const result = reducer(undefined, {type: 'ANYTHING'})
    expect(result).toBeDefined()
  })

  describe(`${SET_CURRENT_MARKER}`, () => {
    it('increments fault count by one', () => {
      const marker = 'PENCIL_MARKER'
      const expectedState = {
        currentMarker: marker
      }
      const result = reducer(undefined, actions.setCurrentMarker(marker))
      expect(result).toEqual(expectedState)
    })
  })
})
