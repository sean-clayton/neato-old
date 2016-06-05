import React from 'react'
import ReactDOM from 'react-dom'
import { install } from 'offline-plugin/runtime'
import configureStore from './configureStore'
import Root from 'containers/Root'
import 'styles/styles.global.css'

install()

const store = configureStore()

ReactDOM.render(<Root store={store} />, document.getElementById('app'))
