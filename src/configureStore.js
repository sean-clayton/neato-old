import { createStore } from 'redux'
import rootReducer from 'reducers/rootReducer'
import { throttle } from 'lodash'
import { getLocalStorage, setLocalStorage } from 'utils/localStorage'

const configureStore = () => {
  const persistedState = getLocalStorage()
  const store = createStore(
    rootReducer,
    persistedState,
    window.devToolsExtension && window.devToolsExtension()
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
