import React from 'react'
import Markdown from 'react-markdown'
import Background from './Background'
import catGlasses from '../assets/cat-glasses.jpg'
import '../styles/NoMatch.scss'

const md = `
# 404
`

const Index = () => {
  return (
    <div className="NoMatch">
      <Background bg={catGlasses} />
      <header className="header">
        <Markdown source={md} />
      </header>
    </div>
  )
}

export default Index
