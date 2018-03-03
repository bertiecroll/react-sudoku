/* eslint no-restricted-globals: 0 */
import { generatePuzzle } from './puzzle'

self.onmessage = ({ data }) => {
  const difficultyLevel = data.difficultyLevel

  const cells = generatePuzzle(difficultyLevel)
  postMessage({ cells })
}
