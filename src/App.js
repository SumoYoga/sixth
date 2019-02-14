import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Index from './components/Home'
import CV from './components/CV'
import NoMatch from './components/NoMatch'
import './styles/app.scss'

const App = () => {
  return (
    <Switch>
      <Route path="/cv" component={CV} />
      <Route path="/" exact component={Index} />
      <Route component={NoMatch} />
    </Switch>
  )
}

export default App
