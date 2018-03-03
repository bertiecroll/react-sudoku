import { GENERATE_CELLS } from 'redux/actionTypes'
import { generateCellsSucceeded, generateCellsFailed } from 'redux/actions/grid'
import Worker from 'lib/sudoku/sudoku.worker.js';

export const generateCellsMiddleware = store => next => action => {
  if (action.type === GENERATE_CELLS) {
    const sudokuWorker = new Worker()

    sudokuWorker.onmessage = ({ data }) => {
      store.dispatch(generateCellsSucceeded(data.cells))
      sudokuWorker.terminate()
    }

    sudokuWorker.onerror = () => {
      store.dispatch(generateCellsFailed('Oh no! Something went wrong, please try again...'))
      sudokuWorker.terminate()
    }

    sudokuWorker.postMessage({ difficultyLevel: action.difficultyLevel })
  }
  next(action);
}
