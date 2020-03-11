import React, { useContext, useState } from 'react'
import VideoFileSource from './VideoFileSource'
import SourceControls from './SourceControls'

import { playerContext } from '../context/player/PlayerState'

import style from '../styles.module.scss'

const LoadSource = ({ setInit }) => {
  const [urlSource, setUrlSource] = useState(true)
  const [url, setUrl] = useState('')

  const { loadVideo } = useContext(playerContext)

  const onFileChange = e => {
    const file = e.target.files[0]
    const url = URL.createObjectURL(file)
    setUrl(url)
    loadVideo(url)
    setInit(true)
  }

  const onChange = e => {
    setUrl(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    loadVideo(url)
    setInit(true)
  }
  return (
    <div>
      <SourceControls urlSource={urlSource} setUrlSource={setUrlSource} />
      <form className={`${style.form} formSource`} onSubmit={onSubmit}>
        {urlSource ? (
          <input
            id="videoUrl"
            name="videoUrl"
            type="text"
            value={url}
            onChange={onChange}
            placeholder="Video Url..."
          />
        ) : (
          <VideoFileSource onFileChange={onFileChange} />
        )}
      </form>
    </div>
  )
}

export default LoadSource
