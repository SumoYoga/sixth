import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('./routes/Home'))
const CV = lazy(() => import('./routes/CV'))
const NoMatch = lazy(() => import('./routes/NoMatch'))

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
