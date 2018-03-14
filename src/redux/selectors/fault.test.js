import * as selectors from './fault'

const state = {
  fault: {
    faultCount: 0,
    faultCellId: '1,1'
  }
}

describe('fault selectors', () => {
  describe('#moduleState', () => {
    it('returns state of fault', () => {
      expect(selectors.moduleState(state)).toEqual(state.fault)
    })
  })

  describe('#faultCount', () => {
    it('returns current count of faults', () => {
      expect(selectors.faultCount(state)).toEqual(0)
    })
  })

  describe('#faultCellId', () => {
    it('returns current faultCellId', () => {
      expect(selectors.faultCellId(state)).toEqual('1,1')
    })
  })
})
