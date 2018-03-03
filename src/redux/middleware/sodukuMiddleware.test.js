import { GENERATE_CELLS } from 'redux/actionTypes'
import { generateCellsSucceeded } from 'redux/actions/grid'
import { generateCellsMiddleware } from './sodukuMiddleware'

jest.mock('lib/sudoku/sudoku.worker.js');

describe('generateCellsMiddleware', () => {
  it('passes through actions not equal to generate cells', () => {
    const { next, invoke } = create()
    const action = { type: 'TEST' }

    invoke(action)

    expect(next).toHaveBeenCalledWith(action)
  })

  it('dispatches generateCellsSuceeded when action is generate cells', () => {
    const { store, invoke } = create()
    const action = { type: GENERATE_CELLS, difficultylevel: 'TEST' }

    invoke(action)

    expect(store.dispatch).toHaveBeenCalledWith(generateCellsSucceeded([]))
  });
})

// Redux stubs
const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn()

  const invoke = (action) => generateCellsMiddleware(store)(next)(action)

  return {store, next, invoke}
};
