import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from 'reducers/rootReducer'
import { throttle } from 'lodash'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { getLocalStorage, setLocalStorage } from 'utils/localStorage'

const sagaMiddleware = createSagaMiddleware()
let middlewares = [thunk, sagaMiddleware]
if (__DEV__) {
  const createLogger = require('redux-logger')
  const logger = createLogger({
    level: 'debug'
  })
  middlewares.push(logger)
}

const configureStore = () => {
  const persistedState = getLocalStorage()
  const store = createStore(
    rootReducer,
    persistedState,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  store.subscribe(throttle(() => {
    setLocalStorage({
      name: store.getState().name,
      count: store.getState().count
    })
  }, 1000))

  return store
}
export default configureStore
