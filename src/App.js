import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Index from './components/Home'
import NoMatch from './components/NoMatch'

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route component={NoMatch} />
    </Switch>
  )
}

export default App
