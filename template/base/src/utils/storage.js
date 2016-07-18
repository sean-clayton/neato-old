export const getLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state')
    // Try to get localStorage.state
    return serializedState === null
      // If it doesn't exist, tell the user it's undefined
      ? undefined
      // If it does exist, give the user the stored state
      // As a native object instead of a string
      : JSON.parse(serializedState)
  }
  catch (err) {
    console.error(err)
  }
}

export const setLocalStorage = state => {
  try {
    // Turn state object to a string
    // because localStorage can only store strings
    const serializedState = JSON.stringify(state)
    // Set the stringified state object to the key "state"
    localStorage.setItem('state', serializedState)
  }
  catch (err) {
    console.error(err)
  }
}

export const getSessionStorage = () => {
  try {
    const serializedState = sessionStorage.getItem('state')
    // Try to get sessionStorage.state
    return serializedState === null
      // If it doesn't exist, tell the user it's undefined
      ? undefined
      // If it does exist, give the user the stored state
      // as a native object instead of a string
      : JSON.parse(serializedState)
  }
  catch (err) {
    console.error(err)
  }
}

export const setSessionStorage = state => {
  try {
    // Turn state object to a string
    // because sessionStorage, like localStorage, can
    // only store strings
    const serializedState = JSON.stringify(state)
    sessionStorage.setItem('state', serializedState)
  }
  catch (err) {
    console.error(err)
  }
}
