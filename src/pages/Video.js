import React, { useState, useContext } from 'react'

import Player from '../components/react-player/Player'

import { playerContext } from '../context/player/PlayerState'

import { videoStyle, container, form } from './video.module.scss'

const Video = () => {
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
    <div className={videoStyle}>
      <div className={container}>
        {!ready && (
          <form className={form} onSubmit={onSubmit}>
            <label htmlFor="videoUrl">Video URL</label>
            <input
              id="videoUrl"
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

export default Video
