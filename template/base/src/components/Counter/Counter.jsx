import React, { PropTypes } from 'react'

const Counter = ({ count, increase }) =>
  <button onClick={() => increase() }>
    Count: {count}
  </button>

Counter.propTypes = {
  count: PropTypes.number.isRequired
  increase: PropTypes.func.isRequired
}

export default Counter
