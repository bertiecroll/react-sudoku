import { INCREMENT_FAULT_COUNTER, UPDATE_FAULT_CELL_ID } from 'redux/actionTypes'

export const incrementFaultCounter = state => (
  { ...state, faultCount: state.faultCount + 1, }
)
export const updateFaultCellId = (state, action) => (
  { ...state, faultCellId: action.id }
)

const intialState = {
  faultCount: 0,
  faultCellId: null,
}

export default function fault(state = intialState, action) {
  switch (action.type) {
    case INCREMENT_FAULT_COUNTER: return incrementFaultCounter(state)
    case UPDATE_FAULT_CELL_ID: return updateFaultCellId(state, action)
    default: return state
  }
}
