import React, { useRef } from 'react'

import Player from '../components/react-player/Player'

import { home, container, form } from './home.module.scss'

const url = 'https://www.youtube.com/watch?v=2e9diL0xTN4'

const Home = () => {
  const videoUrl = useRef(null)

  return (
    <div className={home}>
      <div className={container}>
        <form className={form}>
          <label htmlFor="videoUrl"></label>
          <input
            name="videoUrl"
            type="text"
            placeholder="Video Url..."
            ref={videoUrl}
          />
          <button type="submit">Submit</button>
        </form>
        <video src={videoUrl} autoPlay />
      </div>
    </div>
  )
}

export default Home
