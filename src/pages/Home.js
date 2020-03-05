import React, { useState } from 'react'

import Player from '../components/react-player/Player'

import { home, container, form } from './home.module.scss'

const Home = () => {
  const [vid, setVid] = useState('')

  const onChange = e => {
    setVid(e.target.value)
  }

  return (
    <div className={home}>
      <div className={container}>
        <form className={form}>
          <label htmlFor="videoUrl"></label>
          <input
            name="videoUrl"
            type="text"
            value={vid}
            onChange={onChange}
            placeholder="Video Url..."
          />
          {/* <button type="submit">
            Go
          </button> */}
        </form>

        <Player url={vid} />
      </div>
    </div>
  )
}

export default Home
