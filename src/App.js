import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import NoMatch from './components/NoMatch'

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact} />
      <Route component={NoMatch} />
    </Switch>
  )
}

export default App
