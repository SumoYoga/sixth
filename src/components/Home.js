import React from 'react'
import Markdown from 'react-markdown'
import logo from '../assets/sixth.svg'
import '../styles/Home.scss'

const md = `
# SIXTH &middot; FRONTEND UDVIKLING

CVR 38418998
`

const Index = () => {
  return (
    <div className="Home">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <Markdown source={md} />
      </header>
    </div>
  )
}

export default Index
