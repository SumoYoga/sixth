import React from 'react'
import Markdown from 'react-markdown'

const Section = props => {
  return (
    <section className="Section">
      <Markdown source={props.source} escapeHtml={false} />
    </section>
  )
}

export default Section
