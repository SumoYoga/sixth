import React from 'react'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import logo from '../assets/sixth-circle.svg'

const md = `hello@sixth.dk`

const Index = () => {
  return (
    <main className="Home">
      <section className="header flex flex-col items-center justify-center">
        <Link to="/" className="logo mb-4">
          <img src={logo} alt="logo" />
        </Link>
        <Markdown source={md} />
      </section>
    </main>
  )
}

export default Index
