import { SET_CURRENT_MARKER } from 'redux/actionTypes'

export const setCurrentMarker = (state, action) => (
  { ...state, currentMarker: action.marker }
)

const initialState = {
  currentMarker: 'PEN_MARKER'
}

export default function controlBar(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_MARKER: return setCurrentMarker(state, action)
    default: return state
  }
}
