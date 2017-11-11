import * as utils from './utils'

describe('utils', () => {
  describe('#updateArrayItem', () => {
    it('returns new array updating item at given index', () => {
      const sampleArray = [1,2,3,4,5,]
      const expected = [1,2,3,4,10,]
      const callBackFunction = item => item * 2

      const result = utils.updateArrayItem(callBackFunction)(sampleArray, 4)
      expect(result).toEqual(expected)
    })

    it('returns original array if index not found', () => {
      const sampleArray = [1,2,3,4,5,]
      const callBackFunction = item => item * 2

      const result = utils.updateArrayItem(callBackFunction)(sampleArray, 10)
      expect(result).toEqual(sampleArray)
    })
  })
})
