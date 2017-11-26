import * as selectors from './controlBar'

const state = {
  controlBar: {
    currentMarker: selectors.PEN_MARKER
  }
}

describe('controlBar selectors', () => {
  describe('#moduleState', () => {
    it('returns state of grid', () => {
      expect(selectors.moduleState(state)).toEqual(state.controlBar)
    })
  })

  describe('#currentMarker', () => {
    it('returns cellsById', () => {
      expect(selectors.currentMarker(state)).toEqual(selectors.PEN_MARKER)
    })
  })
})
