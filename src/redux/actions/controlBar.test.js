import { SET_CURRENT_MARKER } from 'redux/actionTypes'
import * as actions from './controlBar'

describe('controlBar actions', () => {
  describe('#setCurrentMarker', () => {
    it('creates an action to set current marker', () => {
      const marker = 'PEN_MARKER'
      const expectedAction = {
        type: SET_CURRENT_MARKER,
        marker,
      }
      expect(actions.setCurrentMarker(marker)).toEqual(expectedAction)
    })
  })
})
