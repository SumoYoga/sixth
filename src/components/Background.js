import React from 'react'
import '../styles/Background.scss'
import catTyping from '../assets/cat-typing.gif'

const Background = () => {
  return (
    <div
      className="Background"
      style={{ backgroundImage: `url(${catTyping})` }}
    />
  )
}

export default Background
