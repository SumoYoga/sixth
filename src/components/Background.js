import React from 'react'
import '../styles/Background.scss'
import catTyping from '../assets/cat-typing.gif'

const Background = props => {
  return (
    <div
      className="Background"
      style={{ backgroundImage: `url(${props.bg || catTyping})` }}
    />
  )
}

export default Background
