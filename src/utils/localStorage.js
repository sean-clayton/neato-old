export const getLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  }
  catch (err) {
    console.error(err)
  }
}

export const setLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  }
  catch (err) {
    console.error(err)
  }
}
