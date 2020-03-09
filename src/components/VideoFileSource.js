import React from 'react'

import style from '../styles.module.scss'

const VideoFileSource = ({ onFileChange }) => {
  return (
    <div className={style.videoFileSource}>
      <label htmlFor="videoFile">
        Select File
        <input
          id="videoFile"
          name="videoFile"
          type="file"
          onChange={onFileChange}
        />
      </label>
    </div>
  )
}

export default VideoFileSource
