import { COUNTER_INCREASE } from 'actions/counter'

const count = (state = 0, action) => {
  switch (action.type) {
    case COUNTER_INCREASE:
      return state + action.payload
    default:
      return state
  }
}

export default count
