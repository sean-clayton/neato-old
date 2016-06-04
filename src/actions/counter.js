// Constants
export const COUNTER_INCREASE = 'COUNTER_INCREASE'

// Actions
export const increase = (increment = 1) => ({
  type: COUNTER_INCREASE,
  payload: increment
})
