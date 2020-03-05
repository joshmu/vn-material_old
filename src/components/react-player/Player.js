import React, { useState, useEffect, useRef } from 'react'

import ReactPlayer from 'react-player'

// TEST URL:
// https://www.youtube.com/watch?v=hE2Ira-Cwxo

import {
  controlStyle,
  playerStyle,
  reactPlayerStyle
} from './player.module.scss'

const Player = ({ url }) => {
  const player = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    console.log('playing', playing)
  }, [playing])

  const onReady = () => {
    console.log('onReady')
    setReady(true)
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

  const handleDuration = duration => setDuration(duration)

  return (
    <>
      <div className={controlStyle}>
        {ready && (
          <button onClick={togglePlay}>{playing ? 'PAUSE' : 'PLAY'}</button>
        )}
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
          onDuration={handleDuration}
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
