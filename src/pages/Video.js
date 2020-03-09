import React, { useState, useContext } from 'react'

import Player from '../components/react-player/Player'
import Todo from '../components/Todo'

import { playerContext } from '../context/player/PlayerState'

import style from '../styles.module.scss'

const Video = () => {
  const [urlSource, setUrlSource] = useState(true)
  const [url, setUrl] = useState('')

  const { loadVideo, ready } = useContext(playerContext)

  const toggleSource = () => setUrlSource(!urlSource)

  const onFileChange = e => {
    const file = e.target.files[0]
    const url = URL.createObjectURL(file)
    setUrl(url)
    loadVideo(url)
  }

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
          {urlSource ? (
            <>
              <label htmlFor="videoUrl">Video URL</label>
              <input
                id="videoUrl"
                name="videoUrl"
                type="text"
                value={url}
                onChange={onChange}
                placeholder="Video Url..."
              />
            </>
          ) : (
            <>
              <label htmlFor="videoFile">Video File</label>
              <input
                id="videoFile"
                name="videoFile"
                type="file"
                onChange={onFileChange}
              />
            </>
          )}
          <button onClick={toggleSource}>File</button>
        </form>
      )}

      <Player />
      {ready && <Todo />}
    </div>
  )
}

export default Video
