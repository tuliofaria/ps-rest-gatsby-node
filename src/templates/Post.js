import React from 'react'

const Post = props => {
  return <pre>{JSON.stringify(props, null, 2)}</pre>
}
export default Post
