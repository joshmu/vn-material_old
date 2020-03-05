import React, { useState, useEffect, useRef } from 'react'

import ReactPlayer from 'react-player'

import {
  controlStyle,
  playerStyle,
  reactPlayerStyle
} from './player.module.scss'

const Player = ({ url }) => {
  const player = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    console.log('playing', playing)
  }, [playing])

  const onReady = () => {
    console.log('onReady')
  }

  const handlePlay = () => {
    console.log('onPlay')
    setPlaying(true)
  }

  const togglePlay = () => {
    setPlaying(!playing)
  }

  const handlePause = () => {
    console.log('onPause')
    // setPlaying(false)
  }

  return (
    <>
      <div className={controlStyle}>
        <button onClick={togglePlay}>
          {playing === true ? 'PAUSE' : 'PLAY'}
        </button>
      </div>
      <div className={playerStyle}>
        <ReactPlayer
          ref={player}
          className={reactPlayerStyle}
          url={url}
          onReady={onReady}
          onStart={() => console.log('onStart')}
          playing={playing}
          onPlay={handlePlay}
          onPause={handlePause}
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: { showinfo: 1, autoplay: 1 },
              preload: true
            }
          }}
        />
      </div>
    </>
  )
}

export default Player
