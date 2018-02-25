import * as utils from './utils'

describe('utils', () => {
  describe('#updateArrayItem', () => {
    it('returns new array updating item at given index', () => {
      const sampleArray = [1,2,3,4,5,]
      const expected = [1,2,3,4,10,]
      const callBackFunction = item => item * 2

      const result = utils.updateArrayItem(callBackFunction, 4, sampleArray)
      expect(result).toEqual(expected)
    })

    it('returns original array if index not found', () => {
      const sampleArray = [1,2,3,4,5,]
      const callBackFunction = item => item * 2

      const result = utils.updateArrayItem(callBackFunction, 10, sampleArray)
      expect(result).toEqual(sampleArray)
    })
  })

  describe('#genMap', () => {
    it('returns new array with length of given end point', () => {
      const rangeEnd = 5
      const result = utils.genMap(rangeEnd)(x => x)
      expect(result).toHaveLength(5)
    })

    it('transforms each item in array with given transformer function', () => {
      const rangeEnd = 5
      const transformerFunction = item => item * 2
      const expected = [0,2,4,6,8,]

      const result = utils.genMap(rangeEnd)(transformerFunction)
      expect(result).toEqual(expected)
    })
  })
})
