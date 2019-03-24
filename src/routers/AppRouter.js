import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Contact from '../components/Contact'
import NoMatch from '../components/NoMatch'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter
