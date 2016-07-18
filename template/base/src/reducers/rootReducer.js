import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import name from './name'
import count from './count'

const rootReducer = combineReducers({
  name,
  count,
  routing: routerReducer
})

export default rootReducer
