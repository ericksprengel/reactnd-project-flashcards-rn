import thunk from 'redux-thunk'
import { applyMiddleware, compose } from 'redux'
import logger from './logger'
import { composeWithDevTools } from 'remote-redux-devtools'

const composeEnhancers = __DEV__ ? composeWithDevTools : compose
const middleware = applyMiddleware(
  thunk,
  logger,
)

export default composeEnhancers(middleware)
