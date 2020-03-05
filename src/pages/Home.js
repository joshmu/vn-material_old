import React, { useRef } from 'react'

import Player from '../components/Player'

import { home, container, form } from './home.module.scss'

const url = 'https://www.youtube.com/watch?v=2e9diL0xTN4'

const Home = () => {
  const videoUrl = useRef('')

  return (
    <div className={home}>
      <div className={container}>
        <form className={form}>
          <label htmlFor="videoUrl"></label>
          <input
            name="videoUrl"
            type="text"
            placeholder="Video Url..."
            useRef={videoUrl}
          />
          <button type="submit">Submit</button>
        </form>

        <Player url={url} />
      </div>
    </div>
  )
}

export default Home
