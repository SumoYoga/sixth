import React from 'react'
import { Route } from 'react-router-dom'
import './styles/App.scss'
import Index from './components/Index'

const App = () => {
  return <Route path="/" exact component={Index} />
}

export default App
