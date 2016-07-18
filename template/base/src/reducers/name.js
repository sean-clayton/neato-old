import { UPDATE_NAME } from 'actions/name'

const name = (state = 'Joe Bob', action) => {
  // Look at all actions going through Redux
  switch (action.type) {
    case UPDATE_NAME:
      // If action is "UPDATE_NAME",
      // return whatever name is set
      return action.payload
    default:
      // If action isn't handled by this reducer,
      // just return the state back
      return state
  }
}

export default name
