import React from 'react'
import { render } from 'react-dom'
import { install } from 'offline-plugin/runtime'
import configureStore from './configureStore'
import Root from 'containers/Root'
import 'styles/styles.global.css'

// Create service worker for offline support!
install()

if (__DEV__) {
  const whyDidYouUpdate = require('why-did-you-update').whyDidYouUpdate
  whyDidYouUpdate(React, {
    exclude: /^Connect/
  })
}

const store = configureStore()

render(<Root store={store} />, document.getElementById('<%= projectName %>'))
