import React from 'react'
import { Route, IndexRoute } from 'react-router'
import DefaultLayout from 'layouts/Default'
import NameView from 'views/NameView'
import CounterView from 'views/CounterView'

export default (
  <Route path="/" component={DefaultLayout}>
    <IndexRoute component={NameView} />
    <Route path="/counter" component={CounterView} />
  </Route>
)
