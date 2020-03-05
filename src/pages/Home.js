import React from 'react'

import { home, container } from './home.module.scss'

const Home = () => {
  return (
    <div className={home}>
      <div className={container}>
        <h2>Let's get started!</h2>
        <p>When you are ready lets drop in your video. ;)</p>
      </div>
    </div>
  )
}

export default Home
