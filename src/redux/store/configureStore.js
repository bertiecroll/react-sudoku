import { createStore, applyMiddleware, compose } from 'redux'
import { generateCellsMiddleware } from 'redux/middleware/sodukuMiddleware'
import rootReducer from 'redux/reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(generateCellsMiddleware))
)
