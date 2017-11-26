export const PEN_MARKER = 'PEN_MARKER'
export const PENCIL_MARKER = 'PENCIL_MARKER'

export const moduleState = state => state.controlBar

export const currentMarker = state => moduleState(state).currentMarker
