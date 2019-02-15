import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './routes/Home'
import NoMatch from './routes/NoMatch'

const CV = lazy(() => import('./routes/CV'))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div />}>
        <Switch>
          <Route path="/cv" component={CV} />
          <Route path="/" exact component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
