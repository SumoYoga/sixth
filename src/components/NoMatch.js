import React from 'react'
import Markdown from 'react-markdown'
import Background from './Background'
import prez from '../assets/president-roll-eyes.gif'

const md = `
There is nothing here ...
`

const Index = () => {
  return (
    <div className="NoMatch">
      <Background bg={prez} />
      <header className="header">
        <Markdown source={md} />
      </header>
    </div>
  )
}

export default Index
