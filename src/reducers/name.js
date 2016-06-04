const name = (state = 'Joe Bob', action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return action.payload
    default:
      return state
  }
}

export default name
