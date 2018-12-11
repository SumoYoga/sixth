import React, { Component } from 'react'
import Markdown from 'react-markdown'
import logo from './assets/sixth.svg'
import './styles/App.scss'
import md from './markdown/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Markdown source={md} />
        </header>
      </div>
    )
  }
}

export default App
