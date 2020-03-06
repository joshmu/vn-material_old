import React, { useState, useContext } from 'react'

import Player from '../components/react-player/Player'
import Todo from '../components/Todo'

import { playerContext } from '../context/player/PlayerState'

import style from '../styles.module.scss'

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
    <div className={style.video}>
      {!ready && (
        <form className={style.form} onSubmit={onSubmit}>
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
      {ready && <Todo />}
    </div>
  )
}

export default Video
