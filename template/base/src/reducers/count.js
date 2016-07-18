import { COUNTER_INCREASE } from 'actions/counter'

const count = (state = 0, action) => {
  // Look at all Redux actions being sent
  switch (action.type) {
    case COUNTER_INCREASE:
      // If action is COUNTER_INCREASE,
      // return whatever state is, and add the amount
      // inside of the payload
      // eg. state + 1, state + 2, etc
      return state + action.payload
    default:
      // If action isn't handled by this reducer,
      // just return back the state
      return state
  }
}

export default count
