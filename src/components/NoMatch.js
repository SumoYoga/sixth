import React from 'react'
import Markdown from 'react-markdown'
import Background from './Background'
import prez from '../assets/president-roll-eyes.gif'

const md = `
There is nothing here ...
`

const Index = () => {
  return (
    <main className="NoMatch">
      <Background bg={prez} />
      <section className="header">
        <Markdown source={md} />
      </section>
    </main>
  )
}

export default Index
