import React from 'react'
import Askbox from './Askbox'
import './Css/feed.css'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
        <Askbox />
        <Post />
    </div>
  )
}

export default Feed
