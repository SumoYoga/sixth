import React from 'react'
import { Link } from 'react-router-dom'

const Post = props => {
  const { __content } = props.article
  return (
    <div>
      <Link to="/">« Back</Link>
      <ul>
        {props.article.keywords.map(w => (
          <li key={w}>{w}</li>
        ))}
      </ul>
      <div dangerouslySetInnerHTML={{ __html: __content }} />
    </div>
  )
}

export default Post
