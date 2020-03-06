import React, { useState, useContext } from 'react'

import Player from '../components/react-player/Player'

import { playerContext } from '../context/player/PlayerState'

import { home, container, form } from './home.module.scss'

const Home = () => {
  const [url, setUrl] = useState('')

  const { loadVideo, ready } = useContext(playerContext)

  const onChange = e => {
    setUrl(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    loadVideo(url)
  }

  return (
    <div className={home}>
      <div className={container}>
        {!ready && (
          <form className={form} onSubmit={onSubmit}>
            <label htmlFor="videoUrl" />
            <input
              name="videoUrl"
              type="text"
              value={url}
              onChange={onChange}
              placeholder="Video Url..."
            />
            <button type="submit">Go</button>
          </form>
        )}

        <Player />
      </div>
    </div>
  )
}

export default Home
