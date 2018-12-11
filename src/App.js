import React, { Component } from 'react'
import logo from './assets/sixth.svg'
import './styles/App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>SIXTH &middot; FRONTEND UDVIKLING</h1>
          <h2>CVR 38418998</h2>
        </header>
      </div>
    )
  }
}

export default App
