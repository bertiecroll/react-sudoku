export const moduleState = state => state.fault

export const faultCount = state => moduleState(state).faultCount

export const faultCellId = state => moduleState(state).faultCellId
