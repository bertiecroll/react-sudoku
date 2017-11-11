import { INCREMENT_FAULT_COUNTER, SET_FAULT_CELL } from 'redux/actionTypes'

export const incrementFaultCounter = (state, action) => (
  { ...state, faultCount: state.faultCount + 1, }
)
export const setFaultCell = (state, action) => (
  { ...state, faultCell: { row: action.row, column: action.column } }
)

const intialState = {
  faultCount: 0,
  faultCell: { row: null, column: null },
}

export default function fault(state = intialState, action) {
  switch (action.type) {
    case INCREMENT_FAULT_COUNTER: return incrementFaultCounter(state, action)
    case SET_FAULT_CELL: return setFaultCell(state, action)
    default: return state
  }
}
