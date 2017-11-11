import { INCREMENT_FAULT_COUNTER, SET_FAULT_CELL } from 'redux/actionTypes'

export const incrementFaultCounter = () => ({ type: INCREMENT_FAULT_COUNTER })
export const setFaultCell = (row, column) => ({ type: SET_FAULT_CELL, row, column })
