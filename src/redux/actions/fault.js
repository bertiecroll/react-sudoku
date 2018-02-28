import { INCREMENT_FAULT_COUNTER, UPDATE_FAULT_CELL_ID } from 'redux/actionTypes'

export const incrementFaultCounter = () => ({ type: INCREMENT_FAULT_COUNTER })
export const updateFaultCellId = id => ({ type: UPDATE_FAULT_CELL_ID, id })
