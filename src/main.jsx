import React from 'react'
import ReactDOM from 'react-dom'
import 'styles/styles.global.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
