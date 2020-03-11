import React, { useContext, useState } from 'react'
import VideoFileSource from '../components/VideoFileSource'

import { playerContext } from '../context/player/PlayerState'

import style from '../styles.module.scss'

const LoadSource = () => {
  const [urlSource, setUrlSource] = useState(true)
  const [url, setUrl] = useState('')

  const { loadVideo, ready } = useContext(playerContext)

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
    <div>
      <form className={`${style.form} formSource`} onSubmit={onSubmit}>
        <div className="sourceControls">
          <button
            className={urlSource ? 'active' : 'inactive'}
            onClick={() => setUrlSource(true)}
          >
            URL
          </button>

          <button
            className={urlSource ? 'inactive' : 'active'}
            onClick={() => setUrlSource(false)}
          >
            File
          </button>
        </div>

        {urlSource ? (
          <>
            <label htmlFor="videoUrl"></label>
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
          <VideoFileSource onFileChange={onFileChange} />
        )}
      </form>
    </div>
  )
}

export default LoadSource
