import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Post from '../components/Post'
import Contact from '../components/Contact'
import NoMatch from '../components/NoMatch'

// eslint-disable-next-line import/no-webpack-loader-syntax
const webpackRequireContext = require.context(
  '!markdown-with-front-matter-loader!../_posts',
  false,
  /.md$/
)
const articles = webpackRequireContext
  .keys()
  .reduce(
    (memo, fileName) =>
      memo.set(
        fileName.match(/.\/([^.]+).*/)[1],
        webpackRequireContext(fileName)
      ),
    new Map()
  )

const reactRoutes = []

reactRoutes.push(
  <Route
    path="/"
    exact
    key="index"
    render={props => <Home articles={articles} {...props} />}
  />
)

reactRoutes.push(
  <Route path="/contact" key="contact" render={() => <Contact />} />
)

reactRoutes.push(
  [...articles.keys()].map(path => {
    return (
      <Route
        path={'/' + path}
        key={path}
        render={props => <Post article={articles.get(path)} {...props} />}
      />
    )
  })
)

reactRoutes.push(<Route key="no-match" render={() => <NoMatch />} />)

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <BrowserRouter>
        <Switch>{reactRoutes}</Switch>
      </BrowserRouter>
    </Switch>
  </BrowserRouter>
)

export default AppRouter
