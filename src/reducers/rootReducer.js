import { combineReducers } from 'redux'
import name from './name'
import count from './count'

const rootReducer = combineReducers({
  name,
  count
})

export default rootReducer
