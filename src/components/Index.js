import React from 'react'
import Markdown from 'react-markdown'
import logo from '../assets/sixth.svg'

const md = `
# SIXTH &middot; FRONTEND UDVIKLING

CVR 38418998
`

const Index = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Markdown source={md} />
      </header>
    </div>
  )
}

export default Index
