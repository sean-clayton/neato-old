import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './configureStore'
import Root from 'containers/Root'
import 'styles/styles.global.css'

const store = configureStore()

class App extends React.Component {
  render() {
    return (
      <Root store={store} />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
