import { displayCount } from './formatters'

describe('formatters', () => {
  describe('#displayCount', () => {
    it('returns value as string prefixed with 0 if value less than 10', () => {
      expect(displayCount(9)).toEqual('09')
    })

    it('returns value as string if value grater than or equal to 10', () => {
      expect(displayCount(20)).toEqual('20')
    })
  })
})
