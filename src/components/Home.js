import React from 'react'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import logo from '../assets/sixth-circle.svg'

const md = `Sixth`

const Home = () => {
  return (
    <div className="Home">
      <header className="header">
        <Link to="/contact" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <Markdown source={md} />
      </header>
    </div>
  )
}

export default Home
